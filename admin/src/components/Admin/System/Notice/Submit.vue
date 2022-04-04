<template>
  <div class="submit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    ><el-form-item label="用户ID" prop="userid" required>
        <el-input placeholder="请输入用户ID" v-model="ruleForm.houseid"></el-input>
      </el-form-item>
      <el-form-item label="用户房号" prop="houseid" required>
        <el-input placeholder="请输入用户房号" v-model="ruleForm.houseid"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile" required>
      <el-input placeholder="请输入用户联系电话" v-model="ruleForm.mobile"></el-input>
      </el-form-item>
       <el-form-item label="邮箱地址" prop="mobile" required>
      <el-input placeholder="请输入用户邮箱地址" v-model="ruleForm.mobile"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status" required>
         <el-radio v-model="radio" label="1">未通知</el-radio>
  <el-radio v-model="radio" label="2">已通知</el-radio>
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
        radio: '1',
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
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
          { required: true, message: "请输入租客房号", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择到期时间",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "datenum",
            required: true,
            message: "距离到期时间还有",
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
