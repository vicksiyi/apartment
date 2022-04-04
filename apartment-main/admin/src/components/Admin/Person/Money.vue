<template>
  <div class="money">
    <el-row :guter="20">
      <el-col :span="4"
        ><el-button type="primary" @click="show(false)"
          >添加租金</el-button
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
      :title="isShowImage ? '图片' : isEdit ? '修改' : '添加'"
      :size="600"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <ShowImage v-if="isShowImage"></ShowImage>
      <Submit v-else></Submit>
    </el-drawer>
  </div>
</template>

<script>
import Show from "./Money/Show";
import Submit from "./Money/Submit";
import ShowImage from "./Money/ShowImage";
export default {
  name: "Person",
  components: {  Show, Submit, ShowImage },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      isEdit: false,
      isShowImage: false,
    };
  },
  methods: {
    show(type) {
      this.drawer = true;
      this.isShowImage = false;
      this.isEdit = type;
    },
    showImage() {
      this.drawer = true;
      this.isShowImage = true;
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
