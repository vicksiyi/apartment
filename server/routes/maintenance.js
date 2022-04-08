const express = require('express');
const router = express.Router();
const passport = require('passport');
const utils = require('../utils/utils');
const maintenance = require('../model/maintenance');


// $routes /user/addmaintenance
// @desc 提交
// @access private
router.post('/addmaintenance', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { type, roomRelId, isEmergency, msg } = req.body;
    let _result = await maintenance.add(type, roomRelId, isEmergency, msg).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    res.send({ code: 200 });;
})

// $routes /user/getusermaintenance
// @desc 获取提交历史
// @access private
router.get('/getusermaintenance', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { uuid } = req.user;
    let _result = await maintenance.get_user_maintenance(uuid).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    _result = utils.toJson(_result);
    _result.map(value => {
        value.time = utils.formatTimestamp(new Date(value.time).getTime());
        return value;
    })
    res.send({ code: 200, data: _result });;
})

// $routes /user/addmaintenancetype
// @desc 提交维修类别
// @access private
router.post('/addmaintenancetype', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { title } = req.body;
    let _result = await maintenance.add_maintenance_type(title).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    res.send({ code: 200 });;
})

// $routes /user/getmaintenancetypes
// @desc 获取维修类别【用户】
// @access private
router.get('/getmaintenancetypes', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let _result = await maintenance.get_maintenance_types().catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    _result = utils.toJson(_result);
    res.send({ code: 200, data: _result });;
})

// $routes /user/delmaintenancetype
// @desc 删除维修类别
// @access private
router.put('/delmaintenancetype/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { id } = req.params;
    let _result = await maintenance.del_maintenance_types(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    res.send({ code: 200 });;
})

// $routes /user/getmaintenances
// @desc 获取维修[管理端]
// @access private
router.get('/getmaintenances', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id } = req.params;
    let _result = await maintenance.get_maintenances(id).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    _result = utils.toJson(_result);
    _result = _result.map(value => {
        value.time = utils.formatTimestamp(new Date(value.time).getTime());
        return value;
    })
    res.send({ code: 200, data: _result });;
})

// $routes /user/actionmaintenances
// @desc 处理
// @access private
router.put('/actionmaintenances', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id, status } = req.body;
    console.log(id,status);
    let _result = await maintenance.update_status_maintenance(id, status).catch(err => {
        res.send({ code: 400, msg: "未知错误" });
        throw Error(err)
    });
    res.send({ code: 200 });
})
module.exports = router;