<template>
  <div class="lessee">
    <el-row :guter="20">
      <el-col :span="4"
        ><el-button type="primary" @click="addLessee()"
          >添加租户</el-button
        ></el-col
      >
    </el-row>
    <el-row style="margin-top: 20px" :guter="20">
      <Show @changeShowHandle="changeShowHandle"></Show>
    </el-row>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <el-drawer
      :title="
        showHandle == 0 ? '添加' : showHandle == 1 ? '公寓信息' : '租户信息'
      "
      :size="600"
      :visible.sync="drawer"
      :direction="direction"
    >
      <Submit v-if="showHandle == 0"></Submit>
      <ShowRoom v-else-if="showHandle == 1"></ShowRoom>
      <ShowLessee v-else></ShowLessee>
    </el-drawer>
  </div>
</template>

<script>
import Show from "./Lessee/Show";
import Submit from "./Lessee/Submit";
import ShowRoom from "./Lessee/Show/Room";
import ShowLessee from "./Lessee/Show/Lessee";
export default {
  name: "Person",
  components: { Show, Submit, ShowRoom, ShowLessee },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      showHandle: 0,
    };
  },
  methods: {
    addLessee(type) {
      this.drawer = true;
      this.showHandle = 0;
    },
    changeShowHandle(val) {
      this.drawer = true;
      this.showHandle = val;
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
