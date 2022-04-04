const express = require('express');
const router = express.Router();
const room = require('../model/room');
const passport = require('passport');
const utils = require('../utils/utils');
const keys = require('../config/keys');

// $routes /room/getrooms
// @desc 获取公寓列表[游客]
// @access private
router.get('/user/getrooms', async (req, res) => {
    // 全部

})


// $routes /room/getrooms
// @desc 获取公寓列表
// @access private
router.get('/getrooms', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.send({ code: 401, msg: "没权限" });
    // 全部

})

// $routes /room/addroom
// @desc 添加公寓
// @access private
router.post('/addroom', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.send({ code: 401, msg: "没权限" });
})

// $routes /room/adddevice
// @desc 添加设备
// @access private
router.post('/adddevice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { title } = req.body;
    let _result = await room.insert_device(title).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /room/getdevice
// @desc 获取设备
// @access private
router.get('/getdevice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    let _result = await room.query_device().catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    res.send({ code: 200, data: _result })
})

// $routes /room/addimage
// @desc 添加公寓图片
// @access private
router.post('/addimage', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.send({ code: 401, msg: "没权限" });
})
module.exports = router;