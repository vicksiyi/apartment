const Handle = require('../model/handle');
class User extends Handle {
    constructor() {
        super();
    }
    // 手机号获取用户uuid
    getuuid(mobile, identity) {
        const sql = `select uuid from users where mobile = '${mobile}' and identity = ${identity};`;
        return super.commit(sql);
    }
    putname(name, uuid) {
        const sql = `update users set name = '${name}' where uuid = '${uuid}';`;
        return super.commit(sql);
    }
    putidcard(idcard, uuid) {
        const sql = `update users set idcard = '${idcard}' where uuid = '${uuid}';`;
        return super.commit(sql);
    }
    putidcardimg(url, uuid, type) {
        let sql;
        if (type == 0) {
            sql = `update users set card_img_1 = '${url}' where uuid = '${uuid}';`
        } else {
            sql = `update users set card_img_2 = '${url}' where uuid = '${uuid}';`;
        }
        return super.commit(sql);
    }
    // 获取个人房屋信息情况【首次】
    getuserroom_first(uuid) {
        const sql = `select urr.id,urr.room_uuid,urr.startTime,urr.endTime,
        urr.money,urr.status,r.title,r.mobile,r.address 
        from user_rel_room urr inner join rooms r on 
        r.uuid = urr.room_uuid where urr.user_uuid 
        = "${uuid}" order by urr.time desc;`;
        return super.commit(sql);
    }
    // 获取个人房屋信息情况【续费】
    getuserroom_continue(id) {
        const sql = `select startTime,endTime,money,msg,time 
        from user_rel_room_continue where user_rel_room_id = ${id};`;
        return super.commit(sql);
    }
    // 更新密码
    updatepasswd(uuid, passwd) {
        const sql = `update users set passwd = '${passwd}' where uuid = '${uuid}'`;
        console.log(sql);
        return super.commit(sql);
    }
}
const user = new User();
module.exports = user;