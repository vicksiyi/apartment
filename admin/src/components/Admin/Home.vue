<template>
  <div class="home">
    <h1>欢迎进入芒果公寓管理系统</h1>
    <div class="img">
      <img src="../../assets/images/bg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>


<style scoped>
.home h1{
    text-align: center;
    font-family: "webfont";
    font-size: 40px;
    font-weight: bold;
    text-shadow:20px -10px 2px #e9eaec;
    margin-top: 30px;
    color: #1c2438;
    z-index: 99;
}
.home .img {
  text-align: center;
}
</style>
