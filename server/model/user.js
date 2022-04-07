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
}
const user = new User();
module.exports = user;