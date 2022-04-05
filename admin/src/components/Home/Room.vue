<template>
  <div class="room">
    <div class="img">
      <img :src="room.url" alt="" />
    </div>
    <div class="detail">
      <div class="title">{{ room.title }}</div>
      <div class="money">{{ showMoney(room.startMoney, room.endMoney) }}</div>
      <div class="address">
        <i class="el-icon-location"></i>{{ room.address }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  props: {
    room: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    showMoney(start, end) {
      if (start == 0 && end == 0) return "不限";
      else if (start == 0) return "<" + end;
      else if (end == 0) return ">" + start;
      else if (start == end) return start;
      else return start + "-" + end;
    },
  },
};
</script>

<style scoped>
.room {
  width: 100%;
}
.room .img {
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 250px;
}
.room img {
  width: 100%;
  height: 250px;
}
.room img:hover {
  transform: scale(1.5);
}
.detail .title {
  overflow: hidden;
  height: 25px;
  font-size: 18px;
  color: #303133;
  font-family: "room-title";
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  padding-top: 20px;
}
.detail .money {
  color: #ff9900;
  font-size: 18px;
}
.detail .address {
  font-size: 16px;
  color: #909399;
}
</style>