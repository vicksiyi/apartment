<template>
  <div class="device-type">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="houseid" label="房号"> </el-table-column>
      <el-table-column prop="mobile" label="联系"> </el-table-column>
      <el-table-column prop="date" label="到期时间"> </el-table-column>
     <el-table-column prop="datenum" label="距离到期时间还有"> </el-table-column>
        <el-button type="success" @click="show" size="mini">查看</el-button>
      <el-table-column label="操作">
        <template>
          <el-button type="warning" @click="edit" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      tableData: [
        {
          id:"1",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          date: "2016-05-03 22:22:00",
          datenum:"1天",
        },
        {
          id:"2",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          date: "2016-05-03 22:22:00",
           datenum:"1天", datenum:"1天",
        },
        {
          id:"3",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          date: "2016-05-03 22:22:00",
           datenum:"1天",
        },
        {
          id:"4",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          date: "2016-05-03 22:22:00",
           datenum:"1天",
        },
      ],
    };
  },
  methods: {
    edit() {
      this.$emit("show", true);
    },
    show() {
      this.$emit("showImage");
    },
  },
};
</script>


<style scoped>
</style>