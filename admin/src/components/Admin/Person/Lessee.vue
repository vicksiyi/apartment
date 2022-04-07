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
      <Show :update="update" @changeShowHandle="changeShowHandle"></Show>
    </el-row>
    <div class="page">
      <el-pagination
        background
        :current-page="page"
        @current-change="pageChange"
        layout="prev, pager, next"
        :total="relRooms.length"
      >
      </el-pagination>
    </div>
    <el-drawer
      :title="
        showHandle == 0
          ? '添加'
          : showHandle == 1
          ? '公寓信息'
          : showHandle == 2
          ? '租户信息'
          : showHandle == 3
          ? '续租情况'
          : '续租'
      "
      :size="600"
      :visible.sync="drawer"
      :direction="direction"
    >
      <Submit
        @closeDrawer="closeDrawer"
        :showHandle="showHandle"
        v-if="showHandle == 0"
      ></Submit>
      <ShowRoom v-else-if="showHandle == 1"></ShowRoom>
      <ShowLessee v-else-if="showHandle == 2"></ShowLessee>
      <ShowContinueRoom v-else-if="showHandle == 3"></ShowContinueRoom>
      <Continue @closeDrawer="closeDrawer" v-else></Continue>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Show from "./Lessee/Show";
import Submit from "./Lessee/Submit";
import ShowRoom from "./Lessee/Show/Room";
import ShowLessee from "./Lessee/Show/Lessee";
import ShowContinueRoom from "./Lessee/Show/ContinueRoom";
import Continue from "./Lessee/Continue";
export default {
  name: "Person",
  components: {
    Show,
    Submit,
    ShowRoom,
    ShowLessee,
    ShowContinueRoom,
    Continue,
  },
  computed: {
    ...mapState({
      relRooms: (state) => state.lessee.relRooms,
      page: (state) => state.lessee.page,
    }),
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      showHandle: 0,
      update: false,
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
    closeDrawer(update = false) {
      this.drawer = false;
      if (update) this.update = !this.update;
    },
    pageChange(page){
      this.$store.commit("lessee/updatePage", page);
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
