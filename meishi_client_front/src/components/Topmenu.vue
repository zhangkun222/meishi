<template>
  <div style="height: 81px; position: fixed; z-index: 999" id="topnav">
    <!-- 顶部公共导航 -->
    <div class="nav">
      <div class="nav-center">
        <!-- 小图片 -->
        <div class="indeximg"><img :src="datasrc||logo" /></div>
        <!--  搜索-->
        <div class="search">
          <input
            type="text"
            class="nav-search-input"
            placeholder="搜索食谱/食材"
            v-model="ser"
            @change="search"
          />
          <div class="nav-search-btn" title="搜索"></div>
        </div>
        <!-- 右边导航部分 -->
        <div class="nav-items">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1" class="nav-link">首页</el-menu-item>
            <el-menu-item index="2" class="nav-link">食谱</el-menu-item>
            <el-menu-item index="3" class="nav-link">动漫</el-menu-item>
            <el-menu-item index="4" class="nav-link">发布菜单</el-menu-item>
            <el-menu-item index="5" class="nav-link" @click="toLogin"
              >登录|注册</el-menu-item
            >
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top_logo from "@/assets/top-logo.png";
import logo from "@/assets/logo.png";
export default {
  props: ["datasrc",logo],
  data() {
    return {
      ser: "",
      // activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    handleSelect(key, keyPath) {
      console.dir(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push("/");
          this.activeIndex2 = 1;
          break;
        case "2":
          this.$router.push("/");
          this.activeIndex2 = 2;
          break;
        case "3":
          this.$router.push("/anime_recipe");
          this.activeIndex2 = 3;
          break;
        case "4":
          if (localStorage.getItem('uid')) {
            this.$router.push("/addainme");
          } else {
            this.$router.push("/login");
            this.activeIndex2 = 5;
          }
          break;
        case "5":
          this.$router.push("/login");
          this.activeIndex2 = 5;
          break;
        default:
          break;
      }
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
  watch: {
    ser: () => {
      console.log("search");
      let titie = this.ser;
      this.$http.get(`/getAnime?titie=${titie}`).then((res) => {
        console.log(res.data[0]);
        this.value = res.data[0];
      });
    },
  },
};
</script>

<style lang="scss" scopes>
@mixin transparent {
  background-color: transparent;
}
#topnav {
  width: 100%;
}
.nav {
  padding: 0 0;
  position: fixed;
  top: 0;
  box-shadow: 0px 3px 5px #c4c3c3;
  z-index: 99;
  width: 100%;
  height: 80px;
  background-color: transparent;
  // background: rgba(180, 71, 194, 0.8);
  background-clip: padding-box;
  border-bottom: 1px solid transparent;
  & > .nav-center {
    width: 960px;
    height: 80px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    margin: 0 auto;
    // background-color: grey;
    position: relative;
    font-size: 14px;
    // color: #272b2c;
    // logo图
    & > .indeximg {
      width: 111px;
      height: 60px;
      margin-right: 10px;
      margin-top: 15px;
      & > img {
        width: 100%;
        height: 80%;
        cursor: pointer;
      }
    }
    // 搜索框
    & > .search {
      width: 340px;
      // background-color: pink;
      overflow: hidden;
      margin: 18px 0 14px 40px;
      border-radius: 100px;
      display: flex;
      box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.06);
      & > .nav-search-input {
        width: 345px;
        cursor: text;
        border: transparent;
        padding: 14px 0 14px 20px;
        font: 400 14px Arial;
        flex: 1;
        height: 20px;
        outline: none;
        background: transparent;
        // color: #272b2c;
      }
      & > .nav-search-btn {
        cursor: pointer;
        flex: 0 52px;
        height: 48px;
        padding-right: 10px;
        background: url("../assets/img/searchbtn.png") no-repeat 15px/18px;
      }
    }
    //右边导航栏
  }
}

.nav-items {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  @include transparent;
  font-weight: bolder;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
  @include transparent;
}
.el-menu {
  @include transparent;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>