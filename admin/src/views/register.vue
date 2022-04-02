<template>
  <div class="register">
    <el-container>
      <el-header style="padding: 0"
        ><HomeHeader :isRegister="true"></HomeHeader
      ></el-header>
      <el-main><RegisterContent></RegisterContent> </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "@/components/common/HomeHeader";
import RegisterContent from "@/components/Register/RegisterContent";
export default {
  name: "Register",
  components: { HomeHeader, RegisterContent },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
