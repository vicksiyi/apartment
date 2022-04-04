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
        const sql = `select * from room_type where status = 0 order by time desc`;
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
}
const room = new Room();
module.exports = room;