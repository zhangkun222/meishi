<template>
  <div
    class="created"
    :style="{ backgroundImage: 'url(' + backimg + ') no-repeat' }"
  >
    <div class="centent">
      <!-- 添加菜谱成品图 -->
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
          <p>添加菜谱成品图(必填)</p>
          <p>
            （建议尺寸1280*1024，支持上传图片格式有jpg、jpeg、png、gif、webp）
          </p>
        </el-upload>
      </div>
      <br />
        <!-- 添加菜谱轮播图图 -->
      <div class="finished_img">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8000/uploadimg"
          :show-file-list="false"
          :on-success="handleAvatarSuccessbgc"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="data.bgcImg"
            :src="data.bgcImg"
            class="avatar"
            style="width: 100%; height: 100%"
          />
          <i  v-else class="el-icon-plus avatar-uploader-icon"></i>
          <p>添加菜谱轮播图(选填)</p>
          <p>
            （建议尺寸1280*1024，支持上传图片格式有jpg、jpeg、png、gif、webp）
          </p>
        </el-upload>
      </div>
      <br />

      <!-- 添加菜谱名称 -->
      <input
        type="text"
        value="菜谱名称"
        id="cname"
        v-model.trim="data.title"
      />
      <br />

      <!-- 添加口味名称 -->
      <input
        type="text"
        id="cname"
        v-model.trim="data.taste"
      />
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
        这道菜背后的故事
      </textarea>
      <br />
      <!-- 食材清单 -->
      <div class="public">
        <p style="font-size: 20px">食材清单</p>
      </div>
      <div class="food">
        <div>
          <div class="public">
            <span style="margin: 0 10px">食材</span>
            <span style="margin: 0 0 0 335px"> 用量</span>
          </div>

          <div v-for="(i, j) in shicai" :key="j">
            <input
              type="text"
              value="如:五花肉"
              class="food_m"
              v-model="data.foodlist[j]"
            />
            <input
              type="text"
              value="如:500g"
              class="dosage"
              v-model="data.amountlist[j]"
            />
            <br />
          </div>

          <br />
          <div class="public" style="margin: 0 10px" @click="addshicai">
            增加一栏
          </div>
          <br />
        </div>
      </div>
      <!-- 步骤 -->
      <div class="Step">
        <div v-for="(i, j) in imgs" :key="j">
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
                action="http://localhost:8000/uploadimg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess1"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="data.stepsImg[j]"
                  :src="data.stepsImg[j]"
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
              v-model.trim="data.steps[j]"
            ></textarea>
          </div>
          <br />
        </div>
        <div class="public" style="margin: 0 10px" @click="add">增加一栏</div>
        <br />
      </div>

      <!-- 小贴士 -->
      <div class="public">
        <div style="font-size: 20px">小贴士</div>
        <textarea name="" id="xiaotieshi" v-model.trim="data.tips"></textarea>
      </div>

      <div id="sm" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
import backimg from "../../public/bg/hehua.jpg";

export default {
  data() {
    return {
      backimg: backimg,
      options: [
        {
          value: "切墩(初级)",
          label: "切墩(初级)",
        },
        {
          value: "配菜(中级)",
          label: "配菜(中级)",
        },
        {
          value: "掌勺(高级)",
          label: "掌勺(高级)",
        },
      ],
      options1: [
        {
          value: "10分钟左右",
          label: "10分钟左右",
        },
        {
          value: "10-30分钟",
          label: "10-30分钟",
        },
        {
          value: "30-60分钟",
          label: "30-60分钟",
        },
        {
          value: "60分钟以上",
          label: "60分钟以上",
        },
      ],
      imgs: [1],
      shicai: [1],
      data: {
        uid: "1", //用户
        cover: "", //封面
        bgcImg:'', //轮播图
        title: "食谱名称(必填)", //食谱名称
        pdesc: "这道菜背后的故事(选填)", //故事 可以为空
        degree: "烹饪难度(必选)", //难易程度
        cooktime: "烹饪时间(必选)", // 烹饪时间
        taste: "味道(选填)", //味道
        foodlist: [], //食材
        amountlist: [], //食材用量
        stepsImg: [], //步骤图片
        steps: [
          "步骤1",
          "步骤2",
          "步骤3",
          "步骤4",
          "步骤5",
          "步骤6",
          "步骤7",
          "步骤8",
          "步骤9",
          "步骤10",
          "步骤11",
          "步骤12",
          "步骤13",
          "步骤14",
          "步骤15",
          "步骤16",
          "步骤17",
          "步骤18",
          "步骤19",
          "步骤20",
        ], //步骤
        tips: "小贴士(选填)", //小贴士 可以为空
      },
    };
  },
  methods: {
    addshicai() {
      this.shicai.push(1);
    },
    add() {
      this.imgs.push(1);
    },
    handleAvatarSuccess(res, file) {
      this.data.cover = file.response.src;
      console.log(this.data.cover);
    },
    handleAvatarSuccess1(res, file) {
      this.data.stepsImg.push(file.response.src);
    },
    handleAvatarSuccessbgc(res, file) {
      this.data.bgcImg=file.response.src;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isLt2M;
    },
    submit() {

      if (this.data.degree == "烹饪难度(必选)"||this.data.cooktime == "烹饪时间(必选)") {
        alert("请输选择烹饪难度或烹饪时间");
        return
      }
      if (this.data.tips == "小贴士(选填)") {
        this.data.tips = "";
      }
      if (this.data.pdesc == "这道菜背后的故事(选填)") {
        this.data.pdesc = "";
      }
      if (this.data.taste == "味道(选填)") {
        this.data.taste = "";
      }
      
      
      console.log(this.data);
      if (
        this.data.uid &&
        this.data.cover &&
        this.data.cooktime &&
        this.data.foodlist &&
        this.data.amountlist
      ) {
        let data = this.data;
        data.foodlist=this.data.foodlist.join(",");
        data.amountlist=this.data.amountlist.join(",");

        data.stepsImg=this.data.stepsImg.join(",");
        data.steps.forEach((e,i) => {
            if (e.length<=4) {
              data.steps[i]=''
            }
        });
        data.steps=this.data.steps.join(",");

        console.log(data);
        this.$http
          .post(`/publishMenu`, {
            data,
          })
          .then((res) => {
            console.log(1);
            alert(res.data.msg);
            window.location.reload();
          });
      } else {
        alert("请输入正确内容及图片");
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
  background: rgb(27, 185, 224);

  .centent {
    width: 1000px;
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