<template>
  <div class="continue-room">
    <el-timeline>
      <el-timeline-item timestamp="2022/02/03 12:12:00" placement="top">
        <el-card>
          <h4>续租</h4>
          <p>2022/02/04 - 2022/03/04</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/01/03 12:12:00" placement="top">
         <el-card>
          <h4>续租</h4>
          <p>2022/02/04 - 2022/03/04</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/01/02 12:12:00" placement="top">
         <el-card>
          <h4>续租</h4>
          <p>2022/02/04 - 2022/03/04</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "ContinueRoom",
  data() {
    return {};
  },
  methods: {},
};
</script>


<style scoped>
@import url("../../../../../assets/css/scroll.css");
.continue-room {
  padding: 20px;
}
</style>
