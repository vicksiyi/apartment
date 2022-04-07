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
    insert_user_rel_room_continue(user_rel_room_id, startTime, endTime) {
        const sql = `insert into user_rel_room_continue(user_rel_room_id,startTime,endTime)
        values(${user_rel_room_id},'${startTime}','${endTime}')`;
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