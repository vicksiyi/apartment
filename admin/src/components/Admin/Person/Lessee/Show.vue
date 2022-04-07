<template>
  <div class="device-type">
    <el-table
      :data="relRooms"
      v-loading="loading"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column prop="id" label="序号" width="50"> </el-table-column>
      <el-table-column prop="room_uuid" label="房间Id"> </el-table-column>
      <el-table-column prop="user_uuid" label="租户Id"> </el-table-column>
      <el-table-column prop="mobile" label="联系方式" width="120">
      </el-table-column>
      <el-table-column prop="startTime" label="入住时间" width="120">
      </el-table-column>
      <el-table-column prop="endTime" label="到期时间" width="120">
      </el-table-column>
      <el-table-column label="租金/月" width="100">
        <template slot-scope="scope">
          <el-tag type="success" effect="dark"> {{ scope.row.money }} </el-tag>
        </template></el-table-column
      >
      <el-table-column label="是否到期" width="80">
        <template>
          <el-tag type="danger" effect="dark"> 是 </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="查看" width="240">
        <template>
          <el-button type="success" @click="showRoom" size="mini"
            >公寓</el-button
          >
          <el-button type="warning" @click="continueRoom()" size="mini"
            >续租</el-button
          >
          <el-button type="" @click="showLessee" size="mini">租户</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button type="success" @click="continueRoom(4)" size="mini"
            >续租</el-button
          >
          <el-button type="danger" size="mini">退租</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getroomreluser } from "@/api/lessee/index";
export default {
  name: "Show",
  props: {
    update: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    update() {
      this.getData();
    },
  },
  computed: {
    ...mapState({
      relRooms: (state) => state.lessee.relRooms,
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    showRoom() {
      this.$emit("changeShowHandle", 1);
    },
    showLessee() {
      this.$emit("changeShowHandle", 2);
    },
    continueRoom(type = 3) {
      this.$emit("changeShowHandle", type);
    },
    async getData() {
      this.loading = true;
      let _result = (await getroomreluser()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$store.commit("lessee/updateRelRooms", _result.data);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
</style>