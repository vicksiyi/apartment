<template>
  <div class="type">
    <el-table
      :data="types"
      v-loading="loading"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column prop="time" label="序号" width="50">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="danger" @click="del(scope.row.id)" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  getmaintenancetypes,
  delmaintenancetype,
} from "@/api/room/maintenance";
export default {
  name: "type",
  props: {
    update: { type: Boolean, default: false },
  },
  watch: {
    update() {
      this.getData();
    },
  },
  data() {
    return {
      types: [],
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getmaintenancetypes()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.types = _result.data;
      this.loading = false;
    },
    async del(id) {
      this.loading = true;
      let _result = (await delmaintenancetype({ id: id })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$message({ type: "success", message: "成功删除" });
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
