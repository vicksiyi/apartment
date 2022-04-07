const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('../model/user');
const multer = require('multer');
const check = require('../utils/check');
const file = require('../utils/file');
const uploadOss = require('../utils/upload');
const upload = multer({
    dest: __dirname + '/temp',
    limits: {
        fieldSize: 2 * 1024 * 1024 // 2 MB
    }
})

// $routes /user/putname
// @desc 提交真实姓名
// @access private
router.put('/putname', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { uuid, name } = req.user;
    let { new_name } = req.body;
    if (name != null) {
        res.send({ code: 400, msg: "不能修改！请联系管理员" });
    } else {
        let _reuslt = await user.putname(new_name, uuid).catch(err => {
            res.send({ code: 400, msg: "未知错误" });
            throw Error(err)
        });
        res.send({ code: 200 })
    }
})

// $routes /user/putidcard
// @desc 提交身份证号
// @access private
router.put('/putidcard', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { uuid, idcard } = req.user;
    let { new_idcard } = req.body;
    if (idcard != null) {
        res.send({ code: 400, msg: "不能修改！请联系管理员" });
    } else {
        let _reuslt = await user.putidcard(new_idcard, uuid).catch(err => {
            res.send({ code: 400, msg: "未知错误" });
            throw Error(err)
        });
        res.send({ code: 200 })
    }
})

// $routes /user/putidcardimg
// @desc 提交身份证
// @access private
router.post('/putidcardimg', upload.single('image'), passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { uuid, card_img_1, card_img_2 } = req.user;
    const mimetype = req.file.mimetype;
    const filepath = req.file.path;
    const { type } = req.body;
    if (!check.isImage(mimetype)) { // 图片类型限制
        file.delFile(filepath).then(() => {
            res.send({
                code: 400,
                msg: '上传类型只能是png/jpeg'
            })
        }).catch(err => { throw Error(err) });  // 删除缓存文件
        return;
    }
    const url = await uploadOss.uploadImage(filepath); // 上传到OSS获取url;
    if ((type == 0 && card_img_1 != null) || (type == 1 && card_img_2 != null)) {
        res.send({ code: 400, msg: "不能修改！请联系管理员" });
    } else {
        let reuslt = await user.putidcardimg(url, uuid, type);
        res.send({ code: 200, url: url, type: type })
    }
})

// $routes /user/putidcardimg
// @desc 获取个人信息
// @access private
router.get('/getpersondetail', upload.single('image'), passport.authenticate('jwt', { session: false }), async (req, res) => {
    const { name, idcard, card_img_1, card_img_2 } = req.user;
    res.send({
        code: 200,
        data: { name, idcard, card_img_1, card_img_2 }
    })
})
module.exports = router;