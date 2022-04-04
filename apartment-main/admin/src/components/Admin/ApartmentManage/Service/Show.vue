<template>
  <div class="show">
    <el-table :data="tableData" height="500" border style="width: 100%">
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="type" label="类别"> </el-table-column>
      <el-table-column prop="room" label="房间"> </el-table-column>
      <el-table-column prop="msg" label="备注"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button type="warning" size="mini">完成</el-button>
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
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2022/02/12 22:22:22",
          type: "电器问题",
          room: "xxx区xxx街道xxx号xxx房",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
</style>
