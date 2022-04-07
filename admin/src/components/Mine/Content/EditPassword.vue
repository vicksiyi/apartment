<template>
  <div class="edit-password">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="原密码" prop="oldpasswd">
        <el-input
          type="password"
          v-model="ruleForm.oldpasswd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpasswd">
        <el-input
          type="password"
          v-model="ruleForm.newpasswd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpasswd">
        <el-input
          type="password"
          v-model="ruleForm.checkpasswd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm('ruleForm')"
          >修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editpassRuleForm } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { updatepasswd } from "@/api/auth/user";
import md5 from "js-md5";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "EditPassword",
  data() {
    const checkPassValidator = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newpasswd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: toJson(editpassRuleForm),
      rules: {
        oldpasswd: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        newpasswd: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],
        checkpasswd: [
          { required: true, validator: checkPassValidator, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loadding = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          data.oldpasswd = md5(data.oldpasswd);
          data.newpasswd = md5(data.newpasswd);
          console.log(data);
          let _result = (await updatepasswd({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({
              type: "success",
              message: "修改成功",
            });
            this.ruleForm = toJson(editpassRuleForm);
          }
          loading.end(_loadding);
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
.edit-password {
  width: 500px;
}
</style>
