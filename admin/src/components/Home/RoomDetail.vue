<template>
  <div class="room-detail">
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="16">
        <RoomLeftDetail @evenLoading="evenLoading"></RoomLeftDetail>
      </el-col>
      <el-col :span="8">
        <RoomRightList :loading="loading"></RoomRightList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RoomLeftDetail from "@/components/Home/detail/RoomLeftDetail";
import RoomRightList from "@/components/Home/detail/RoomRightList";
export default {
  name: "RoomDetail",
  components: { RoomLeftDetail, RoomRightList },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    evenLoading(status) {
      this.loading = status;
    },
  },
};
</script>

<style scoped>
</style>