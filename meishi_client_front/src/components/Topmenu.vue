<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">关于</el-menu-item>
      <el-menu-item index="4">登录</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      var goto = "/";
      switch (key) {
        case '1':
          goto = "/";
          break;
        case '3':
          goto = "/about";
          break;
        case '4':
          goto = "/user";
          break;
        default:
          break;
      }
      if (goto!==this.$route.fullPath) {
          this.$router.push(goto)
          this.activeIndex=key
      }else{
          location.reload()
      }
    },
  },
  created(){
    switch (this.$route.fullPath) {
      case '/about':
        this.activeIndex='3';
        break;
        case '/user':
        this.activeIndex='4';
        break;
      default:
        break;
    }
  }
};
</script>
//scoped 实现原理:为模板template 样式style 选择器加上随机码属性
<style scoped>
.nav {
  margin: 0 auto;
  width: 300px;
  background: red;
}
</style>