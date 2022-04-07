<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#606266"
      :unique-opened="true"
      active-text-color="#3399ff"
    >
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in hasChildren"
        :index="item.label"
        :key="item.path"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.path"
        >
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{
            subItem.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          path: "/admin",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "/admin",
        },
        {
          label: "公寓管理",
          icon: "s-order",
          children: [
            {
              path: "/admin/apartment/detail",
              name: "detail",
              label: "公寓信息",
              url: "/admin/apartment/detail",
            },
            {
              path: "/admin/apartment/device",
              name: "device",
              label: "设备类别",
              url: "/admin/apartment/device",
            },
            {
              path: "/admin/apartment/service",
              name: "service",
              label: "公寓维修",
              url: "/admin/apartment/service",
            },
          ],
        },
        {
          label: "租户管理",
          icon: "s-shop",
          children: [
            {
              path: "/admin/person/lessee",
              name: "lessee",
              label: "租户管理",
              url: "/admin/person/lessee",
            },
          ],
        },
        {
          label: "系统管理",
          icon: "s-tools",
          children: [
            {
              path: "/admin/system/notice",
              name: "notice",
              label: "通知管理",
              url: "/admin/system/notice",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu: function (item) {
      this.$router.push(item.path);
      this.$store.commit("selectMenu", item);
    },
  },
};
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
