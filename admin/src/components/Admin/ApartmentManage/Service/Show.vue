<template>
  <div class="show">
    <el-table
      :data="maintenances"
      v-loading="loading"
      height="500"
      border
      style="width: 100%"
    >
      <el-table-column prop="time" sortable label="时间" width="180">
      </el-table-column>
      <el-table-column prop="title" label="类别"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="msg" label="备注"> </el-table-column>
      <el-table-column label="当前状态" width="100">
        <template slot-scope="scope">
          <el-tag
            :type="
              scope.row.status == 0
                ? ''
                : scope.row.status == 1
                ? 'success'
                : 'info'
            "
            effect="dark"
          >
            {{
              scope.row.status == 0
                ? "待处理"
                : scope.row.status == 1
                ? "等待维修员"
                : "完成"
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            :disabled="scope.row.status != 0"
            type="success"
            size="mini"
            @click="action(scope.row.id, 1)"
            >处理</el-button
          >
          <el-button
            :disabled="scope.row.status != 1"
            type="warning"
            size="mini"
            @click="action(scope.row.id, 2)"
            >完成</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getmaintenances, actionmaintenances } from "@/api/room/maintenance";
export default {
  name: "Show",
  data() {
    return {
      maintenances: [],
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getmaintenances()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.maintenances = _result.data;
      this.loading = false;
    },
    async action(id, status) {
      this.loading = true;
      let _result = (
        await actionmaintenances({ data: { id: id, status: status } })
      ).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$message({
          type: "success",
          message: "更新状态成功",
        });
        this.getData();
      }
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
</style>
