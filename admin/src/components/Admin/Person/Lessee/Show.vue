<template>
  <div class="device-type">
    <el-table
      :data="relRooms"
      v-loading="loading"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column label="序号" width="50">
        <template slot-scope="scope">
          <p>{{ (page - 1) * 10 + scope.$index + 1 }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="room_uuid" label="房间Id"> </el-table-column>
      <el-table-column prop="user_uuid" label="租户Id"> </el-table-column>
      <el-table-column prop="mobile" label="联系方式" width="120">
      </el-table-column>
      <el-table-column prop="startTime" label="入住时间" width="120">
      </el-table-column>
      <el-table-column prop="endTime" label="到期时间" width="120">
      </el-table-column>
      <el-table-column label="是否在租" width="60">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 1" type="success" effect="dark">
            是
          </el-tag>
          <el-tag v-else type="danger" effect="dark"> 否 </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="租金/月" width="100">
        <template slot-scope="scope">
          <el-tag type="success"> {{ scope.row.money }} </el-tag>
        </template></el-table-column
      >
      <el-table-column label="是否到期" width="80">
        <template slot-scope="scope">
          <el-tag v-if="isEnd(scope.row.endTime)" type="success" effect="dark">
            否
          </el-tag>
          <el-tag v-else type="danger" effect="dark"> 是 </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="查看" width="240">
        <template slot-scope="scope">
          <el-button
            type="success"
            @click="showRoom(scope.row.room_uuid)"
            size="mini"
            >公寓</el-button
          >
          <el-button
            type="warning"
            @click="continueRoom(3, scope.row.id)"
            size="mini"
            >续租</el-button
          >
          <el-button
            type=""
            @click="showLessee(scope.row.user_uuid)"
            size="mini"
            >租户</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="success"
            :disabled="scope.row.status == 0"
            @click="continueRoom(4, scope.row.id)"
            size="mini"
            >续租</el-button
          >
          <el-button
            :disabled="scope.row.status == 0"
            @click="endLessee(scope.row.id)"
            type="danger"
            size="mini"
            >退租</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getroomreluser, endlessee } from "@/api/lessee/index";
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
      page: (state) => state.lessee.page,
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    showRoom(id) {
      this.$store.commit("lessee/updateRoomId", id);
      this.$emit("changeShowHandle", 1);
    },
    showLessee(id) {
      this.$store.commit("lessee/updateUserId", id);
      this.$emit("changeShowHandle", 2);
    },
    continueRoom(type, id) {
      this.$store.commit("lessee/updateContinueId", id);
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
    isEnd(endTime) {
      let newTime = new Date().getTime();
      endTime = new Date(endTime).getTime();
      return newTime <= endTime;
    },
    async endLessee(id) {
      this.loading = true;
      let _result = (await endlessee({ id: id })).data;
      if (_result.code != 200) {
        this.$message.error(_result.msg);
        this.loading = false;
      } else _result = await this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>