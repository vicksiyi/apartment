<template>
  <div class="device-type">
    <el-table
      :data="notice"
      v-loading="loading"
      height="400"
      border
      style="width: 100%"
    >
      <el-table-column prop="time" sortable label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="title" label="通知标题"> </el-table-column>
      <el-table-column prop="content" label="通知内容"> </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            :disabled="scope.row.status == 0"
            type="danger"
            @click="clearNotice(scope.row.id)"
            size="mini"
            >撤回</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getnotices, clearnotice } from "@/api/notice/index";
export default {
  name: "Show",
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
  computed: {
    ...mapState({
      notices: (state) => state.notice.notices,
      page: (state) => state.notice.page,
    }),
    notice() {
      let notice = [];
      let start = 10 * (this.page - 1);
      let end =
        start + 10 > this.notices.length ? this.notices.length : start + 10;
      for (let i = start; i < end; i++) {
        notice.push(this.notices[i]);
      }
      return notice;
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
      let _result = (await getnotices()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.$store.commit("notice/updateNotices", _result.data);
      this.loading = false;
    },
    async clearNotice(id) {
      this.loading = true;
      let _result = (await clearnotice({ id: id })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.$message({ type: "success", message: "撤回成功" });
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