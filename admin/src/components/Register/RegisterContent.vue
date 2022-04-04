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
              <div class="mobile-number">
                <div class="select">
                  <el-dropdown @command="select">
                    <el-button size="medium" class="select-btn" type="primary">
                      {{ phones[ruleForm.selectPhoneNum].num }}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-for="item in phones"
                        :key="item.id"
                        :command="item.id"
                        >{{ item.name }} {{ item.num }}</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="number">
                  <el-input
                    v-model="ruleForm.mobile"
                    placeholder="手机号"
                    autocomplete="off"
                  ></el-input>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="mobile-number">
                <div class="select">
                  <div class="number">
                    <el-input
                      v-model="ruleForm.code"
                      placeholder="验证码"
                    ></el-input>
                  </div>
                </div>
                <div class="btn">
                  <el-button
                    @click="sendCode()"
                    class="select-btn"
                    v-if="ruleForm.mobile && downCode == '发送验证码'"
                    type="primary"
                    >{{ downCode }}</el-button
                  >
                  <el-button
                    class="select-btn"
                    v-else
                    disabled
                    type="primary"
                    >{{ downCode }}</el-button
                  >
                </div>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="密码"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                placeholder="确认密码"
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <div style="margin-left: 70px">
              <el-form-item label="注册类型">
                <div>
                  <el-radio
                    v-model="ruleForm.identity"
                    label="0"
                    border
                    size="medium"
                    >用户</el-radio
                  >
                  <!-- <el-radio
                    v-model="ruleForm.identity"
                    label="1"
                    border
                    size="medium"
                    >管理员</el-radio
                  > -->
                </div>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button
                class="login-btn"
                size="medium"
                type="primary"
                @click="submitForm('ruleForm')"
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="friend-link">
          <div>
            <el-link type="primary" href="/forget">忘记密码?</el-link>
          </div>
          <div>
            <el-link type="primary" href="/login">去登录</el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterContent",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入真实姓名"));
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号格式不对"));
      } else {
        callback();
      }
    };
    return {
      downCode: "发送验证码",
      phones: [
        {
          id: 0,
          name: "中国大陆",
          num: "+86",
        },
        {
          id: 1,
          name: "中国香港特别行政区",
          num: "+852",
        },
      ],
      ruleForm: {
        account: "",
        password: "",
        checkPass: "",
        identity: "0",
        mobile: "",
        name: "",
        code: "",
        selectPhoneNum: 0,
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur" }],
        mobile: [{ validator: validatePhone, trigger: "blur" }],
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
.mobile-number {
  display: flex;
  justify-content: flex-start;
}
.mobile-number > .select {
  width: 120px;
}
.mobile-number > .number {
  width: 250px;
  margin-left: 10px;
}
.mobile-number > .btn {
  margin-left: 10px;
  width: 220px;
}

.mobile-number .select-btn {
  width: 120px;
}
</style>
