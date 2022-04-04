<template>
  <div class="device-type">
    <el-row :guter="20">
      <el-col :span="4"
        ><el-button type="primary" @click="show(false)"
          >添加类别</el-button
        ></el-col
      >
    </el-row>
    <el-row style="margin-top: 20px" :guter="20">
      <Show @show="show" @showImage="showImage"></Show>
    </el-row>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <el-drawer
      title="添加"
      :size="500"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <Submit></Submit>
    </el-drawer>
  </div>
</template>

<script>
import Show from "./DeviceType/Show";
import Submit from "./DeviceType/Submit";
export default {
  name: "DeviceType",
  components: { Show, Submit },
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    show() {
      this.drawer = true;
    },
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
