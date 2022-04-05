<template>
  <div class="show-image" v-loading="loading">
    <el-upload
      class="upload-demo"
      name="image"
      :headers="headers"
      :data="getRoomId"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      action="http://localhost:8080/api/upload/images"
      :before-upload="beforeAvatarUpload"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过2M
      </div>
    </el-upload>
    <el-row :guter="20">
      <el-col
        style="position: relative"
        v-for="item in images"
        :key="item.id"
        :span="8"
      >
        <i
          @click="delImage(item.id)"
          class="el-icon-circle-close icon-position"
        ></i>
        <el-image
          style="width: 150px; height: 150px; margin: 10px"
          :src="item.url"
          :preview-src-list="images_preview"
        >
        </el-image>
      </el-col>
      <el-empty v-if="images.length == 0" description="暂无图片"></el-empty>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getimages, delimage } from "@/api/room/index";
export default {
  name: "ShowImage",
  props: {
    roomId: {
      type: String,
      default: "",
    },
  },
  watch: {
    roomId(val) {
      this.roomId = val;
      this.getData();
    },
  },
  computed: {
    ...mapGetters("header", ["getHeader"]),
    headers() {
      return this.$store.getters["header/getHeader"];
    },
    getRoomId() {
      return { roomId: this.roomId };
    },
    images_preview() {
      return this.images.map((value) => value.url);
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      loading: false,
      images: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let _result = (await getimages({ roomId: this.roomId })).data;
      if (_result.code != 200) this.$message.error("获取失败");
      else {
        this.images = _result.data;
      }
      this.loading = false;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isJPG && isLt2M) this.loading = true;
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res) {
      this.loading = false;
      if (res.code != 200) this.$message.error(res.msg);
      else {
        this.$message({ type: "success", message: "上传成功" });
        this.getData();
      }
    },
    async delImage(id) {
      this.loading = true;
      let _result = (await delimage({ id: id })).data;
      this.loading = false;
      if (_result.code != 200) this.$message.error(res.msg);
      else {
        this.$message({ type: "success", message: "删除成功" });
        this.getData();
      }
    },
  },
  mounted() {
    console.log(this.getData());
  },
};
</script>

<style scoped>
.icon-position {
  position: absolute;
  top: 0px;
  right: 20px;
  z-index: 99;
  font-size: 20px;
  color: #f56c6c;
}
</style>


<style scoped>
.show-image {
  padding: 20px;
}
</style>
