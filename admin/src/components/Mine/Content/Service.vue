<template>
  <div class="service" v-loading="loading">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="维修类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择维修类别">
          <el-option
            v-for="item in types"
            :key="item.id"
            :label="`${item.title}`"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="维修公寓" prop="roomRelId">
        <el-select v-model="ruleForm.roomRelId" placeholder="请选择维修公寓">
          <el-option
            v-for="item in rooms"
            :key="item.id"
            :label="`${item.title}-${item.address}`"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否紧急" prop="isEmergency">
        <el-switch v-model="ruleForm.isEmergency"></el-switch>
      </el-form-item>
      <el-form-item label="维修备注" prop="msg">
        <el-input
          type="textarea"
          placeholder="填写维修时间和维修具体信息等"
          v-model="ruleForm.msg"
          maxlength="400"
          show-word-limit="true"
          rows="3"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { serviceRuleForm, serviceRules } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { addmaintenance, getmaintenancetypes } from "@/api/room/maintenance";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "Service",
  computed: {
    ...mapState({
      rooms: (state) => state.mine.rooms,
    }),
  },
  data() {
    return {
      ruleForm: toJson(serviceRuleForm),
      rules: toJson(serviceRules),
      types: [],
      loading: false,
    };
  },
  methods: {
    submitForm(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loadding = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          let _result = (await addmaintenance({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.ruleForm = toJson(serviceRuleForm);
            this.$message({ type: "success", message: "成功提交" });
          }
          loading.end(_loadding);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async gettypes() {
      this.loading = true;
      let _result = (await getmaintenancetypes()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.types = _result.data;
      this.loading = false;
    },
  },
  mounted() {
    this.gettypes();
  },
};
</script>


<style scoped>
.service {
  width: 600px;
}
</style>
