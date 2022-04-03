const Handle = require('../model/handle');
class Auth extends Handle {
    constructor() {
        super();
    }
    // 查看用户是否存在
    auth(mobile, identity) {
        const sql = `select * from users where 
        mobile = '${mobile}' and identity = ${identity};`;
        return super.commit(sql);
    }
    // 注册用户
    insert(mobile, passwd) {
        const sql = `insert into users(mobile,passwd) values('${mobile}','${passwd}');`;
        return super.commit(sql);
    }
}
const auth = new Auth();
module.exports = auth;