<template>
  <div class="service">
    <el-row :guter="20">
      <el-col :span="8">
        <el-button type="primary" @click="show">添加类别</el-button>
        <el-card style="margin-top: 20px" class="box-card">
          <Type></Type>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card style="margin-left: 20px; margin-top: 60px" class="box-card">
          <Show></Show>
        </el-card>
      </el-col>
    </el-row>
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
import Type from "./Service/Type";
import Show from "./Service/Show";
import Submit from "./Service/Submit";
export default {
  name: "Service",
  components: { Type, Show, Submit },
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
</style>
