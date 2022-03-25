<template>
  <div class="header">
    <div class="logo">
      <img @click="handleMenu" src="@/assets/logo-white.png" alt="" srcset="" />
      <div class="logo-righ">
        <div class="logo-first">
          <span>芒果公寓租房管理系统</span>
        </div>
        <div class="logo-second">
          <span>Mango Apartment rental management system</span>
        </div>
      </div>
    </div>
    <div v-if="!isLogin" class="header-right">
      <div class="avatar">
        <el-dropdown @command="selectAvatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :command="0">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background: #1c2438;
  box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1);
}
.logo {
  float: left;
  margin-left: 0px;
}
.logo img {
  width: 75px;
  height: 40px;
  margin: 10px;
}
.logo .logo-righ {
  float: right;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin-top: 12px;
  margin-left: 10px;
  color: #fff;
}
.logo .logo-righ .logo-first {
  font-size: 20px;
  font-weight: 400;
}
.logo .logo-righ .logo-second {
  font-size: 12px;
}
.header > .header-right {
  float: right;
  margin-right: 20px;
}
.header-right .avatar {
  margin: 10px;
}
.header-right .avatar-menu {
  margin-top: -20px;
}
.header-right .item {
  color: #fff;
  line-height: 60px;
  font-size: 15px;
  cursor: pointer;
}
</style>