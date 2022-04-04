<template>
  <div class="login-content">
    <div class="login-wrapper">
      <img class="login-banner" src="../../assets/images/login.png" alt="" />
      <div class="login-line"></div>
      <div class="login-query">
        <div class="form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="mobile">
              <el-input
                placeholder="请输入手机号"
                type="text"
                v-model="ruleForm.mobile"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
              <el-input
                placeholder="密码"
                type="password"
                v-model="ruleForm.passwd"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <div style="margin-left: 70px">
              <el-form-item label="登录类型" prop="identity">
                <div>
                  <el-radio
                    @change="ruleForm.identity = 0"
                    v-model="radio"
                    label="1"
                    border
                    size="medium"
                    >用户</el-radio
                  >
                  <el-radio
                    @change="ruleForm.identity = 1"
                    v-model="radio"
                    label="2"
                    border
                    size="medium"
                    >管理员</el-radio
                  >
                </div>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button
                class="login-btn"
                size="medium"
                type="primary"
                @click="submitForm('ruleForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="friend-link">
          <div>
            <el-link type="primary" href="/forget">忘记密码?</el-link>
          </div>
          <div>
            <el-link type="primary" href="/register">注册账号</el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import { loginRuleForm, loginRules } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { login } from "@/api/auth/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "LoginContent",
  data() {
    return {
      radio: "1",
      ruleForm: toJson(loginRuleForm),
      rules: toJson(loginRules),
    };
  },
  methods: {
    submitForm(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loadding = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          data.passwd = md5(data.passwd);
          let _result = (await login({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            // 存储token
            this.$store.commit("header/setToken", _result.token);
            this.$message({
              type: "success",
              message: "登录成功",
            });
            if (data.identity == 1) {
              this.$router.push("/admin");
            } else {
              this.$router.push("/");
            }
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
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.login-banner {
  width: 800px;
}
img {
  vertical-align: middle;
  border-style: none;
}
.login-line {
  width: 1px;
  height: 600px;
  background-color: #ddd;
}
.login-query {
  width: 100%;
  display: flex;
  height: 500px;
  flex-direction: column;
  flex: 1 1;
  align-items: center;
  justify-content: center;
}
.form {
  margin-left: -70px;
  margin-top: 30px;
  width: 70%;
}
.login-btn {
  width: 100%;
}
.friend-link {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
}
.friend-link > div {
  width: 50%;
  font-size: 15px;
  text-align: center;
  color: #409eff;
}

.friend-link > div:nth-child(2):hover {
  text-decoration: underline;
}
</style>
