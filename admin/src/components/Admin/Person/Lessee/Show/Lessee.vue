<template>
  <div class="lessee">
    <el-descriptions
      class="margin-top"
      :column="1"
      :size="size"
      border
      style="margin-top: 20px"
    >
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          真实姓名
        </template>
        黄xx
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          联系电话
        </template>
        1333xxxxxxx
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-finance"></i>
          身份证[正面]
        </template>
        <el-image
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        ></el-image>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-finance"></i>
          身份证[反面]
        </template>
        <el-image
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        ></el-image>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "Lessee",
  data() {
    return {};
  },
  methods: {},
};
</script>


<style scoped>
.lessee {
  padding: 20px;
}
</style>
