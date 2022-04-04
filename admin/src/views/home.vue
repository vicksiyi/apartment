<template>
  <div class="home">
    <el-container>
      <el-header style="padding: 0"
        ><HomeHeader :headers="headers"></HomeHeader
      ></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="padding: 0"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import { isauth } from "@/api/auth/index";
import HomeHeader from "@/components/common/HomeHeader";
import Footer from "@/components/common/Footer";
export default {
  name: "Home",
  components: { HomeHeader, Footer },
  data() {
    return {};
  },
  mounted() {
    isauth();
  },
};
</script>
<style scoped>
</style>
