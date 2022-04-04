<template>
  <div class="home-header">
    <div class="logo" @click="toHome">
      <img src="../../assets/images/logo.png" alt="" srcset="" />
      <div class="logo-righ">
        <div class="logo-first">
          <span>芒果公寓欢迎您</span>
        </div>
        <div class="logo-second">
          <span>Welcome to Mango Apartments</span>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <!-- <div v-if="!isLogin && !isRegister" class="action">
      <ul>
        <li>您好，请<a href="/login">登录</a></li>
        <li>免费<a href="/register">注册</a></li>
      </ul>
    </div> -->
    <!-- 已经登录 -->
    <div v-if="!isLogin && !isRegister" class="header-right">
      <div class="avatar">
        <el-dropdown @command="selectAvatar">
          <el-avatar
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="0">个人中心</el-dropdown-item>
            <el-dropdown-item :command="1">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
    isRegister: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectAvatar(res) {
      console.log(res === 0);
      if (res === 0) this.$router.push({ path: "/mine" });
      else if (res === 1) this.$router.push({ path: "/login" });
    },
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
@import url("../../assets/css/font.css");
.home-header {
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.logo {
  float: left;
  margin-left: 0px;
}
.logo img {
  width: 120px;
  height: 66px;
  margin: 6px;
}

.logo .logo-righ {
  float: right;
  font-family: "webfont";
  margin-top: 12px;
  margin-left: -10px;
  color: #909399;
}

.logo .logo-righ .logo-first {
  font-size: 25px;
  font-weight: 400;
}

.logo .logo-righ .logo-second {
  font-size: 12px;
}

.action {
  float: right;
  margin-right: 20px;
  line-height: 80px;
}
.action ul {
  list-style: none;
  margin-left: 50px;
}

.action li {
  display: block;
  float: left;
  margin-left: 10px;
}

.action a {
  color: #409eff;
  cursor: hand;
}
.home-header > .header-right {
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
