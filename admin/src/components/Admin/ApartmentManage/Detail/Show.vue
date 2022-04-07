<template>
  <div class="device-type">
    <el-table
      v-loading="loading"
      :data="room"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column sortable prop="time" label="日期"> </el-table-column>
      <el-table-column prop="uuid" label="公寓Id"> </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column prop="mobile" label="联系"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="images" label="图片" width="80">
        <template slot-scope="scope">
          <el-button type="success" @click="show(scope.row.uuid)" size="mini"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="devices" label="配套设施" width="80">
        <!-- <template slot-scope="scope">
          <el-tag
            v-for="item in scope.row.devices"
            :key="item"
            type="success"
            >{{ item }}</el-tag
          >
        </template> -->
        <template slot-scope="scope">
          <el-button
            type="success"
            @click="showDevice(scope.row.uuid)"
            size="mini"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="money" label="价格">
        <template slot-scope="scope">
          {{ showMoney(scope.row.startMoney, scope.row.endMoney) }}
        </template>
      </el-table-column>
      <el-table-column prop="msg" label="公寓描述" width="80">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            :content="scope.row.msg"
          >
            <el-button type="primary" size="mini" slot="reference"
              >显示</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status == 0">未上架</el-tag>
          <el-tag v-else-if="scope.row.status == 1" type="success"
            >已上架</el-tag
          >
          <el-tag v-else type="info">已出租</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button :disabled="scope.row.status == 2" type="warning" @click="edit(scope.$index)" size="mini"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getrooms } from "@/api/room/index";
import { formatTimestamp } from "@/utils/format";
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
      rooms: (state) => state.room.rooms,
      page: (state) => state.room.page,
    }),
    room() {
      let room = [];
      let start = 10 * (this.page - 1);
      let end = start + 10 > this.rooms.length ? this.rooms.length : start + 10;
      for (let i = start; i < end; i++) {
        room.push(this.rooms[i]);
      }
      return room;
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    edit(index) {
      this.$store.commit(
        "room/updateRoom",
        this.rooms[10 * (this.page - 1) + index]
      );
      this.$emit("show", true);
    },
    show(roomId) {
      this.$emit("showImage", roomId);
    },
    showDevice(roomId) {
      this.$emit("showDevice", roomId);
    },
    async getData() {
      this.loading = true;
      let _result = (await getrooms()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      const rooms = _result.data.map((value) => {
        value.time = formatTimestamp(new Date(value.time).getTime());
        return value;
      });
      this.$store.commit("room/updateRooms", rooms);
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
</style>
