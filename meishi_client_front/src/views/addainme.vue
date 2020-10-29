<template>
  <div class="created">
    <div class="centent">
      <!-- 添加漫画食谱成品图 -->
      <div class="finished_img">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8000/uploadimg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="data.cover"
            :src="data.cover"
            class="avatar"
            style="width: 100%; height: 100%"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <p>添加漫画食谱成品图</p>
          <p>
            （建议尺寸1280*1024，支持上传图片格式有jpg、jpeg、png、gif、webp）
          </p>
        </el-upload>
      </div>
      <br />
      <!-- 添加菜谱名称 -->
      <input type="text" value="菜谱名称" id="cname" v-model="data.aname" />
  <br>
      <div id="sm" @click="submit">提交</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        mid: 1, //用户
        cover: "", //封面
        aname: "食谱名称", //食谱名称
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.data.cover = file.response.src;
    },
    handleAvatarSuccess1(res, file) {
      this.data.stepsImg +=  file.response.src;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 8;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isLt2M;
    },
    submit() {
      console.log(this.data);
      if (
        this.data.cover &&
        this.data.aname !=="食谱名称"
      ) {
        console.log(1);
        let data = this.data;
        this.$http
          .post(`/publishAnime`, {
            data,
          })
          .then((res) => {
            console.log(1);
            alert(res.data.msg);
          });
      }
      else{
        alert('请输入正确内容及图片');
      }
    },
  },
};
</script>

<style lang="scss">
//ui
.avatar-uploader .el-upload {
  width: 690px;
  height: 390px;
  box-sizing: border-box;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #5ea2e6;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
//自己
.created {
  background: rgb(63, 180, 206);

  .centent {
    width: 1000px;
    height: 2000px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    .public {
      width: 690px;
      text-align: left;
    }

    .finished_img {
      width: 690px;
      height: 390px;
      text-align: center;
      color: #999;
      font-size: 15px;
      line-height: 20px;
      border-radius: 8px;
      background: #eee;
    }
    #cname {
      width: 690 - 24px;
      height: 42px;
      line-height: 42px;
      background: #fff;
      border: 1px solid #e5e3df;
      border-radius: 4px;
      color: #ccc;
      font-size: 16px;
      padding: 0 12px;
    }
   
    .food {
      margin: 20px 0 10px;
      width: 690px;
      background: #f1f7fa;
      border-radius: 8px;
    }
    .Step {
      width: 690px;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      margin: 10px 0;
      .Step_img {
        width: 224px;
        height: 224px;
        background: #eee
          url("https://cp1.douguo.com/static/nweb/images/add.png") no-repeat
          center center;
      }
    }
    .food_m {
      margin: 0 10px;
      height: 42px;
      line-height: 42px;
      border: 1px solid #e5e3df;
      border-radius: 4px;
      float: left;
      padding: 0 10px;
      color: #999;
      display: inline-block;
      width: 305px;
    }
    .Step_i_d {
      margin: 10px 0;
      width: 690px;
      display: flex;
      justify-content: space-between;
    }
    .dosage {
      height: 42px;
      line-height: 42px;
      border: 1px solid #e5e3df;
      border-radius: 4px;
      padding: 0 10px;
      color: #999;
      display: inline-block;
      width: 230px;
    }
    .bz_desc {
      padding: 12px 10px;
      width: 430px;
      height: 200px;
      resize: none;
      border-radius: 4px;
      border: 1px solid #805b12;
      font-size: 15px;
      color: #333;
    }
    #xiaotieshi {
      display: inline-block;
      resize: none;
      width: 690px;
      height: 170px;
      box-sizing: border-box;
      margin: 20px 0;
      padding: 12px;
      border: 1px solid #e5e3df;
      border-radius: 4px;
      font-size: 15px;
      line-height: 27px;
      color: #ccc;
    }
    #sm {
      width: 200px;
      height: 50px;
      border-radius: 10px;
      background: #ffb31a;
      font-size: 20px;
      color: #fff;
      line-height: 50px;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>