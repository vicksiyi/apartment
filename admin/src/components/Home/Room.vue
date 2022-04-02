<template>
  <div class="room">
    <div class="img">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU"
        alt=""
      />
    </div>
    <div class="detail">
      <div class="title">整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9</div>
      <div class="money">1000-1500</div>
      <div class="address"><i class="el-icon-location"></i>天河区xxx街道xxx号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  data() {
    return {};
  },
  methods: {},
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
.detail .money{
  color: #ff9900;
  font-size: 18px;
}
.detail .address {
  font-size: 16px;
  color: #909399;
}
</style>