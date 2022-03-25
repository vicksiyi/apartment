<template>
  <el-container>
    <el-aside width="200px"> <Left></Left> </el-aside>
    <el-container>
      <el-header style="padding:0"><Header :isLogin="isLogin"></Header></el-header>
      <el-main>Main</el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
import Left from "../components/common/Left.vue";
export default defineComponent({
  name: "home",
  components: { Header, Footer,Left },
  setup() {
    const isLogin = ref(false);
    return {
      isLogin,
    };
  },
});
</script>