<template>
  <div class="mine-detail">
    <el-tabs tab-position="left">
      <el-tab-pane label="个人信息"><Mine></Mine></el-tab-pane>
      <el-tab-pane label="维修报告"><Service></Service></el-tab-pane>
      <el-tab-pane label="维修记录"
        ><ServiceHistory></ServiceHistory
      ></el-tab-pane>
      <el-tab-pane label="修改密码"><EditPassword></EditPassword></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Mine from "./Content/Mine";
import Service from "./Content/Service";
import ServiceHistory from "./Content/ServiceHistory";
import EditPassword from "./Content/EditPassword";
export default {
  name: "MineDetail",
  components: { Mine, Service, ServiceHistory, EditPassword },
  data() {
    return {};
  },
};
</script>
<style scoped>
.mine-detail {
  padding: 20px;
}
</style>
