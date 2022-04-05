<template>
  <div class="room-list">
    <!-- <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="4">
        <el-select v-model="domain" clearable placeholder="筛选地区">
          <el-option
            v-for="item in domains"
            :key="item.id"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="money" clearable placeholder="租金范围">
          <el-option
            v-for="item in moneys"
            :key="item.id"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row> -->
    <el-row v-loading="loading" :gutter="20">
      <el-col
        v-for="item in room"
        :key="item.uuid"
        :span="6"
        style="margin-top: 10px"
      >
        <div @click="navDetail(item.uuid)">
          <el-card class="box-card">
            <Room :room="item"></Room>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <div class="page">
      <el-pagination
        :current-page="page"
        @current-change="pageChange"
        :page-size="8"
        background
        layout="prev, pager, next"
        :total="rooms.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { usergetrooms } from "@/api/room/user_room";
import Room from "@/components/Home/Room";
export default {
  name: "RoomList",
  components: { Room },
  computed: {
    ...mapState({
      rooms: (state) => state.user_room.rooms,
      page: (state) => state.user_room.page,
    }),
    room() {
      let room = [];
      let start = 8 * (this.page - 1);
      let end = start + 8 > this.rooms.length ? this.rooms.length : start + 8;
      for (let i = start; i < end; i++) {
        room.push(this.rooms[i]);
      }
      return room;
    },
  },
  data() {
    return {
      // domains: ["天河区", "番禺区", "xx区"],
      // moneys: ["1000<", "1000-1500", "1500-2000", ">2000"],
      domain: "",
      money: "",
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await usergetrooms()).data;
      this.loading = false;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$store.commit("user_room/updateRooms", _result.data);
        this.rooms = _result.data;
      }
    },
    navDetail(roomId) {
      this.$router.push(`/detail?roomId=${roomId}`);
    },
    pageChange(page) {
      this.$store.commit("user_room/updatePage", page);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.page {
  margin-top: 20px;
}
.el-pagination {
  text-align: center;
}
</style>
