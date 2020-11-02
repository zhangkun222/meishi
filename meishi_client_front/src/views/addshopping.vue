<template>
  <div class="created">
    <div class="centent">
      <!-- 添加商品图 -->
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
          <p>添加商品图</p>
          <p>
            （建议尺寸1280*1024，支持上传图片格式有jpg、jpeg、png、gif、webp）
          </p>
        </el-upload>
      </div>
      <br />
      <!-- 添加商品名称 -->
      <input type="text" class="cname" v-model.trim="data.pname" />
      <br />
      <input type="text" class="cname" v-model.trim="data.pdesc" />
      <br />
      <input type="text" class="cname" v-model.trim="data.price" />
      <br />
      <input type="text" class="cname" v-model.trim="data.discount" />
      <br />
      <input type="text" class="cname" v-model.trim="data.sales" />
      <br />
      <input type="text" class="cname" v-model.trim="data.address" />
      <br />
      <div class="w690">
        <div id="div1">
          <div class="ArticleDetail">
            <div ref="editor" style="text-align: left" id="div456"></div>
          </div>
        </div>

        <div id="sm" @click="submit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from "element-ui";
import E from "wangeditor";
var editor;

export default {
  name: "WriteArticle",
  data() {
    return {
      nr: "4566",
      Title: "",
      Content: "",
      data: {
        pname: "商品名称(必填)",
        cover: "",
        pdesc: "商品简介(必填)",
        price: "商品加个(必填)",
        discount: "商品折扣(必填)",
        sales: "商品销量(必填)",
        address: "商品发货地(必填)",
        datails: "",
        pmid: 1,
      },
    };
  },
  watch: {
    Content: function () {
      console.log(this.Content);
    },
    "editor.customConfig.uploadImgHooks": {
      before: function (xhr, editor, files) {
        console.log(xhr, editor, files);
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        return {
          prevent: true,
          msg: "放弃上传",
        };
      },
      success: function (xhr, editor, result) {
        console.log(xhr, editor, result);

        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      fail: function (xhr, editor, result) {
        console.log(xhr, editor, result);

        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function (xhr, editor) {
        console.log(xhr, editor);

        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function (xhr, editor) {
        console.log(xhr, editor);

        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },

      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function (insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.url;
        insertImg(url);

        // result 必须是一个 JSON 格式字符串！！！否则报错
      },
    },
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.data.cover = file.response.src;
    },

    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 8;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isLt2M;
    },

    submit() {
      console.log(editor.$textContainerElem);
      console.log(editor.$textElem);
      console.log(editor.toolbarElem);
      console.log(editor.txt);

      console.log(
        document.getElementsByClassName("w-e-text-container")[0]
          .firstElementChild.innerHTML
      );

      console.log(this.data);
      console.log(this.fileList);

      if (
        this.data.pname !== "商品名称(必填)" &&
        this.data.cover  &&
        this.data.pdesc !== "商品简介(必填)" &&
        this.data.price !== "商品加个(必填)" &&
        this.data.discount !== "商品折扣(必填)" &&
        this.data.sales !== "商品销量(必填)" &&
        this.data.address !== "商品发货地(必填)" 
    
      ) {
        console.log(1);
        let data = this.data;
        this.$http
          .post(`/publishshopping`, {
            data,
          })
          .then((res) => {
            console.log(1);
            alert(res.data.msg);
            window.location.reload();
          });
      } else {
        alert("全部必填，请输入正确内容及图片");
      }
    },
  },
  mounted: function () {
    let a;
    editor = new E(this.$refs.editor);
    editor.config.withCredentials = true;
    editor.config.showLinkImg = true;
    (editor.config.customUploadImg = true), //上传图片框本地上传的功能，false为隐藏，默认为true
      (editor.config.placeholder = "商品详情"),
      (editor.customConfig = {
        // allowImageUpload:  true ,
        uploadImgShowBase64: false,
        uploadImgServer: "http://localhost:8000/uploadimg", // 上传图片到服务器
        uploadFileName: "Content", //后端使用这个字段获取图片信息
        uploadImgMaxLength: 20, // 限制一次最多上传 1 张图片
        pasteUrl:"http://localhost:8000/uploadimg",
        
      });
    // 使用 base64 保存图片
    // editor.customConfig.uploadImgShowBase64 = true;
    editor.config.customUploadImg = function (resultFiles, insertImgFn) {
      axios
        .post("http://localhost:8000/uploadimg", resultFiles[0])
        .then(function (res) {
          // 上传图片，返回结果，将图片插入到编辑器中
          // insertImgFn(res.url);
        })
        .catch(function (err) {
          console.log(err);
        });

      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中
      // console.log(insertImgFn);
      // console.log(insertImgFn);
          console.log(resultFiles[0]);

      insertImgFn(resultFiles[0].name);
    };
    editor.config.onchange = function (html) {
      // 第二步，监控变化，同步更新到 textarea
      console.log(html);
    };
    editor.create();
    this.Content = editor.txt.html();
    console.log(editor);
    console.log(editor.$textContainerElem);
    console.log(editor.$textElem);
    console.log(editor.toolbarElem);
    console.log(editor.txt);
    console.log(editor.config.customUploadImg);
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
    .w690 {
      width: 690px;
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
    .cname {
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

    #sm {
      width: 200px;
      height: 50px;
      margin: 10px auto;
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