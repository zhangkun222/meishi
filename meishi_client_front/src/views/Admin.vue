<template>
  <div>
    <div class="top">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="toptitle" @click="backtoIndex"
          >一日三餐-后台管理</el-menu-item
        >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        
        <el-menu-item></el-menu-item><el-menu-item></el-menu-item
        ><el-menu-item></el-menu-item><el-menu-item></el-menu-item>
        <el-menu-item></el-menu-item><el-menu-item></el-menu-item
        ><el-menu-item></el-menu-item><el-menu-item></el-menu-item>
        <el-menu-item></el-menu-item><el-menu-item></el-menu-item
        ><el-menu-item></el-menu-item><el-menu-item></el-menu-item>
        <el-menu-item></el-menu-item><el-menu-item></el-menu-item>
        <el-submenu index="5">
          <template slot="title">欢迎回来，{{ nickname }}</template>
          <el-menu-item index="5-1">个人中心</el-menu-item>
          <el-menu-item index="5-2">切换账号</el-menu-item>
          <el-menu-item index="5-3" @click="backtoIndex">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <div class="left">
      <!-- 左边导航栏 -->
        <el-row class="tac">
          <el-col :span="4">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
             <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">食谱管理</span>
              </el-menu-item>
              <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>食谱管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-1">修改食谱</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
              
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>

              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
              </el-menu-item>
              <el-menu-item></el-menu-item><el-menu-item></el-menu-item
              ><el-menu-item></el-menu-item> <el-menu-item></el-menu-item
              ><el-menu-item></el-menu-item><el-menu-item></el-menu-item
              ><el-menu-item></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        </div>
      <!-- 右边 -->
      <div class="right">
          <recipe></recipe>
      </div>
  </div>
</template>

<script>
import recipe from '@/components/recipeBack.vue'
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      nickname: localStorage.getItem("nickname"),
    };
  },
  components:{
      recipe
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    backtoIndex() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.toptitle {
  font-size: 18px;
}

.right {
    margin: -600px 0px 0px 260px;
}
</style>