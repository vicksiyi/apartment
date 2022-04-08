const Handle = require('../model/handle');
class Maintenance extends Handle {
    constructor() {
        super();
    }
    add(type, roomRelId, isEmergency, msg) {
        const sql = `insert into maintenances(type_id,room_rel_id,isEmergency,msg)
        values(${type},${roomRelId},${isEmergency},'${msg}')`;
        return super.commit(sql);
    }
    get_user_maintenance(uuid) {
        const sql = `select m.id,mt.title as type,m.isEmergency,m.status,
        m.time,m.msg,r.title,r.mobile,r.address from maintenances m 
        inner join  user_rel_room urr on m.room_rel_id = urr.id 
        inner join rooms r on r.uuid = urr.room_uuid 
		inner join maintenance_type mt on mt.id = m.type_id
        where user_uuid = '${uuid}' order by m.time desc limit 20;`;
        return super.commit(sql);
    }
    add_maintenance_type(title) {
        const sql = `insert into maintenance_type(title) values('${title}')`;
        return super.commit(sql);
    }
    get_maintenance_types() {
        const sql = `select id,title from maintenance_type where status = 1;`;
        return super.commit(sql);
    }
    del_maintenance_types(id) {
        const sql = `update maintenance_type set status = 0 where id = ${id}`;
        return super.commit(sql);
    }
    get_maintenances() {
        const sql = `select m.id,mt.title,r.address,m.isEmergency,m.time,m.status,m.msg,u.mobile from maintenances m 
        inner join user_rel_room urr on urr.id = m.room_rel_id
        inner join rooms r on r.uuid = urr.room_uuid
        inner join maintenance_type mt on mt.id = m.type_id
        inner join users u on u.uuid = urr.user_uuid;`;
        return super.commit(sql);
    }
    update_status_maintenance(id, status) {
        const sql = `update maintenances set status = ${status}
        where id = ${id}`;
        return super.commit(sql);
    }
}
const maintenance = new Maintenance();
module.exports = maintenance;