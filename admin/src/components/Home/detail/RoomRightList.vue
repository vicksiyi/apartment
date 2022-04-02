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
.room-right-list span {
  font-size: 20px;
}
.lists {
  margin-top: 20px;
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #9ea7b4;
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #9ea7b4;
  background-color: #555;
}
.lists::-webkit-scrollbar {
  width: 3px;
}
</style>