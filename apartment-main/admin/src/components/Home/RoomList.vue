<template>
  <div class="room-list">
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="4">
        <el-select v-model="domain" clearable placeholder="筛选地区">
          <el-option
            v-for="item in domains"
            :key="item.id"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="money" clearable placeholder="租金范围">
          <el-option
            v-for="item in moneys"
            :key="item.id"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col
        v-for="item in datas"
        :key="item.id"
        :span="6"
        style="margin-top: 10px"
      >
        <div @click="navDetail">
          <el-card class="box-card">
            <Room></Room>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Room from "@/components/Home/Room";
export default {
  name: "RoomList",
  components: { Room },
  data() {
    return {
      datas: [1, 1, 1, 1, 1, 1, 1, 1],
      domains: ["天河区", "番禺区", "xx区"],
      moneys: ["1000<", "1000-1500", "1500-2000", ">2000"],
      domain: "",
      money: "",
    };
  },
  methods: {
    navDetail() {
      console.log("查看详细");
      this.$router.push("/detail?roomId=13123123");
    },
  },
};
</script>
<style scoped>
.page {
  margin-top: 20px;
}
.el-pagination {
  text-align: center;
}
</style>
