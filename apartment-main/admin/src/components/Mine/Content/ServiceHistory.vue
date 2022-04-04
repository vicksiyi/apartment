<template>
  <div class="service-history">
    <span>只显示最近20条</span>
    <el-table  :data="services" border style="width: 100%">
      <el-table-column prop="time" label="日期" width="180"> </el-table-column>
      <el-table-column prop="type" label="类别" width="180"> </el-table-column>
      <el-table-column prop="isEmergency" label="是否紧急" width="80">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isEmergency ? 'danger' : ''" effect="dark">
            {{ scope.row.isEmergency ? "是" : "否" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="msg" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ServiceHistory",
  data() {
    return {
      services: [
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: true,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: true,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
          isEmergency: false,
          msg: "我一般晚上6点左右在家",
        },
        {
          time: "2016-05-02 22:22:00",
          type: "插口问题",
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
@import url("../../../assets/css/scroll.css");
.service-history > span {
  display: block;
  padding: 10px;
}
</style>
