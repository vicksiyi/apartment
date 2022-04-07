<template>
  <div class="service" v-loading="loading">
    <el-alert
      v-if="
        !detail.name ||
        !detail.idcard ||
        !detail.card_img_1 ||
        !detail.card_img_2
      "
      title="未实名, 请先实名认证"
      :closable="false"
      type="warning"
    >
    </el-alert>
    <el-descriptions class="margin-top" style="margin: 10px" :column="1" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          真实姓名
        </template>
        <p v-if="detail.name">{{ detail.name }}</p>
        <el-row v-else :guter="20">
          <el-col :span="4">
            <el-input
              v-model="ipt_name"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-col>
          <el-col :span="2" style="margin-left: 20px">
            <el-button @click="confirm(0)" type="primary">提交</el-button>
          </el-col>
        </el-row>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          身份证号
        </template>
        <p v-if="detail.idcard">{{ detail.idcard }}</p>
        <el-row v-else :guter="20">
          <el-col :span="4">
            <el-input
              v-model="ipt_idcard"
              placeholder="请输入身份证号"
            ></el-input>
          </el-col>
          <el-col :span="2" style="margin-left: 20px">
            <el-button @click="confirm(1)" type="primary">提交</el-button>
          </el-col>
        </el-row>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          身份证正面
        </template>
        <el-image v-if="detail.card_img_1" :src="detail.card_img_1"></el-image>
        <el-upload
          v-else
          class="upload-demo"
          drag
          name="image"
          :headers="headers"
          :data="{ type: 0 }"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          action="http://localhost:8080/api/user/putidcardimg"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"></div>
        </el-upload>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          身份证背面
        </template>
        <el-image v-if="detail.card_img_2" :src="detail.card_img_2"></el-image>
        <el-upload
          v-else
          class="upload-demo"
          drag
          name="image"
          :headers="headers"
          :data="{ type: 1 }"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          action="http://localhost:8080/api/user/putidcardimg"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip"></div>
        </el-upload>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { putname, putidcard, getpersondetail } from "@/api/auth/user";
export default {
  name: "Auth",
  computed: {
    ...mapGetters("header", ["getHeader"]),
    headers() {
      return this.$store.getters["header/getHeader"];
    },
  },
  data() {
    return {
      detail: {
        name: "",
        idcard: "",
        card_img_1: "",
        card_img_2: "",
      },
      ipt_name: "",
      ipt_idcard: "",
      loading: false,
    };
  },
  methods: {
    confirm(type) {
      this.$confirm(
        `${type === 0 ? "真实姓名" : "身份证号"} 提交后不可更改, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          if (type == 0) this.putName();
          else this.putIdcard();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
    async putName() {
      this.loading = true;
      if (this.ipt_name != "") {
        let _result = (await putname({ data: { new_name: this.ipt_name } }))
          .data;
        if (_result.code != 200) this.$message.error(_result.msg);
        else {
          this.name = this.ipt_name;
          this.$message({
            type: "success",
            message: "成功提交姓名!",
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "未能为空!",
        });
      }
      this.loading = false;
    },
    async putIdcard() {
      this.loading = true;
      if (this.ipt_idcard != "") {
        let _result = (
          await putidcard({ data: { new_idcard: this.ipt_idcard } })
        ).data;
        if (_result.code != 200) this.$message.error(_result.msg);
        else {
          this.idcard = this.ipt_idcard;
          this.$message({
            type: "success",
            message: "成功提交身份证号!",
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "未能为空!",
        });
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
        if (res.type == 0) this.detail.card_img_1 = res.url;
        else this.detail.card_img_2 = res.url;
        this.$message({ type: "success", message: "上传成功" });
      }
    },
    async getData() {
      this.loading = true;
      let _result = (await getpersondetail()).data;
      if (_result.code != 200) this.$message.error(_result.msg);
      else this.detail = _result.data;
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>


<style scoped>
</style>
