
module.exports = {
    loginRuleForm: {
        mobile: "",
        passwd: "",
        identity: 0,
    },
    loginRules: {
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        passwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
    },
    registerRuleForm: {
        mobile: "",
        passwd: "",
        checkPass: "",
        identity: "0",
        code: "",
    },
    roomRuleForm: {
        title: "",
        startMoney: 0,
        endMoney: 0,
        mobile: "",
        msg: "",
        address: "",
        status: 0,
    },
    lesseeRuleForm: {
        roomid: "",
        mobile: "",
        startTime: "",
        endTime: "",
        money: 0,
        msg: ""
    },
    lesseeContinueRuleForm: {
        startTime: "",
        endTime: "",
        money: 0,
        msg: ""
    },
    noticeRuleForm: {
        title: "",
        content: "",
    },
    noticeRules: {
        title: [{ required: true, message: "请输入通知标题", trigger: "blur" }],
        content: [
            { required: true, message: "请输入通知内容", trigger: "blur" },
        ],
    },
    editpassRuleForm: {
        newpasswd: "",
        oldpasswd: "",
        checkpasswd: "",
    }
}