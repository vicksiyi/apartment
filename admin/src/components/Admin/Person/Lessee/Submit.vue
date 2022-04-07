<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="公寓Id" prop="roomid" required>
        <el-input
          placeholder="请输入公寓Id"
          v-model="ruleForm.roomid"
        ></el-input>
      </el-form-item>
      <el-form-item label="租客电话" prop="mobile" required>
        <el-input
          placeholder="请输入租客联系电话"
          v-model="ruleForm.mobile"
        ></el-input>
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime" required>
        <el-date-picker
          v-model="ruleForm.startTime"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到期时间" prop="endTime" required>
        <el-date-picker
          v-model="ruleForm.endTime"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="公寓租金" prop="money" required>
        <el-input type="number" v-model="ruleForm.money"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="msg">
        <el-input type="textarea" v-model="ruleForm.msg"></el-input>
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
import { lesseeRuleForm } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { addroomreluser } from "@/api/lessee/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "Submit",
  data() {
    const checkMoney = function (rule, value, callback) {
      if (!value) {
        return new Error("必填信息");
      } else if (parseInt(value) <= 0) {
        callback(new Error("不能小于等于0"));
      } else {
        callback();
      }
    };
    const checkMobile = function (rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号格式不对"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: toJson(lesseeRuleForm),
      rules: {
        roomid: [{ required: true, message: "请输入公寓Id", trigger: "blur" }],
        startTime: [
          {
            type: "date",
            required: true,
            message: "请选择租期时间",
            trigger: "change",
          },
        ],
        endTime: [
          {
            type: "date",
            required: true,
            message: "请选择租期时间",
            trigger: "change",
          },
        ],
        mobile: [{ validator: checkMobile, trigger: "blur" }],
        money: [
          { required: true, message: "请输入租金" },
          { validator: checkMoney, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    add(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loading = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          let _result = (await addroomreluser({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({ type: "success", message: "添加成功" });
            this.$emit("closeDrawer", true);
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
