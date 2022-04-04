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
                      {{ phones[selectPhoneNum].num }}
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
            <el-form-item prop="code">
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
            <el-form-item prop="passwd">
              <el-input
                type="password"
                placeholder="密码"
                v-model="ruleForm.passwd"
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
              <el-form-item label="注册类型" prop="identity">
                <div>
                  <el-radio
                    v-model="ruleForm.identity"
                    label="0"
                    border
                    size="medium"
                    >用户</el-radio
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
import md5 from "js-md5";
import { registerRuleForm } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { sendcode, register } from "@/api/auth/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
let time = null;
export default {
  name: "RegisterContent",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passwd) {
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
      selectPhoneNum: 0,
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
      ruleForm: toJson(registerRuleForm),
      rules: {
        passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        mobile: [{ validator: validatePhone, trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "格式错误", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loadding = loading.start(this);
          let data = {
            mobile: this.ruleForm.mobile,
            code: this.ruleForm.code,
            passwd: md5(this.ruleForm.passwd),
          };
          console.log(data);
          let _result = (await register({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({
              type: "success",
              message: "注册成功",
            });
            this.$router.push("/login");
          }
          loading.end(_loadding);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    select(res) {
      this.selectPhoneNum = res;
    },
    async sendCode() {
      let mobile = this.ruleForm.mobile;
      if (!/^1[3456789]\d{9}$/.test(mobile)) {
        this.$message({
          message: "手机号格式不对",
          type: "warning",
        });
      } else {
        let _result = (await sendcode({ data: { mobile: mobile } })).data;
        if (_result.code != 200) this.$message.error(_result.msg);
        else {
          this.$message({
            message: "发送成功",
            type: "success",
          });
          time = setInterval(() => {
            if (this.downCode === "发送验证码") {
              this.downCode = 60;
            } else {
              this.downCode--;
            }
            if (this.downCode == 0) {
              this.downCode = "发送验证码";
              clearInterval(time);
            }
          }, 1000);
        }
      }
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
