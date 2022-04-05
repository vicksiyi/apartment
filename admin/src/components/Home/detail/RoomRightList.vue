<template>
  <div v-loading="loading" class="room-right-list">
    <span>附近房间</span>
    <div class="lists">
      <RightListItem
        v-for="item in getRooms"
        :key="item.id"
        :room="item"
        @navDetail="navDetail"
      ></RightListItem>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RightListItem from "@/components/Home/detail/RightListItem";
export default {
  name: "RoomRightList",
  components: { RightListItem },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      rooms: (state) => state.user_room.rooms,
    }),
  },
  watch: {
    loading(val) {
      if (!val) this.getRooms = this.getArrayItems(this.rooms, 10);
    },
  },
  data() {
    return { getRooms: [] };
  },
  methods: {
    navDetail(uuid) {
      this.$router.push(`/detail?roomId=${uuid}`);
    },
    getArrayItems(arr, num) {
      var temp_arr = arr.slice(0);
      var return_arr = [];
      for (var i = 0; i < num; i++) {
        if (temp_arr.length > 0) {
          var arrIndex = Math.floor(Math.random() * temp_arr.length);
          return_arr[i] = temp_arr[arrIndex];
          temp_arr.splice(arrIndex, 1);
        } else {
          break;
        }
      }
      return return_arr;
    },
  },
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