<template>
  <div class="type">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="time" label="序号" width="50">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
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
  name: "type",
  data() {
    return {
      tableData: [
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
        {
          title: "电器问题",
        },
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
</style>
