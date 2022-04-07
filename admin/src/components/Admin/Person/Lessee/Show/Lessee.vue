<template>
  <div class="lessee" v-loading="loading">
    <el-descriptions
      class="margin-top"
      :column="1"
      border
      style="margin-top: 20px"
    >
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          真实姓名
        </template>
        {{ userinfo.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          身份证号
        </template>
        {{ userinfo.idcard }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-finance"></i>
          身份证[正面]
        </template>
        <el-image :preview-src-list="[userinfo.card_img_1]" :src="userinfo.card_img_1"></el-image>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-finance"></i>
          身份证[反面]
        </template>
        <el-image :preview-src-list="[userinfo.card_img_2]" :src="userinfo.card_img_2"></el-image>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getuserinfo } from "@/api/lessee/index";
export default {
  name: "Lessee",
  computed: {
    ...mapState({
      userId: (state) => state.lessee.userId,
    }),
  },
  watch: {
    userId() {
      this.getData();
    },
  },
  data() {
    return { loading: false, userinfo: {} };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getuserinfo({ user_uuid: this.userId })).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.userinfo = _result.data;
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
.lessee {
  padding: 20px;
}
</style>
