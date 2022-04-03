<template>
  <div class="admin">
    <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      @change="change"
      placeholder="选择时间"
    >
    </el-time-select>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      value: ''
    };
  },
  methods:{
    change(){
      console.log(123);
    }
  }
};
</script>
<style scoped>
</style>
