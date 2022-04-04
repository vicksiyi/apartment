<template>
  <div class="device-type">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="userid" label="用户ID"> </el-table-column>
      <el-table-column prop="houseid" label="房号"> </el-table-column>
      <el-table-column prop="mobile" label="联系电话"> </el-table-column>
       <el-table-column prop="email" label="邮箱地址"> </el-table-column>
      <el-table-column prop="way" label="通知方式"> 
        <el-button  plain
    @click="open1" type="success" size="mini">邮件</el-button>
      </el-table-column>
       <el-table-column prop="status" label="状态">
       <template slot-scope="scope">
                    <a href="javascript:;">{{scope.row.orderStatus===0?'已通知':'未通知'}}</a>
                </template>
        </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="warning" @click="edit" size="mini">修改</el-button>
          <el-button type="danger" size="mini">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      tableData: [
        {
          userid:"123",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          email:"439582032@qq.com"
        },
        {
          userid:"123",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          email:"439582032@qq.com"
        },
        {
         userid:"123",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          email:"439582032@qq.com"
        },
        {
         userid:"123",
          houseid:"松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          email:"439582032@qq.com"
        },
      ],
    };
  },
  methods: {
    open1() {
        const h = this.$createElement;

        this.$notify({
          title: '@13895384790.whdhie',
          message: h('i', { style: 'color: teal'}, '通知邮件已发送')
        });
     },
    edit() {
      this.$emit("show", true);
    },
    show() {
      this.$emit("showImage");
    },
  },
};
</script>


<style scoped>
</style>