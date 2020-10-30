<template>
  <div>
    <div class="top">
      <img :src="logo" alt="" id="toplogo" />
    </div>

    <div class="main">
      <img :src="leftimg" alt="" id="leftimg" />
      <div class="lr">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
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
                <el-form-item label="用户名" prop="name">
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
              </el-form>
            </div>
          </el-tab-pane>
          <!--  -->
          <el-tab-pane label="注册" name="second">
            <div class="form1">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleFormreg"
                label-width="80px"
                class="demo-ruleForm"
                size="large"
              >
                <el-form-item label="用户名" prop="namereg">
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
                      class="btnlogin"
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
      <router-link to="">去到首页</router-link>|
      <router-link to="">关于我们</router-link>|
      <router-link to="">意见反馈</router-link>|
      <router-link to="">菜谱大全</router-link>|
      <router-link to="">购物商城</router-link>
    </div>
  </div>
</template>

<script>
import logoimg from "@/assets/img/logo.png";
import left from "@/assets/img/logoleft.png";
export default {
  data() {
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
      activeName: "first",
      ruleForm: {
        name: "",
        passwd: "",
        namereg: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
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
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
              localStorage.setItem('username',this.ruleForm.name);
              //登陆成功后的跳转
            }
          });
        } else {
          console.log("提交错误");
          return false;
        }
      });
    },
    submitFormReg(formName) {
      this.$refs[formName].validate((valid) => {
        let _this = this;
        if (valid) {
          this.$http
            .post("reg", {
              username: this.ruleForm.namereg,
              passwd: this.ruleForm.pass,
            })
            .then(function (res) {
              if (res.data.code == -1) {
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
                location.reload();
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

<style>
* {
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
  margin: 25px;
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
.bottom {
  margin: 40px;
  font-size: 12px;
}
</style>