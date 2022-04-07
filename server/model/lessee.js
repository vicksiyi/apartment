const Handle = require('../model/handle');
class Lessee extends Handle {
    constructor() {
        super();
    }
    query_room_rel_user() {
        const sql = `select urr.*,u.mobile from user_rel_room urr 
        left join users u on u.uuid = urr.user_uuid order by time desc;`;
        return super.commit(sql);
    }
    query_room_rel_user_continue_last_time(id) {
        const sql = `select endTime from user_rel_room_continue 
        where user_rel_room_id = ${id} order by endTime desc limit 1;`;
        return super.commit(sql);
    }
    query_continue_detail(id) {
        const sql = `select * from user_rel_room_continue 
        where user_rel_room_id = ${id} order by time;`;
        return super.commit(sql);
    }
    // end_lessee(id) {
    //     const sql = `update user_rel_room set status = 0 where id = ${id}`;
    //     return super.commit(sql);
    // }
    insert_user_rel_room_continue(id, startTime, endTime, money, msg) {
        console.log(id, startTime, endTime, money, msg);
        const sql = `insert into user_rel_room_continue(user_rel_room_id,startTime,endTime,
        money, msg) values(${id},'${startTime}','${endTime}',${money},'${msg}')`;
        return super.commit(sql);
    }
    query_room_rel_user_isexsit(roomId) {
        const sql = `select count(1) as num from user_rel_room 
        where room_uuid = '${roomId}' and status = 1`;
        return super.commit(sql);
    }
}
const lessee = new Lessee();
module.exports = lessee;