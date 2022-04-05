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

// $routes /room/usergetrooms
// @desc 获取公寓列表[用户]
// @access private
router.get('/usergetrooms', passport.authenticate('jwt', { session: false }), async (req, res) => {
    // 全部
    let _result = await room.user_query_room().catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    res.send({ code: 200, data: _result })
})

// $routes /room/usergetroom/:roomId
// @desc 获取某个公寓详细信息[用户]
// @access private
router.get('/usergetroom/:roomId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { roomId } = req.params;
    let _result = await room.user_query_one_room(roomId).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    let data = null;
    for (let i = 0; i < _result.length; i++) {
        if (!data) {
            data = Object.assign(_result[i], {});
            data.images = [data.url];
        } else if (_result[i].uuid == roomId) {
            data.images.push(_result[i].url);
        }
    }
    data.images = [...new Set(data.images)];
    res.send({ code: 200, data: data })
})

// $routes /room/usergetroomtype/:roomId
// @desc 获取某个公寓详细信息[用户]
// @access private
router.get('/usergetroomtype/:roomId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { roomId } = req.params;
    let _result = await room.user_query_one_room_type(roomId).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    _result = _result.map(value => value.title);
    res.send({ code: 200, data: _result })
})

// $routes /room/getrooms
// @desc 获取公寓列表
// @access private
router.get('/getrooms', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    // 全部
    let _result = await room.query_room().catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    res.send({ code: 200, data: _result })
})

// $routes /room/addroom
// @desc 添加公寓
// @access private
router.post('/addroom', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { title, mobile, address, msg, startMoney, endMoney, status } = req.body;
    let _result = await room.insert_room(title, mobile, address, msg, startMoney, endMoney, status).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 });
})

// $routes /room/editroom
// @desc 修改公寓
// @access private
router.put('/editroom', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { uuid, title, mobile, address, msg, startMoney, endMoney, status } = req.body;
    console.log(uuid);
    let _result = await room.update_room(uuid, title, mobile, address, msg, startMoney, endMoney, status).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 });
})

// $routes /room/adddevice
// @desc 添加房屋配套
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


// $routes /room/updatedevice
// @desc 添加房屋配套
// @access private
router.put('/updatedevice/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id } = req.params;
    let _result = await room.update_device(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /room/getdevice
// @desc 获取房屋配套
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

// $routes /room/addroomdevice
// @desc 添加房屋配套[room]
// @access private
router.post('/addroomdevice', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { roomId, deviceId } = req.body;
    let _result = await room.insert_room_rel_room_type(roomId, deviceId).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        // throw Error(err);
    });
    if (_result != undefined) res.send({ code: 200 })
})

// $routes /room/getroomdevice
// @desc 获取房屋配套[room]
// @access private
router.get('/getroomdevice/:roomId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { roomId } = req.params;
    let _result = await room.query_room_rel_room_type(roomId).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        // throw Error(err);
    });
    _result = utils.toJson(_result);
    res.send({ code: 200, data: _result })
})

// $routes /room/delroomdevice
// @desc 删除房屋配套[room]
// @access private
router.delete('/delroomdevice/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id } = req.params;
    let _result = await room.del_room_rel_room_type(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /room/getimages
// @desc 获取公寓图片
// @access private
router.get('/getimages/:roomId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.send({ code: 401, msg: "没权限" });
    const { roomId } = req.params;
    let _result = await room.query_rel_room_image(roomId).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    _result = _result.map(value => {
        return { id: value.id, url: value.url };
    })
    res.send({ code: 200, data: _result });
})

// $routes /room/delimage
// @desc 删除公寓照片
// @access private
router.put('/delimage/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.send({ code: 401, msg: "没权限" });
    const { id } = req.params;
    let _result = await room.del_rel_room_image(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 });
})
module.exports = router;