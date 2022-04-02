<template>
  <div class="room-right-list">
    <span>附近房间</span>
    <div class="lists">
      <RightListItem
        v-for="item in [1, 2, 3, 4, 5]"
        :key="item.id"
      ></RightListItem>
    </div>
  </div>
</template>

<script>
import RightListItem from "@/components/Home/detail/RightListItem";
export default {
  name: "RoomRightList",
  components: { RightListItem },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@import url("../../../assets/css/scroll.css");
.room-right-list span {
  font-size: 20px;
}
.lists {
  margin-top: 20px;
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>