<template>
  <div class="login">
    <el-container>
      <el-header style="padding: 0"><HomeHeader  :isLogin="true"></HomeHeader></el-header>
      <el-main><LoginContent></LoginContent> </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "@/components/common/HomeHeader";
import LoginContent from "@/components/Login/LoginContent";
export default {
  name: "Login",
  components: { HomeHeader, LoginContent },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
