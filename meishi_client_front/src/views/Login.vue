<template>
<<<<<<< HEAD
  <div class="abc">
=======
  <div class="all">
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
    <div class="top">
      <img :src="logo" alt="" id="toplogo" />
    </div>

    <div class="main">
      <img :src="leftimg" alt="" id="leftimg" />
      <div class="lr">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="免密登录" name="fast">
            <div class="login-input">
              <input
                type="text"
                name="tel"
                v-model="userphone"
                placeholder="+86 > 手机号"
                style="text-indent: 20px"
<<<<<<< HEAD
                @focus="change"
=======
                @blur="blurInp"
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
              />
              <div style="position=relative;">
                <input
                  type="text"
                  name="cod"
                  v-model="verif"
                  placeholder="验证码"
                  style="text-indent: 20px"
<<<<<<< HEAD
                  @focus="change"
=======
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
                />
                <span class="getverif" @click="getsmsverif">{{ title }}</span>
              </div>
            </div>
            <button type="button" class="codebtn" @click="login">登录</button>
          </el-tab-pane>
<<<<<<< HEAD
=======
          <!--  -->
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
          <el-tab-pane label="密码登录" name="first">
            <!-- 表单 -->
            <div class="form">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="65px"
                class="demo-ruleForm"
                size="large"
              >
<<<<<<< HEAD
                <el-form-item label="用户名" prop="name">
=======
                <el-form-item label="手机号" prop="name">
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passwd">
                  <el-input
                    type="password"
                    v-model="ruleForm.passwd"
                  ></el-input>
                </el-form-item>
                <div class="btn">
                  <el-form-item>
                    <button
                      type="button"
                      class="btnlogin"
                      @click="submitForm('ruleForm')"
                    >
                      登录
                    </button>
                  </el-form-item>
                </div>
                <div class="toReg">
                  <span>还没有账号？</span>
                  <a href="###" @click="LogintoReg">去注册吧~</a>
                </div>
              </el-form>
            </div>
          </el-tab-pane>
          <!--  -->
          <el-tab-pane label="用户注册" name="second">
            <div class="form1">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleFormreg"
                label-width="80px"
                class="demo-ruleForm"
                size="large"
              >
<<<<<<< HEAD
                <el-form-item label="用户名" prop="namereg">
=======
                <el-form-item label="昵称" prop="nickname">
                  <el-input v-model="ruleForm.nickname"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="namereg">
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
                  <el-input v-model="ruleForm.namereg"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <div class="btn">
                  <el-form-item>
                    <button
                      type="button"
<<<<<<< HEAD
                      class="btnlogin"
=======
                      class="btnReg"
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
                      @click="submitFormReg('ruleFormreg')"
                    >
                      注册
                    </button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="bottom">
<<<<<<< HEAD
      <router-link to="">去到首页</router-link>|
=======
      <router-link to="/">去到首页</router-link>|
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
      <router-link to="">关于我们</router-link>|
      <router-link to="">意见反馈</router-link>|
      <router-link to="">菜谱大全</router-link>|
      <router-link to="">购物商城</router-link>
    </div>
  </div>
</template>

<script>
import logoimg from "@/assets/img/toplogo.png";
import left from "@/assets/img/logoleft.png";
export default {
  data() {
<<<<<<< HEAD
=======
    var validateNick = (rule, value, callback) => {
      let reg = /^[\u4e00-\u9fa5]{2,6}$/i;
      if (value === "") {
        callback(new Error("请输入昵称"));
      } else if (!reg.test(value)) {
        callback(new Error("昵称格式：2-6个中文字符"));
      } else {
        callback();
      }
    };
    var validateTel = (rule, value, callback) => {
      let reg = /^1[3456789]\d{9}$/;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!reg.test(value)) {
        callback(new Error("手机号格式不正确，请重新输入"));
      } else {
        callback();
      }
    };
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
    var validatePass = (rule, value, callback) => {
      let reg = /^(?=.*\d+)(?=.*[A-Za-z]+).{6,16}$/i;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码6~16位，且必须包含数字、字母"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      logo: logoimg,
      leftimg: left,
      activeName: "fast",
      userphone: "",
      verif: "",
      title: "获取短信验证码",
<<<<<<< HEAD
      reminderObj: {
        isShow: false,
        remind: "",
      },
      ruleForm: {
        name: "",
        passwd: "",
=======
      ruleForm: {
        name: "",
        passwd: "",
        nickname: "",
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
        namereg: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        name: [
<<<<<<< HEAD
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
=======
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateTel, trigger: "blur" },
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
        ],
        passwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
<<<<<<< HEAD
        namereg: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          { required: true },
=======
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { validator: validateNick, trigger: "blur" },
        ],
        namereg: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateTel, trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入密码" },
          { validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "请输入确认密码" },
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
<<<<<<< HEAD
  watch:{
    tel:function(){
      if(!this.userphone){
        alert(265);
      }
    }
  },
  methods: {
=======
  methods: {
    blurInp() {
      if (!/^1[3456789]\d{9}$/.test(this.userphone)) {
        this.$message("手机号格式不正确，请重新输入！");
      }
    },
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
    handleClick(tab, event) {
      console.log(tab, event);
    },
    LogintoReg() {
      this.activeName = "second";
    },
<<<<<<< HEAD
    change() {
      this.reminderObj.isShow = false;
    },
=======
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
    getsmsverif() {
      //获取短信验证码
      let phone1 = this.userphone;
      if (!/^1[3456789]\d{9}$/.test(phone1)) {
<<<<<<< HEAD
        this.reminderObj.remind = "请输入正确的手机号";
        this.reminderObj.isShow = true;
      } else {
        this.title = "验证码已发送请等候";
=======
        this.$message("请输入正确的手机号！");
      } else {
        this.title = "验证码已发送";
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
        this.$http
          .post(
            "/smsverif",
            { phone: this.userphone },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(222);
            console.log(res);
          });
      }
    },
<<<<<<< HEAD
    login() {
      if (this.logintype.phone) {
        if (!this.userphone && !this.verif) {
          this.reminderObj.remind = "请输入内容";
          this.reminderObj.isShow = true;
        }
        if (this.userphone && !this.verif) {
          this.reminderObj.remind = "请输入动态码";
          this.reminderObj.isShow = true;
        }
        if (!this.userphone && this.verif) {
          this.reminderObj.remind = "请输入账号";
          this.reminderObj.isShow = true;
        }
=======
    //验证码登录
    login() {
      let _this = this;
      if (!this.userphone && !this.verif) {
        this.$message("请输入手机号和验证码");
      } else if (this.userphone && !this.verif) {
        this.$message("请输入验证码");
      } else if (!this.userphone && this.verif) {
        this.$message("请输入手机号");
      } else {
        this.$http
          .post(
            "/verifLogin",
            { userphone: this.userphone,verif:this.verif },
            { withCredentials: true }
          )
          .then(function (res) {
            console.log(789798798789798);
            if (res.data.code == -1) {
              //手机号未注册
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
            } else if (res.data.code == 0) {
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
            } else if (res.data.code == 1) {
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "success",
              });
              localStorage.setItem("username", this.userphone);
              _this.$router.push('/')
            }
          });
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
      }
    },
    // 用户登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let data = {
          username: this.ruleForm.name,
          passwd: this.ruleForm.passwd,
        };
        let _this = this;
        if (valid) {
          this.$http.post("/login", data).then(function (res) {
            console.log(res);
            if (res.data.code == 0) {
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
            } else if (res.data.code == -1) {
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "error",
              });
            } else if (res.data.code == 1) {
              _this.$message({
                showClose: true,
                message: res.data.msg,
                type: "success",
              });
<<<<<<< HEAD
              localStorage.setItem("username", this.ruleForm.name);
              //登陆成功后的跳转
=======
              localStorage.setItem("nickname", res.data.nickname);
              //登陆成功后的跳转
              if (res.data.type == "user") {
                _this.$router.push("/");
              } else {
                _this.$router.push("/admin");
              }
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
            }
          });
        } else {
          console.log("提交错误");
          return false;
        }
      });
    },
