<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      ><el-form-item label="通知标题" prop="title" required>
        <el-input
          placeholder="请输入通知标题"
          v-model="ruleForm.title"
        ></el-input>
      </el-form-item>
      <el-form-item label="通知内容" prop="content">
        <el-input
          type="textarea"
          maxlength="200"
          placeholder="请输入通知内容"
          v-model="ruleForm.content"
          :rows="5"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="add('ruleForm')"
          >立即添加</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { noticeRuleForm, noticeRules } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { addnotice } from "@/api/notice/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "Submit",
  data() {
    return {
      ruleForm: toJson(noticeRuleForm),
      rules: toJson(noticeRules),
    };
  },
  methods: {
    add(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loading = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          let _result = (await addnotice({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({ type: "success", message: "添加成功" });
            this.ruleForm = toJson(noticeRuleForm);
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
