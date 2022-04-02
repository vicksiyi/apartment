<template>
  <div class="room-left-detail">
    <!-- 房屋图片 -->
    <div class="room-img">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU"
            alt=""
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="detail">
      <h1>整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9</h1>
      <p>价格:<span>1000-1500</span></p>
      <p>位置:天河区xxx街道xxx号</p>
      <p>联系:13338888888</p>
      <div class="detail-item">
        <div class="title">
          <div></div>
          配套设施
        </div>
        <div class="item">
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
          <div class="tag">洗衣机</div>
        </div>
      </div>
      <div class="detail-item">
        <div class="title">
          <div></div>
          房屋详情
        </div>
        <div class="msg">
          【交通出行】
          小区交通出行便利，出门往东有昌盛园二区东门公交站，326路从南邵地铁站到朝凤庵村，也经过昌平东关地铁站。
          <br />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU"
            alt=""
          />
          <br />
          【周边配套】
          小区周边配套齐全，有小吃店，便利店，蔬菜水果超市，公交站等配套设施健身场所。
          <br />
          【小区介绍】
          此房源位于昌盛园二区，小区有停车位，电动自行车车棚，出行便利
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomLeftDetail",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.room-left-detail {
  font-family: "webfont";
}
.room-img {
  width: 95%;
  margin: auto;
}
.room-img img {
  width: 100%;
  height: 400px;
}
.detail {
  padding: 20px;
}
h1 {
  padding-left: 20px;
  font-size: 25px;
  font-weight: 600;
}
.detail p {
  font-size: 20px;
  padding-top: 10px;
  padding-left: 20px;
}
.detail p span {
  color: #e6a23c;
  padding-left: 20px;
}
.detail .detail-item {
  margin-top: 30px;
  padding: 20px;
}
.detail .detail-item .title div {
  width: 4px;
  height: 30px;
  margin-right: 10px;
  background: #ff9900;
}
.detail .detail-item .title {
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  display: flex;
  flex-direction: row;
}
.detail .detail-item .item {
  display: flex;
  flex-flow: wrap;
  width: 100%;
}
.detail .detail-item .item .tag {
  /* height: 20px; */
  background: #c3cbd6;
  padding: 10px;
  line-height: 20px;
  color: #fff;
  border: 3px;
  margin: 10px;
}
.detail .detail-item .msg {
  line-height: 50px;
}
</style>