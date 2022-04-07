const Handle = require('../model/handle');
class Notice extends Handle {
    constructor() {
        super();
    }
    addnotice(title, content) {
        const sql = `insert into notices(title,content) 
        values('${title}','${content}')`;
        return super.commit(sql);
    }
    getnotices() {
        const sql = `select * from notices;`;
        return super.commit(sql);
    }
    clearnotice(id) {
        const sql = `update notices set status = 0 where id = ${id}`;
        return super.commit(sql);
    }
}
const notice = new Notice();
module.exports = notice;