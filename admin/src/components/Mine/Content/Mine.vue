<template>
  <div class="mine">
    <el-table :data="rooms" height="500" v-loading="loading" border style="width: 100%">
      <el-table-column prop="title" label="房屋名称" width="180">
      </el-table-column>
      <el-table-column label="租金" width="180">
        <template slot-scope="scope">
          <el-tag size="small">{{ scope.row.money }}元/月</el-tag></template
        >
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="续租情况">
        <template slot-scope="scope">
          <div v-if="scope.row.continues.length" class="detail">
            <el-timeline>
              <el-timeline-item
                v-for="(itemChilren, index) in scope.row.continues"
                :key="itemChilren.id"
                size="large"
                :color="index == 0 ? '#67C23A' : ''"
                icon="el-icon-star-off"
                :timestamp="itemChilren.time"
                placement="top"
              >
                <el-card>
                  <h4>{{ itemChilren.msg }}</h4>
                  <p>{{ itemChilren.startTime }}至{{ itemChilren.endTime }}</p>
                  <el-tag type="success">{{ itemChilren.money }}</el-tag>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
          <div v-else>
            <el-empty description="暂无续租"></el-empty>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getuserrooms } from "@/api/room/user_room";
export default {
  name: "Mine",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      rooms: [],
      loading: false,
    };
  },
  methods: {
    show() {
      this.drawer = true;
    },
    async getData() {
      this.loading = true;
      let _result = (await getuserrooms()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else {
        this.rooms = _result.data;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
@import url("../../../assets/css/scroll.css");
.mine {
  padding-right: 20px;
}
.detail {
  max-height: 200px;
  overflow-y: scroll;
}
</style>
