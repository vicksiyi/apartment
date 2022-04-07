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
    getusernotice(user_uuid) {
        const sql = `select * from notices where id 
        not in (select urn.notice_id from user_rel_notice urn 
            where urn.user_uuid = '${user_uuid}') and status = 1;`;
        return super.commit(sql);
    }
    doneusernotice(uuid, id) {
        const sql = `insert into user_rel_notice(user_uuid, notice_id)
        values('${uuid}',${id})`;
        return super.commit(sql);
    }
}
const notice = new Notice();
module.exports = notice;