<<<<<<< HEAD
=======
    //注册
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
    submitFormReg(formName) {
      this.$refs[formName].validate((valid) => {
        let _this = this;
        if (valid) {
          this.$http
            .post("reg", {
<<<<<<< HEAD
=======
              nickname: this.ruleForm.nickname,
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
              username: this.ruleForm.namereg,
              passwd: this.ruleForm.pass,
            })
            .then(function (res) {
<<<<<<< HEAD
              if (res.data.code == -1) {
=======
              if (res.data.code == -2) {
                _this.$message({
                  showClose: true,
                  message: res.data.msg,
                  type: "error",
                });
              } else if (res.data.code == -1) {
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
                _this.$message({
                  showClose: true,
                  message: res.data.msg,
                  type: "error",
                });
              } else if (res.data.code == 1) {
                _this.$message({
                  showClose: true,
                  message: res.data.msg,
                  type: "success",
                });
<<<<<<< HEAD
                this.activeName = "first";
=======
                location.reload();
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
              }
            });
        } else {
          console.log("error!");
          return false;
        }
      });
    },
  },
};
</script>

<<<<<<< HEAD
<style scopes>
.abc{
=======
<style>
.all {
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
  background-color: rgb(247, 247, 247);
}
.top {
  width: 100%;
  height: 80px;
  background-color: white;
}
#toplogo {
  margin: 13px 0px 0px -650px;
}
#leftimg {
  margin: 30px;
  width: 500px;
  height: 350px;
}
.main {
  display: flex;
  justify-content: center;
  margin: 67px 0px 0px;
}
.lr {
  width: 390px;
  height: 380px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.form {
  margin: 40px;
}
.form1 {
<<<<<<< HEAD
  margin: 25px;
=======
  margin: 10px;
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
}
.btn {
  margin: 35px 0 0 -35px;
}
.btnlogin {
  width: 260px;
  height: 37px;
  background-color: rgb(247, 177, 46);
  border: 1px solid rgb(247, 177, 46);
}
<<<<<<< HEAD
=======
.btnReg {
  width: 260px;
  height: 37px;
  background-color: rgb(247, 177, 46);
  border: 1px solid rgb(247, 177, 46);
  margin-left: 15px;
}
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
.bottom {
  margin: 40px;
  font-size: 12px;
  text-align: center;
}

.toReg {
  font-size: 14px;
  margin: 20px;
  float: right;
}

.login-input input {
  width: 270px;
  margin: 45px 0px 0px 60px;
  height: 35px;
  font-size: 14px;
  border-style: none none solid none; /*上右下左*/
<<<<<<< HEAD
=======
  background-color: rgb(247, 247, 247);
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
}
.login-input input[name="cod"] {
  width: 155px;
}
.login-input input:focus {
  outline: #c2beb8 solid 2px;
}
.login-input .getverif {
<<<<<<< HEAD
  margin-left:15px;
=======
  margin-left: 15px;
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
  top: 91px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}
.login-input .forget a {
  float: right;
  color: #fe8c00;
  font-size: 12px;
}
.codebtn {
  width: 260px;
  height: 37px;
  margin: 55px 0px 0px 65px;
  background-color: rgb(247, 177, 46);
  border: 1px solid rgb(247, 177, 46);
}
</style>