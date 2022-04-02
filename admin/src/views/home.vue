<template>
  <div class="home">
    <el-container>
      <el-header style="padding: 0"><HomeHeader></HomeHeader></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="padding: 0"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "@/components/common/HomeHeader";
import Footer from "@/components/common/Footer";
export default {
  name: "Home",
  components: { HomeHeader, Footer },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
