<template>
  <div class="created">
    <div class="centent">
      <!-- 添加菜谱成品图 -->
      <div class="finished_img">
        <el-upload
          class="avatar-uploader"
          action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
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
          <p>添加菜谱成品图</p>
          <p>
            （建议尺寸1280*1024，支持上传图片格式有jpg、jpeg、png、gif、webp）
          </p>
        </el-upload>
      </div>
      <br />
      <!-- 添加菜谱名称 -->
      <input type="text" value="菜谱名称" id="cname" v-model="data.title" />
      <br />
      <div class="public">
        <!-- 烹饪难度 -->
        <el-select v-model="data.degree" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <!-- 烹饪时间 -->
        <el-select v-model="data.cooktime" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

      </div>
      <br />
      <textarea name="" id="cstory" cols="80" rows="20" v-model="data.pdesc">
这道菜背后的故事</textarea
      >
      <br />
      <!-- 食材清单 -->
      <div class="public">
        <p style="font-size: 20px">食材清单</p>
      </div>
      <div class="food">
        <div>
          <div class="public">
            <span style="margin: 0 10px">食材</span>
            <span style="margin: 0 0 0 335px">用量</span>
          </div>

          <div>
            <input
              type="text"
              value="如:五花肉"
              class="food_m"
              v-model="data.foodlist"
            />
            <input
              type="text"
              value="如:500g"
              class="dosage"
              v-model="data.amountlist"
            />
            <span>+</span>
            <span>-</span>
          </div>

          <div>
            <input
              type="text"
              value="如:五花肉"
              class="food_m"
              v-model="data.foodlist"
            />
            <input
              type="text"
              value="如:500g"
              class="dosage"
              v-model="data.amountlist"
            />
            <span>+</span>
            <span>-</span>
          </div>
          <br />
          <div class="public" style="margin: 0 10px">增加一栏</div>
          <br />
        </div>
      </div>
      <!-- 步骤 -->
      <div class="Step">
        <div class="public">
          <span style="font-size: 20px; margin: 0 10px">步骤</span>
          <span>（支持上传图片格式有jpg、jpeg、png、gif、webp）</span>
        </div>
        <!-- 添加步骤图 -->
        <div class="Step_i_d">
          <div class="Step_img">
            <el-upload
              class="avatar-uploader"
              id="up"
              action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="data.stepsImg"
                :src="data.stepsImg"
                class="avatar"
                style="width: 224px; height: 224px"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <textarea
            name=""
            id=""
            class="bz_desc"
            v-model="data.steps"
          ></textarea>
        </div>
        <br />
        <div class="public" style="margin: 0 10px">增加一栏</div>
        <br />
      </div>
      <!-- 小贴士 -->
      <div class="public">
        <div style="font-size: 20px">小贴士</div>
        <textarea name="" id="xiaotieshi" v-model="data.tips"></textarea>
      </div>

      <div id="sm" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       options: [{
          value: '切墩(初级)',
          label: '切墩(初级)'
        }, {
          value: '配菜(中级)',
          label: '配菜(中级)'
        }, {
          value: '掌勺(高级)',
          label: '掌勺(高级)'
        }],
        options1: [{
          value: '10分钟左右',
          label: '10分钟左右'
        }, {
          value: '10-30分钟',
          label: '10-30分钟'
        }, {
          value: '30-60分钟',
          label: '30-60分钟'
        }
        , {
          value: '60分钟以上',
          label: '60分钟以上'
        }],
      data: {
        uid: "1", //用户
        cover: "", //封面
        title: "食谱名称", //食谱名称
        pdesc: "这道菜背后的故事", //故事 可以为空
        degree: "烹饪难度", //难易程度
        cooktime: "烹饪时间", // 烹饪时间
        taste: "", //味道
        foodlist: "", //食材
        amountlist: "", //食材用量
        stepsImg: "", //步骤图片
        steps: "步骤", //步骤
        tips: "小贴士", //小贴士 可以为空
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(file);

      this.data.cover = URL.createObjectURL(file.raw);
      console.log(this.data.cover);
    },
    handleAvatarSuccess1(res, file) {
      this.data.stepsImg += URL.createObjectURL(file.raw);
      console.log(this.stepsImg);
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
        this.data.uid &&
        this.data.cover &&
        this.data.title &&
        this.data.cooktime &&
        this.data.foodlist &&
        this.data.amountlist
      ) {
        console.log(1);
        let data = this.data;
        this.$http
          .post(`/publishMenu`, {
            data,
          })
          .then((res) => {
            console.log(1);
            alert(res.data.msg);
          });
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
#up {
  width: 224px;
  height: 224px;
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
    #cstory {
      display: block;
      width: 690 - 24px;
      height: 170px;
      margin: 20px 0;
      padding: 12px;
      font-size: 15px;
      color: #ccc;
      border: 1px solid #e5e3df;
      border-radius: 4px;
      resize: none;
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