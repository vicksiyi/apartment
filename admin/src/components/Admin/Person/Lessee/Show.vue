<template>
  <div class="device-type">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column prop="roomid" label="房间Id"> </el-table-column>
      <el-table-column prop="userid" label="租户Id"> </el-table-column>
      <el-table-column prop="mobile" label="联系方式"> </el-table-column>
      <el-table-column prop="endtime" label="到期时间"> </el-table-column>
      <el-table-column label="租金/月" width="100">
        <template slot-scope="scope">
          <el-tag type="success" effect="dark"> {{ scope.row.money }} </el-tag>
        </template></el-table-column
      >
      <el-table-column label="是否到期" width="80">
        <template>
          <el-tag type="danger" effect="dark"> 是 </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="查看">
        <template>
          <el-button type="success" @click="showRoom" size="mini"
            >公寓</el-button
          >
          <el-button type="" @click="showLessee" size="mini">租户</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button type="success" @click="continueRoom" size="mini">续租</el-button>
          <el-button type="danger" size="mini">退租</el-button>
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
          id: "1",
          roomid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          userid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          mobile: "1333888888",
          money: "1800",
          endtime: "2022/04/06 12:12:00",
        },
        {
          id: "2",
          roomid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          userid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          mobile: "1333888888",
          money: "1800",
          endtime: "2022/04/06 12:12:00",
        },
        {
          id: "3",
          roomid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          userid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          mobile: "1333888888",
          money: "1800",
          endtime: "2022/04/06 12:12:00",
        },
        {
          id: "4",
          roomid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          userid: "e11fdf33-b3ee-11ec-a092-00163e0c2d78",
          mobile: "1333888888",
          money: "1800",
          endtime: "2022/04/06 12:12:00",
        },
      ],
    };
  },
  methods: {
    showRoom() {
      this.$emit("changeShowHandle", 1);
    },
    showLessee() {
      this.$emit("changeShowHandle", 2);
    },
    continueRoom(){
      this.$emit("changeShowHandle", 0);
    }
  },
};
</script>


<style scoped>
</style>