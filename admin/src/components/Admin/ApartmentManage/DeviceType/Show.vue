<template>
  <div class="show">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="time" label="添加时间" width="180">
      </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
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
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
        {
          time: "2016-05-02 22:22:00",
          title: "免费wifi",
        },
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
</style>
