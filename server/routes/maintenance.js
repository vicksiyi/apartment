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
    _result.map(value=>{
        value.time = utils.formatTimestamp(new Date(value.time).getTime());
        return value;
    })
    res.send({ code: 200, data: _result });;
})
module.exports = router;