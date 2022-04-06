<template>
  <div class="room">
    <div class="item">
      <div class="item-tag">
        <div class="first-tag"></div>
        <div class="title">公寓照片</div>
      </div>
      <div class="img-list">
        <el-row :guter="20">
          <el-col
            v-for="item in srcList"
            :key="item.id"
            :span="6"
            style="margin: 10px"
          >
            <el-image
              style="width: 120px; height: 120px"
              :src="item"
              :preview-src-list="srcList"
            ></el-image>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="item">
      <div class="item-tag">
        <div class="first-tag"></div>
        <div class="title">公寓信息</div>
      </div>
      <el-descriptions
        class="margin-top"
        :column="1"
        :size="size"
        border
        style="margin-top:20px;"
      >
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            标题
          </template>
          新净江景3房）保养靓仔 家私家电齐全 看房方便
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            联系人
          </template>
          1333777777
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          锦绣银湾 (番禺 大石)
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            租金
          </template>
          <el-tag size="small">>1800</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            描述
          </template>
          如需了解更多房源信息，请点击我头像进入店铺咨询更多
          锦绣银湾户型：3室2厅1厨2卫 1、这是锦绣银湾目前性价比非常高的一套房源
          2、低于市场价很多，业主非常诚心出租
          3、小区配套齐全，生活方便，交通便利
          4、房况保养很好，干净整齐，家私齐全 5、随时带您看房
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: "Room",
  data() {
    return {
      srcList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
@import url("../../../../../assets/css/scroll.css");
.room {
  padding: 20px;
}
.item-tag {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.item-tag .first-tag {
  width: 3px;
  height: 20px;
  margin-right: 10px;
  background: #409eff;
}

.item-tag .title {
  font-size: 16px;
  line-height: 20px;
  font-family: "webfont";
}
.img-list {
  margin-top: 20px;
}
</style>
