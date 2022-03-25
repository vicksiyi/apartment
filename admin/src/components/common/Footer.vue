<template>
  <div>
    <div class="footer">
      <div class="window">
        <span>
          Copyright © XX Dream Team. All Rights Reserved. 2022 版权所有
        </span>
        <div class="bottom">
          芒果公寓有限公司 粤ICP备xxxxxxxx号-1 粤公网安备
          xxxxxxxxxxxxxx号 增值电信业务经营许可证编号：B1-20221529
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  setup() {},
});
</script>
<style scoped>
.footer {
  width: 100%;
  color: #fff;
  background: #909399;
  padding: 30px;
}
.footer .window {
  width: 60%;
  margin: 30px auto;
  text-align: center;
}
.footer .window .bottom {
  font-size: 15px;
  margin-top: 20px;
}
</style>