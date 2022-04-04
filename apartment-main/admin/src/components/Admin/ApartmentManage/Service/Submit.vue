<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名称" prop="title">
        <el-input
          v-model="ruleForm.title"
          placeholder="请输入类别名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm('ruleForm')"
          >添加</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data() {
    return {
      ruleForm: {
        title: "",
      },
      rules: {
        title: [{ required: true, message: "请输入类别名称", trigger: "blur" }],
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
.submit {
  padding: 20px;
}
</style>
