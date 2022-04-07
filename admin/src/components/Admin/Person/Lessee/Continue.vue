<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
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
        <el-button
          type="primary"
          style="width: 100%"
          @click="continueRoom('ruleForm')"
          >立即续租</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { lesseeContinueRuleForm } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { continueroomreluser } from "@/api/lessee/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "Submit",
  computed: {
    ...mapState({
      continueId: (state) => state.lessee.continueId,
    }),
  },
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
    return {
      ruleForm: toJson(lesseeContinueRuleForm),
      rules: {
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
        money: [
          { required: true, message: "请输入租金" },
          { validator: checkMoney, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    continueRoom(formName) {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loading = loading.start(this);
          let data = Object.assign({ id: this.continueId }, this.ruleForm);
          console.log(data);
          let _result = (await continueroomreluser({ data: data })).data;
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({ type: "success", message: "续租成功" });
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
