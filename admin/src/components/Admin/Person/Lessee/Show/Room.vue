<template>
  <div class="room" v-loading="loading">
    <div class="item">
      <div class="item-tag">
        <div class="first-tag"></div>
        <div class="title">公寓照片</div>
      </div>
      <div class="img-list">
        <el-row :guter="20">
          <el-col
            v-for="item in room.images"
            :key="item.id"
            :span="6"
            style="margin: 10px"
          >
            <el-image
              style="width: 120px; height: 120px"
              :src="item"
              :preview-src-list="room.images"
            ></el-image>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="item">
      <div class="item-tag">
        <div class="first-tag"></div>
        <div class="title">公寓信息</div>
      </div>
      <el-descriptions
        class="margin-top"
        :column="1"
        :size="size"
        border
        style="margin-top: 20px"
      >
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            标题
          </template>
          {{ room.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            联系人
          </template>
          {{ room.mobile }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ room.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            租金
          </template>
          <el-tag size="small">{{
            showMoney(room.startMoney, room.endMoney)
          }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            描述
          </template>
          {{ room.msg }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getroom } from "@/api/lessee/index";
export default {
  name: "Room",
  computed: {
    ...mapState({
      roomId: (state) => state.lessee.roomId,
    }),
  },
  watch: {
    roomId() {
      this.getData();
    },
  },
  data() {
    return {
      room: {},
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getroom({ roomId: this.roomId })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.room = _result.data;
      this.loading = false;
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
@import url("../../../../../assets/css/scroll.css");
.room {
  padding: 20px;
}
.item-tag {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.item-tag .first-tag {
  width: 3px;
  height: 20px;
  margin-right: 10px;
  background: #409eff;
}

.item-tag .title {
  font-size: 16px;
  line-height: 20px;
  font-family: "webfont";
}
.img-list {
  margin-top: 20px;
}
</style>
