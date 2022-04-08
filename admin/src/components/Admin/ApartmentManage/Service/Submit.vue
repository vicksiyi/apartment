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
import { addmaintenancetype } from "@/api/room/maintenance";
import form from "@/utils/form";
import loading from "@/utils/loading";
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
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loading = loading.start(this);
          let data = { title: this.ruleForm.title };
          let _result = (await addmaintenancetype({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.ruleForm.title = "";
            this.$message({ type: "success", message: "添加成功" });
            this.$emit("closeDrawer");
          }
          loading.end(_loading);
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
