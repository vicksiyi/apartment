<template>
  <div class="show-device">
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="item in devices" :key="item.id" :label="item.id">{{
        item.title
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShowDevice",
  data() {
    return {
      checkList: [1, 2],
    };
  },
  computed: {
    ...mapState({
      devices: (state) => state.device.devices,
    }),
  },
  methods: {},
};
</script>


<style scoped>
.show-device {
  padding: 20px;
}
</style>
