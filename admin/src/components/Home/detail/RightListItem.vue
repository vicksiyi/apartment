<template>
  <el-card class="box-card margin-card">
    <div class="right-list-item">
      <div class="img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU"
          alt=""
        />
      </div>
      <div class="detail">
        <div class="title">
          <span>整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9</span>
        </div>
        <p>价格:<span>1000-1500</span></p>
        <p>位置:天河区xxx街道xxx号</p>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "RightListItem",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.right-list-item {
  display: flex;
  flex-direction: row;
  font-family: "webfont";
}
.margin-card:first-child {
  margin-top: 0;
}
.margin-card {
  margin-top: 20px;
}
.right-list-item .img img {
  width: 160px;
  height: 100px;
}
.right-list-item .detail {
  padding: 10px;
  line-height: 30px;
}
.right-list-item .detail .title {
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.right-list-item .detail .title span {
  font-size: 15px;
  font-weight: bolder;
  color: #000000;
}
.right-list-item .detail p {
  font-size: 15px;
}
.right-list-item .detail p span {
  color: #ff9900;
}
</style>