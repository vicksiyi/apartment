const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const check = require('../utils/check');
const file = require('../utils/file');
const room = require('../model/room');
const uploadOss = require('../utils/upload');
const upload = multer({
    dest: __dirname + '/temp',
    limits: {
        fieldSize: 2 * 1024 * 1024 // 2 MB
    }
})

// 上传图片
// $routes /upload/images
// @desc 图片保存[缓存]
// @access private , passport.authenticate('jwt', { session: false })
router.post('/images', upload.single('image'), passport.authenticate('jwt', { session: false }), async (req, res) => {
    const mimetype = req.file.mimetype;
    const filepath = req.file.path;
    const { roomId } = req.body;
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
    let _reuslt = await room.insert_rel_room_image(roomId, url).catch(err => {
        res.send({ code: 400, msg: "上传失败" });
        throw Error(err)
    });;
    res.send({ code: 200 })
})
module.exports = router;