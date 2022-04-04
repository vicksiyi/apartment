<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="公寓名称" prop="title" required>
        <el-input placeholder="请输入公寓名称" v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="价格区间" required>
        <el-col :span="11">
          <el-form-item prop="moneyStart">
            <el-input placeholder="起始价格" type="number" v-model="ruleForm.moneyStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="moneyEnd">
            <el-input placeholder="结尾价格" type="number" v-model="ruleForm.moneyEnd"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile" required>
        <el-input placeholder="请输入联系电话" v-model="ruleForm.mobile"></el-input>
      </el-form-item>
      <el-form-item label="公寓地址" prop="address" required>
        <el-input placeholder="请输入公寓地址" v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="配套设施" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
          <el-checkbox label="免费WiFi" name="type"></el-checkbox>
          <el-checkbox label="热水" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="公寓描述" prop="msg">
        <el-input placeholder="公寓相关描述" type="textarea" v-model="ruleForm.msg"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="add('ruleForm')"
          >立即添加</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Submit",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {},
};
</script>


<style scoped>
.submit {
  padding: 20px;
}
</style>
