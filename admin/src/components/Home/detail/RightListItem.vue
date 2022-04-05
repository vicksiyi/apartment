<template>
  <el-card class="box-card margin-card">
    <div @click="navDetail(room.uuid)" class="right-list-item">
      <div class="img">
        <img :src="room.url" alt="" />
      </div>
      <div class="detail">
        <div class="title">
          <span>{{ room.title }}</span>
        </div>
        <p>
          价格:<span>{{ showMoney(room.startMoney, room.endMoney) }}</span>
        </p>
        <p>位置:{{ room.address }}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "RightListItem",
  props: {
    room: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {
    navDetail(uuid) {
      this.$emit("navDetail", uuid);
    },
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