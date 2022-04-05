<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="公寓名称" prop="title">
        <el-input
          placeholder="请输入公寓名称"
          v-model="ruleForm.title"
        ></el-input>
      </el-form-item>
      <el-form-item label="价格区间">
        <el-col :span="11">
          <el-form-item prop="startMoney">
            <el-input
              placeholder="起始价格"
              type="number"
              v-model="ruleForm.startMoney"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="endMoney">
            <el-input
              placeholder="结尾价格"
              type="number"
              v-model="ruleForm.endMoney"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input
          placeholder="请输入联系电话"
          v-model="ruleForm.mobile"
        ></el-input>
      </el-form-item>
      <el-form-item label="公寓地址" prop="address">
        <el-input
          placeholder="请输入公寓地址"
          v-model="ruleForm.address"
        ></el-input>
      </el-form-item>
      <el-form-item label="公寓状态">
        <el-radio-group v-model="ruleForm.status">
          <el-radio
            v-for="(item, index) in status"
            :key="item"
            :label="index"
            >{{ item }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="公寓描述" prop="msg">
        <el-input
          placeholder="公寓相关描述"
          type="textarea"
          v-model="ruleForm.msg"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="!isEdit"
          type="primary"
          style="width: 100%"
          @click="add('ruleForm')"
          >立即添加</el-button
        >
        <el-button
          v-else
          type="primary"
          style="width: 100%"
          @click="add('ruleForm', true, room.uuid)"
          >修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { roomRuleForm } from "@/utils/rules";
import { toJson } from "@/utils/switch";
import { addroom, editroom } from "@/api/room/index";
import form from "@/utils/form";
import loading from "@/utils/loading";
export default {
  name: "Submit",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    updateSubmit: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    updateSubmit() {
      if (this.isEdit) {
        this.ruleForm = this.room;
      }
    },
  },
  computed: {
    ...mapState({
      room: (state) => state.room.room,
    }),
  },
  data() {
    const validateMoney = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error("价格不可以小于0"));
      } else if (value == "") {
        callback(new Error("价格不能为空"));
      } else callback();
    };
    return {
      status: ["未上架", "已上架"],
      ruleForm: toJson(roomRuleForm),
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        startMoney: [{ validator: validateMoney, trigger: "blur" }],
        endMoney: [{ validator: validateMoney, trigger: "blur" }],
        mobile: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
        ],
        msg: [{ required: true, message: "请输入房屋描述", trigger: "blur" }],
        address: [
          { required: true, message: "请输入房屋地址", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    add(formName, status = false, uuid = "") {
      form.validate(this, formName).then(async (valid) => {
        if (valid) {
          let _loading = loading.start(this);
          let data = Object.assign({}, this.ruleForm);
          let _result;
          if (!status) {
            _result = (await addroom({ data: data })).data;
          } else {
            _result = (
              await editroom({ data: Object.assign(data, { uuid: uuid }) })
            ).data;
          }
          if (_result.code != 200) this.$message.error(_result.msg);
          else {
            this.$message({
              type: "success",
              message: `添加${this.isEdit ? "修改" : "添加"}`,
            });
            this.ruleForm = toJson(roomRuleForm);
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
  mounted() {
    if (this.isEdit) {
      this.ruleForm = this.room;
    }
  },
};
</script>


<style scoped>
.submit {
  padding: 20px;
}
</style>
