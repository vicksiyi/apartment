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
}
const user = new User();
module.exports = user;