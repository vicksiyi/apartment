<template>
  <div class="notice">
    <el-row :guter="20">
      <el-col :span="4"
        ><el-button type="primary" @click="add()">添加通知</el-button></el-col
      >
    </el-row>
    <el-row style="margin-top: 20px" :guter="20">
      <Show :update="update"></Show>
    </el-row>
    <div class="page">
      <el-pagination
        background
        :current-page="page"
        @current-change="pageChange"
        layout="prev, pager, next"
        :total="notices.length"
      >
      </el-pagination>
    </div>
    <el-drawer
      title="添加公告"
      :size="600"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <Submit @closeDrawer="closeDrawer"></Submit>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Show from "@/components/Admin/System/Notice/Show";
import Submit from "@/components/Admin/System/Notice/Submit";
export default {
  name: "System",
  components: { Show, Submit },
  computed: {
    ...mapState({
      notices: (state) => state.notice.notices,
      page: (state) => state.notice.page,
    }),
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      update: false,
    };
  },
  methods: {
    add() {
      this.drawer = true;
    },
    closeDrawer() {
      this.drawer = false;
      this.update = !this.update;
    },
    pageChange(page){
      this.$store.commit("notice/updatePage", page);
    }
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
