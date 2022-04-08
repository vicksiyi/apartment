const Handle = require('../model/handle');
class Maintenance extends Handle {
    constructor() {
        super();
    }
    add(type, roomRelId, isEmergency, msg) {
        const sql = `insert into maintenances(type,room_rel_id,isEmergency,msg)
        values('${type}',${roomRelId},${isEmergency},'${msg}')`;
        return super.commit(sql);
    }
    get_user_maintenance(uuid) {
        const sql = `select m.id,m.type,m.isEmergency,m.status,
        m.time,m.msg,r.title,r.mobile,r.address from maintenances m 
        inner join  user_rel_room urr on m.room_rel_id = urr.id 
        inner join rooms r on r.uuid = urr.room_uuid 
        where user_uuid = '${uuid}' order by m.time desc limit 20;`;
        return super.commit(sql);
    }
}
const maintenance = new Maintenance();
module.exports = maintenance;