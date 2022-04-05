<template>
  <div class="room-left-detail" v-loading="loading">
    <!-- 房屋图片 -->
    <div class="room-img">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in room.images" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="detail">
      <h1>{{ room.title }}</h1>
      <p>
        价格:<span>{{ showMoney(room.startMoney, room.endMoney) }}</span>
      </p>
      <p>位置:{{ room.address }}</p>
      <p>联系:{{ room.mobile }}</p>
      <div class="detail-item">
        <div class="title">
          <div></div>
          配套设施
        </div>
        <div v-if="types.length != 0" class="item">
          <div v-for="item in types" :key="item.id" class="tag">{{ item }}</div>
        </div>
        <div v-else class="item" style="padding: 10px">不提供任何配套设施</div>
      </div>
      <div class="detail-item">
        <div class="title">
          <div></div>
          房屋详情
        </div>
        <div class="msg">
          {{ room.msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { usergetroom, usergetroomtype } from "@/api/room/user_room";
export default {
  name: "RoomLeftDetail",
  computed: {
    ...mapState({
      room: (state) => state.user_room.room,
    }),
    roomId() {
      let roomId = this.$route.query.roomId;
      if (roomId == undefined) this.$router.replace("/");
      else return roomId;
    },
  },
  watch: {
    roomId() {
      this.getData();
    },
  },
  data() {
    return {
      loading: false,
      types: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      this.$emit("evenLoading", true);
      Promise.all([
        usergetroom({ roomId: this.roomId }),
        usergetroomtype({ roomId: this.roomId }),
      ]).then((_result) => {
        if (_result[0].data.code != 200 || _result[1].data.code != 200)
          this.$message.error(_result.msg);
        else {
          this.$store.commit("user_room/updateRoom", _result[0].data.data);
          this.types = _result[1].data.data;
        }
        this.loading = false;
        this.$emit("evenLoading", false);
      });
    },
    showMoney(start, end) {
      if (start == 0 && end == 0) return "不限";
      else if (start == 0) return "<" + end;
      else if (end == 0) return ">" + start;
      else if (start == end) return start;
      else return start + "-" + end;
    },
  },
  mounted() {
    this.getData();
  },
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