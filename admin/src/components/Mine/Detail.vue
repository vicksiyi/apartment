<template>
  <div class="mine-detail">
    <el-tabs @tab-click="tabChange" tab-position="left">
      <el-tab-pane label="租房信息"><Mine></Mine></el-tab-pane>
      <el-tab-pane label="维修报告"><Service></Service></el-tab-pane>
      <el-tab-pane label="维修记录"
        ><ServiceHistory :update="updateServices"></ServiceHistory
      ></el-tab-pane>
      <el-tab-pane label="认证信息"><Auth></Auth></el-tab-pane>
      <el-tab-pane label="修改密码"><EditPassword></EditPassword></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Mine from "./Content/Mine";
import Service from "./Content/Service";
import ServiceHistory from "./Content/ServiceHistory";
import Auth from "./Content/Auth";
import EditPassword from "./Content/EditPassword";
import { getusernotice, doneusernotice } from "@/api/notice/index";
import loading from "@/utils/loading";
export default {
  name: "MineDetail",
  components: { Mine, Service, ServiceHistory, EditPassword, Auth },
  data() {
    return {
      updateServices: false,
    };
  },
  methods: {
    async getNotices() {
      let _this = this;
      let _loading = loading.start(this);
      let _result = (await getusernotice()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        for (let i = 0; i < _result.data.length; i++) {
          const h = this.$createElement;
          this.$notify({
            title: _result.data[i].title,
            message: h("i", { style: "color: teal" }, _result.data[i].content),
            duration: 0,
            onClose() {
              _this.doneNotice(_result.data[i].id, _result.data[i].title);
            },
          });
        }
      }
      loading.end(_loading);
    },
    async doneNotice(id, title) {
      let _loading = loading.start(this);
      let _result = (await doneusernotice({ id: id })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$message({ type: "success", message: `成功收到 ${title}` });
      }
      loading.end(_loading);
    },
    tabChange(res) {
      if (res.index == "2") this.updateServices = !this.updateServices;
    },
  },
  mounted() {
    this.getNotices();
  },
};
</script>
<style scoped>
.mine-detail {
  padding: 20px;
}
</style>
