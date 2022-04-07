const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');
const passport = require('passport');
const user = require('../model/user');
const lessee = require('../model/lessee');
const transaction = require("../model/transaction");

// $routes /lessee/addroomreluser
// @desc 添加租户[事务处理]
// @access private
router.post('/addroomreluser', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { roomid, mobile, money, msg } = req.body;
    let { startTime, endTime } = req.body;
    let isexit = await lessee.query_room_rel_user_isexsit(roomid).catch(err => {
        res.send({ code: 400, msg: "未知错误" }); throw err;
    });
    isexit = utils.toJson(isexit);
    if (isexit[0].num > 0) {
        res.send({ code: 400, msg: "房间已出租" })
    } else {
        startTime = utils.formatTimestamp(new Date(startTime).getTime());
        endTime = utils.formatTimestamp(new Date(endTime).getTime());
        let _user = await user.getuuid(mobile, 0).catch(err => {
            res.send({ code: 400, msg: "未知错误" })
            throw Error(err);
        });
        _user = utils.toJson(_user);
        if (_user.length == 0) res.send({ code: 400, msg: '用户不存在' });
        else {
            let userid = _user[0].uuid;
            transaction.start().catch(err => {
                res.send({ code: 400, msg: "未知错误" }); throw err;
            }); // 开启事务
            let sql = `insert into user_rel_room(user_uuid,room_uuid,money,startTime,endTime,msg)
        values('${userid}','${roomid}',${money},'${startTime}','${endTime}','${msg}');`;
            transaction.insert(sql).then(() => {
                return new Promise((resolve, reject) => {
                    sql = `update rooms set status = 2 where uuid='${roomid}'`;
                    // 更新状态
                    transaction.insert(sql).then((orderLast) => {
                        resolve();
                    }).catch((error) => reject(error));
                })
            }).then(() => {
                // 提交事务
                return new Promise((resolve, reject) => {
                    transaction.commit().then(() => {
                        res.send({ code: 200 })
                    }).catch((error) => reject(error));
                })
            }).catch(err => {
                res.send({ code: 400, msg: '插入失败/尝试续租?' })
                transaction.rollback(err);
            });
        }
    }
})

// $routes /lessee/continueroomreluser
// @desc 续租租户[事务处理]
// @access private
router.post('/continueroomreluser', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    const { id, startTime, endTime } = req.body;
    lessee.insert_user_rel_room_continue({ id, startTime, endTime }).catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    res.send({ code: 200 })
})

// $routes /lessee/getroomreluser
// @desc 获取租户
// @access private
router.get('/getroomreluser', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (req.user.identity != 1) res.status(401).send({ code: 401, msg: "没权限" });
    let _result = await lessee.query_room_rel_user().catch(err => {
        res.send({ code: 400, msg: "未知错误" })
        throw Error(err);
    });
    _result = utils.toJson(_result);
    _result = _result.map(value => {
        value.startTime = utils.formatTimestamp(new Date(value.startTime).getTime()).split(" ")[0];
        value.endTime = utils.formatTimestamp(new Date(value.endTime).getTime()).split(" ")[0];
        return value;
    })
    res.send({ code: 200, data: _result })
})
module.exports = router;