<template>
  <div class="detail">
    <el-row :guter="20">
      <el-col :span="4"
        ><el-button type="primary" @click="show(false)"
          >添加公寓</el-button
        ></el-col
      >
    </el-row>
    <el-row style="margin-top: 20px" :guter="20">
      <Show
        :update="update"
        @showDevice="showDevice"
        @show="show"
        @showImage="showImage"
      ></Show>
    </el-row>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="rooms.length"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
    <el-drawer
      :title="
        isShowImage ? '图片' : isEdit ? '修改' : isShowDevice ? '设备' : '添加'
      "
      :size="600"
      :visible.sync="drawer"
      :direction="direction"
    >
      <ShowImage v-if="isShowImage"></ShowImage>
      <ShowDevice v-else-if="isShowDevice"></ShowDevice>
      <Submit @closeDrawer="closeDrawer" v-else></Submit>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Show from "./Detail/Show";
import Submit from "./Detail/Submit";
import ShowImage from "./Detail/ShowImage";
import ShowDevice from "./Detail/ShowDevice";
export default {
  name: "Detail",
  components: { Show, Submit, ShowImage, ShowDevice },
  computed: {
    ...mapState({
      rooms: (state) => state.room.rooms,
    }),
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      isEdit: false,
      isShowImage: false,
      isShowDevice: false,
      update: false,
    };
  },
  methods: {
    show(type) {
      this.drawer = true;
      this.isShowImage = false;
      this.isShowDevice = false;
      this.isEdit = type;
    },
    showImage() {
      this.drawer = true;
      this.isShowImage = true;
      this.isShowDevice = false;
    },
    showDevice() {
      this.drawer = true;
      this.isShowImage = false;
      this.isShowDevice = true;
    },
    closeDrawer() {
      this.drawer = false;
      this.update = !this.update;
    },
    pageChange(page) {
      this.$store.commit("room/updatePage", page);
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
