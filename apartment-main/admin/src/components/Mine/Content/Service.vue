<template>
  <div class="service">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="维修类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择维修类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否紧急" prop="isEmergency">
        <el-switch v-model="ruleForm.isEmergency"></el-switch>
      </el-form-item>
      <el-form-item label="维修备注" prop="msg">
        <el-input
          type="textarea"
          placeholder="填写维修时间等"
          v-model="ruleForm.msg"
          maxlength="400"
          show-word-limit="true"
          rows="3"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      ruleForm: {
        type: "",
        isEmergency: false,
        msg: "",
      },
      rules: {
        type: [{ required: true, message: "请选择维修类型", trigger: "blur" }],
        msg: [
          { required: true, message: "请输入相关备注", trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


<style scoped>
.service {
  width: 600px;
}
</style>
