<template>
  <div class="header">
    <div class="logo">
      <img
        @click="handleMenu"
        src="../../assets/images/logo.png"
        alt=""
        srcset=""
      />
      <div class="logo-righ">
        <div class="logo-first">
          <span>芒果公寓管理系统</span>
        </div>
        <div class="logo-second">
          <span>Mango Apartment Management System</span>
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="avatar">
        <el-dropdown @command="selectAvatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="0">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header-right">
      <div class="item"><i class="el-icon-message"></i> 反馈</div>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectAvatar(res) {
      if (res === 0) {
        this.$store.commit("header/setToken", "");
        this.$router.push({ path: "/login" });
      }
    },
    handleMenu: function () {
      this.$store.commit("collapseMenu");
    },
  },
  mounted: function () {},
};
</script>


<style scoped>
.header {
  height: 64px;
  background: #3399ff;
  border-bottom: 1px solid rgb(93, 178, 218);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.logo {
  float: left;
  margin-left: 0px;
}
.logo img {
  width: 80px;
  height: 50px;
  margin: 5px;
}
.logo .logo-righ {
  float: right;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin-top: 12px;
  margin-left: -10px;
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
