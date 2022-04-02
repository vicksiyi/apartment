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
            <el-form-item prop="account">
              <el-input
                placeholder="请输入手机号"
                type="text"
                v-model="ruleForm.account"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="密码"
                type="password"
                v-model="ruleForm.password"
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
export default {
  name: "LoginContent",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateIdentity = (rule, value, callback) => {
      if (value === -1) {
        callback(new Error("请选择身份"));
      } else {
        callback();
      }
    };
    return {
      radio: "1",
      ruleForm: {
        account: "",
        password: "",
        identity: 0,
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur" }],
        identity: [{ validator: validateIdentity, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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
