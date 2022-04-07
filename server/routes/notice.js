const express = require('express');
const router = express.Router();
const passport = require('passport');
const utils = require("../utils/utils");
const notice = require('../model/notice');

// $routes /notice/addnotice
// @desc 提交通知
// @access private
router.post('/addnotice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { title, content } = req.body;
    let _result = await notice.addnotice(title, content).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /notice/getnotices
// @desc 获取通知
// @access private
router.get('/getnotices', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    let _result = await notice.getnotices().catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    _result = _result.map(value => {
        value.time = utils.formatTimestamp(new Date(value.time).getTime());
        return value;
    })
    res.send({ code: 200, data: _result })
})

// $routes /notice/clearnotice
// @desc 撤回
// @access private
router.put('/clearnotice/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id } = req.params;
    let _result = await notice.clearnotice(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /notice/getusernotice/:id
// @desc 获取通知[用户]
// @access private
router.get('/getusernotice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { uuid } = req.user;
    let _result = await notice.getusernotice(uuid).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200, data: _result });
})

// $routes /notice/doneusernotice/:id
// @desc 收到通知
// @access private
router.put('/doneusernotice/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id } = req.params;
    const { uuid } = req.user;
    let _result = await notice.doneusernotice(uuid, id).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 });
})
module.exports = router;