<template>
  <div class="service-history">
    <span>只显示最近20条</span>
    <el-table
      v-loading="loading"
      :data="servicehistorys"
      border
      style="width: 100%"
    >
      <el-table-column prop="time" label="日期" width="180"> </el-table-column>
      <el-table-column prop="type" label="类别" width="180"> </el-table-column>
      <el-table-column prop="isEmergency" label="是否紧急" width="80">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isEmergency ? 'danger' : ''" effect="dark">
            {{ scope.row.isEmergency ? "是" : "否" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="当前状态" width="180">
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
            }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="msg" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getusermaintenance } from "@/api/room/maintenance";
export default {
  name: "ServiceHistory",
  computed: {
    ...mapState({
      servicehistorys: (state) => state.mine.servicehistorys,
    }),
  },
  props: {
    update: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    update() {
      this.getData();
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getusermaintenance()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$store.commit("mine/updateServiceHistorys", _result.data);
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
@import url("../../../assets/css/scroll.css");
.service-history > span {
  display: block;
  padding: 10px;
}
</style>
