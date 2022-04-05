const Handle = require('../model/handle');
class Room extends Handle {
    constructor() {
        super();
    }
    insert_device(title) {
        const sql = `insert into room_type(title) values('${title}');`;
        return super.commit(sql);
    }
    query_device() {
        const sql = `select * from room_type order by time desc`;
        return super.commit(sql);
    }
    update_device(id) {
        const sql = `update room_type set status = !status where id = ${id}`;
        return super.commit(sql);
    }
    update_room(uuid, title, mobile, address, msg, startMoney, endMoney, status) {
        const sql = `update rooms set title='${title}',mobile='${mobile}',address='${address}'
        ,msg='${msg}',startMoney=${startMoney},endMoney=${endMoney},status=${status} where uuid = '${uuid}'`;
        return super.commit(sql);
    }
    insert_room(title, mobile, address, msg, startMoney, endMoney, status) {
        const sql = `insert into rooms(title,mobile,address,msg,startMoney,endMoney,status) 
        values('${title}','${mobile}','${address}','${msg}',${startMoney},${endMoney},${status});`;
        return super.commit(sql);
    }
    query_room() {
        const sql = `select * from rooms order by time desc`;
        return super.commit(sql);
    }
    user_query_room() {
        const sql = `select rs.uuid,rs.title,rs.startMoney,rs.endMoney,rs.address,i.url from rooms rs 
        inner join room_rel_image i on i.room_uuid = rs.uuid where rs.status = 1 order by rs.time desc;`;
        return super.commit(sql);
    }
    user_query_one_room(roomId) {
        const sql = `select rs.*,i.url from rooms rs right join room_rel_image i 
        on i.room_uuid = rs.uuid where rs.status = 1 
        and rs.uuid = '${roomId}';`;
        return super.commit(sql);
    }
    user_query_one_room_type(roomId) {
        const sql = `select rt.title from room_rel_room_type rrrt 
        inner join room_type rt on 
        rt.id = rrrt.room_type_id where rrrt.room_uuid = "${roomId}";`;
        return super.commit(sql);
    }
    insert_rel_room_image(roomId, url) {
        const sql = `insert into room_rel_image(room_uuid,url) 
        values('${roomId}','${url}')`;
        return super.commit(sql);
    }
    query_rel_room_image(roomId) {
        const sql = `select * from room_rel_image where room_uuid = '${roomId}'`;
        return super.commit(sql);
    }
    del_rel_room_image(id) {
        const sql = `delete from room_rel_image where id = ${id}`;
        return super.commit(sql);
    }
    insert_room_rel_room_type(roomId, deviceId) {
        const sql = `insert into room_rel_room_type(room_uuid,room_type_id) 
        values('${roomId}',${deviceId})`;
        return super.commit(sql);
    }
    query_room_rel_room_type(roomId) {
        const sql = `select * from room_rel_room_type where room_uuid = '${roomId}';`;
        return super.commit(sql);
    }
    del_room_rel_room_type(id) {
        const sql = `delete from room_rel_room_type where id = ${id}`;
        return super.commit(sql);
    }
}
const room = new Room();
module.exports = room;