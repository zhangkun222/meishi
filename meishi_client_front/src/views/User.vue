<template>
  <div class="about">
    <top-menu></top-menu>
    <div class="mytabs">
      <!-- 标签页组件 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录表单" name="first">
          <!-- 登录表单 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passw">
              <el-input v-model="ruleForm.passw"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册表单" name="second">
          <!-- 注册表单 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passw">
              <el-input v-model="ruleForm.passw"></el-input>
            </el-form-item>
            <el-form-item label="确定密码" prop="passw">
              <el-input v-model="ruleForm.passw"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即注册</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let validatePassW = (rules, val, callBack) => {
      console.log("密码验证函数");
      console.log(val);

      let reg = /^(?=.*\d+)(?=.*[A-Za-z]+)(?=.*_+).{6,16}$/i;
      if (reg.test(val)) {
        callBack();
      } else {
        callBack(new Error("密码6~16位，且必须包含数字、字母、下划线"));
      }
    };

    return {
      activeName: "first",
      ruleForm: {
        name: "",
        passw: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        passw: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePassW, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message("登录成功 跳转到个人页面");
          this.$router.push("/self");
        } else {
          this.$message.error("用户名/密码格式不正确！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
     
      console.log(tab, event);
    },
  },
};
</script>

<style>
.mytabs {
  width: 400px;
  margin: 40px auto;
}
</style>