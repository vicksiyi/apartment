<template>
  <div class="show-device" v-loading="loading">
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        @change="select(item.id)"
        v-for="item in devices"
        :key="item.id"
        :label="item.id"
        >{{ item.title }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { addroomdevice, getroomdevice, delroomdevice } from "@/api/room/index";
export default {
  name: "ShowDevice",
  props: {
    roomId: {
      type: String,
      default: "",
    },
  },
  watch: {
    roomId(val) {
      this.roomId = val;
      this.getData();
    },
  },
  data() {
    return {
      device_selects: [],
      loading: false,
      checkList: [],
    };
  },
  computed: {
    ...mapState({
      devices: (state) => state.device.devices,
    }),
  },
  methods: {
    select(id) {
      // 删除还是添加
      let isExist = this.checkList.indexOf(id) !== -1;
      if (!isExist) {
        let _rel = this.getRelTypeId(id);
        delroomdevice({ id: _rel.id });
      } else {
        addroomdevice({ data: { roomId: this.roomId, deviceId: id } });
      }
      this.getData();
    },
    async getData() {
      this.loading = true;
      let _result = (await getroomdevice({ roomId: this.roomId })).data;
      this.loading = false;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.device_selects = _result.data;
        this.checkList = _result.data.map((value) => value.room_type_id);
      }
    },
    getRelTypeId(id) {
      return this.device_selects.find((value) => value.room_type_id === id);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
.show-device {
  padding: 20px;
}
</style>
