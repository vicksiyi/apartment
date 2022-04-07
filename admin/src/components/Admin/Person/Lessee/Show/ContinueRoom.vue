<template>
  <div class="continue-room" v-loading="loading">
    <el-timeline v-if="continues.length > 0">
      <el-timeline-item
        v-for="item in continues"
        :key="item.id"
        :timestamp="item.time"
        placement="top"
      >
        <el-card>
          <h4>{{ item.msg }}</h4>
          <p>{{ item.startTime }}-{{ item.endTime }}</p>
          已交房租<el-tag type="success">{{ item.money }}</el-tag>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-empty v-else description="暂无续费记录"></el-empty>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getcontinuedetail } from "@/api/lessee/index";
export default {
  name: "ContinueRoom",
  computed: {
    ...mapState({
      continueId: (state) => state.lessee.continueId,
    }),
  },
  watch: {
    continueId() {
      this.getData();
    },
  },
  data() {
    return {
      loading: false,
      continues: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getcontinuedetail({ id: this.continueId })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.continues = _result.data;
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
@import url("../../../../../assets/css/scroll.css");
.continue-room {
  padding: 20px;
}
</style>
