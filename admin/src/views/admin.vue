<template>
  <div class="admin">
    <el-container>
      <el-aside style="overflow: hidden; width: auto"><Aside></Aside></el-aside>
      <el-container>
        <el-header style="padding: 0"><AdminHeader></AdminHeader></el-header>
        <el-main><router-view /></el-main>
        <el-footer style="padding: 0"><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { isauth } from "@/api/auth/index";
import Aside from "@/components/common/Aside";
import Footer from "@/components/common/Footer";
import AdminHeader from "@/components/common/AdminHeader";
export default {
  name: "Admin",
  components: { Aside, AdminHeader, Footer },
  data() {
    return {
      value: "",
    };
  },
  methods: {},
  mounted() {
    isauth({ is_admin: 1 });
  },
};
</script>
<style scoped>
</style>
