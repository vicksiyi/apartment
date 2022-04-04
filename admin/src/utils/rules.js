module.exports = {
    loginRuleForm: {
        mobile: "",
        passwd: "",
        identity: 0,
    },
    loginRules: {
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
    }
}