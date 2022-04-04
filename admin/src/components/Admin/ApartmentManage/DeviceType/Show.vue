<template>
  <div class="show">
    <el-table
      v-loading="loading"
      :data="device"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column sortable prop="time" label="添加时间" width="180">
      </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            v-if="!scope.row.status"
            type="danger"
            @click="updateDevice(scope.row.id)"
            size="mini"
            >隐藏</el-button
          >
          <el-button
            v-else
            type="success"
            @click="updateDevice(scope.row.id)"
            size="mini"
            >显示</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { updatedevice, getdevice } from "@/api/room/index";
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
      devices: (state) => state.device.devices,
      page: (state) => state.device.page,
    }),
    device() {
      let device = [];
      let start = 10 * (this.page - 1);
      let end =
        start + 10 > this.devices.length ? this.devices.length : start + 10;
      for (let i = start; i < end; i++) {
        device.push(this.devices[i]);
      }
      return device;
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getdevice()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      const devices = _result.data.map((value) => {
        value.time = formatTimestamp(new Date(value.time).getTime());
        return value;
      });
      this.$store.commit("device/updateDevices", devices);
      this.loading = false;
    },
    async updateDevice(id) {
      let _result = (await updatedevice(id)).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      this.update = !this.update;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
</style>
