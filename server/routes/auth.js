const express = require('express');
const router = express.Router();
const auth = require('../model/auth');
const utils = require('../utils/utils');
const md5 = require('js-md5');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const getSmsCode = require("../utils/random").getSmsCode;
const redisHandle = require("../utils/redis");

// JWT生成
const jwtToken = function (rule) {
    return new Promise((resolve, reject) => {
        jwt.sign(rule, keys.secretUser, { expiresIn: 3600 }, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        })
    })
}

// 验证手机号
const oauthPhone = (mobile, code) => {
    return new Promise(async (resolve, reject) => {
        let _result = await redisHandle.getKey(`apartment:register:${mobile}`).catch(err => {
            reject(err);
        });
        if (_result === code) resolve(true);
        else resolve(false);
    })
}

// $routes /auth/register
// @desc 注册
// @access private
router.post('/register', async (req, res) => {
    let { mobile, code, passwd } = req.body;
    passwd = md5(mobile + passwd);
    if (!(/^1[3456789]\d{9}$/.test(mobile))) {  // 验证手机号
        res.send({ code: 400, msg: "手机号格式错误" });
        return;
    }
    let _result = await oauthPhone(mobile, code).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    if (_result) {
        // 验证码验证一次失效问题
        redisHandle.setTtlKey(`apartment:register:${mobile}`, 0, 60);
        let _count = await auth.auth(mobile, 0);
        _count = utils.toJson(_count);
        if (_count.length > 0) {
            res.send({ code: 400, msg: "账号已存在" });
        } else {
            //  注册用户
            _result = await auth.insert(mobile, passwd).catch(err => {
                res.send({ code: 400, msg: "未知错误" })
                throw Error(err);
            });
            res.send({ code: 200, msg: "注册成功" })
        }
    } else {
        res.send({
            code: 400,
            msg: "验证码错误"
        });
    }
})

// $routes /auth/isauth
// @desc 是否失效
// @access private
router.get('/isauth', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { identity } = req.user;
    const query = req.query;
    const is_admin = query.is_admin ? query.is_admin : 0;
    if (identity == 0 && is_admin == 1) res.status(401).send()
    else res.send({ code: 200 })
})

// $routes /auth/login
// @desc 登录
// @access private
router.post('/login', async (req, res) => {
    let { mobile, passwd, identity } = req.body;
    if (identity === undefined) identity = 0;
    if (!(/^1[3456789]\d{9}$/.test(mobile))) {
        res.send({
            status: "0001",
            msg: "手机号格式错误"
        });
        return;
    }
    passwd = md5(mobile + passwd);
    let _result = await auth.auth(mobile, identity).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    if (_result.length !== 0 && _result[0].passwd === passwd) {
        const rule = { uuid: _result[0].uuid, identity: identity };
        const _token = await jwtToken(rule).catch(err => {
            res.send({ code: 400, msg: "未知错误" })
            throw Error(err);
        });
        res.send({ code: 200, token: _token });
    } else if (_result.length !== 0) {
        res.json({ code: 400, msg: '密码错误' })
    } else {
        res.json({ code: 400, msg: '账号不存在' })
    }
})

// $routes /auth/sendSMS
// @desc 发送验证码
// @access private
router.post('/sendSMS', async (req, res) => {
    let { mobile } = req.body;
    console.log(mobile);
    if (!(/^1[3456789]\d{9}$/.test(mobile))) {
        res.send({ status: 400, msg: "手机号格式错误" });
        return;
    }
    let code = getSmsCode(1000, 9999);
    // 验证码一次失效问题
    let _result = await redisHandle.getKey(`apartment:register:${mobile}`).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    if (_result == 0) {
        res.send({ status: 200, msg: "禁止频繁发送" });
    } else {
        let _ttl = await redisHandle.getTtlKey(`apartment:register:${mobile}`).catch(err => {
            res.send({ code: 400, msg: "未知错误" })
            throw Error(err);
        });
        if (_ttl === -2 || _ttl < 3540) {
            redisHandle.setTtlKey(`apartment:register:${mobile}`, code).then(() => {
                res.send({ status: 200, msg: "发送成功" });
            }).catch(err => {
                res.send({ code: 400, msg: "未知错误" })
                throw Error(err);
            });
        } else {
            res.send({ status: 200, msg: "禁止频繁发送" });
        }
    }
})
module.exports = router;