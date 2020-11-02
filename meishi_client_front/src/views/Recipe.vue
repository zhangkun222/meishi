<template>
  <div>
    <div class="recipes-page">
      <div class="recipes">
        <div>
          <div class="recipes-top">
            <h1>全部食谱</h1>
            <div class="cranking">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo rankstyle"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-menu-item class="rankstyle" index="1"
                  >综合最佳</el-menu-item
                >
                <el-menu-item class="rankstyle" index="2"
                  >收藏最多</el-menu-item
                >
                <el-menu-item class="rankstyle" index="3"
                  >浏览最多</el-menu-item
                >
              </el-menu>
              <div class="top-border"></div>
            </div>
          </div>
          <!-- 菜谱 -->
          <div class="menu">
            <ul>
              <!-- 每个 -->
              <li class="menu-every" v-for="(item, i) in recipemsg" :key="i">
                <router-link :to="recipe + '?rid=' + item.rid">
                  <div class="image">
                    <img :src="item.cover" alt="" />
                  </div>
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="desc">
                    {{ item.pdesc }}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- 翻页 -->
          <div class="page">
            <div class="btn">分页</div>
            <div class="changePage" @click="changeList">
              <button
                type="button"
                :class="{ active: pagenum == 1 }"
                class="activecurrent"
              >
                1
              </button>
              <button
                type="button"
                :class="{ active: pagenum == 2 }"
                class="activecurrent"
              >
                2
              </button>
              <button
                type="button"
                :class="{ active: pagenum == 3 }"
                class="activecurrent"
              >
                3
              </button>
              <button
                type="button"
                :class="{ active: pagenum == 4 }"
                class="activecurrent"
              >
                4
              </button>
              <button
                type="button"
                :class="{ active: pagenum == 5 }"
                class="activecurrent"
              >
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: "/Recipe/recipe_desc",
      activeIndex: "1",
      pagenum: 1,
      recipemsg: [],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // if (key==2) {
      // }
    },
    // 分页
    changeList(e) {
      switch (e.target.innerHTML.trim()) {
        case e.target.innerHTML.trim():
          this.pagenum = e.target.innerHTML;
          break;
      }
    },
  },
  created() {
    // 点击图片跳转到详情页
    this.$http
      .post("/getAllMenu")
      .then((response) => {
        // console.log(response.data);
        this.recipemsg = response.data;
        switch (this.activeIndex) {
          case "2":
            this.recipemsg.sort((m, n) => {
              return  m.rid-n.rid ;
            });
            // console.log(this.recipemsg);
            break;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.page {
  text-align: center;
  width: 500px;
  margin: 0 auto;
  & > .btn {
    padding: 20px;
  }
  & > .changePage {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
[v-cloak] {
  display: none;
}
// 公用disflex垂直水平样式
@mixin disflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.recipes-page {
  width: 100%;
  & > .recipes {
    margin: 0 auto;
    width: 960px;
    height: 1475px;
  }
}
.cchange {
  border-bottom: 5px solid #d8316c;
  border-radius: 5px;
}
// 顶部
.recipes-top {
  width: 960px;
  height: 175px;
  & > .cranking {
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 960px;
    padding: 0 230px 20px;
    box-sizing: border-box;
    border-bottom: 2px solid #eee;
  }
}
element.style {
  background-color: white !important;
}
.rankstyle {
  background-color: white !important;
  & > .el-menu-item {
    font-size: 17px;
    color: #272b2c !important;
  }
}
.el-menu.el-menu--horizontal {
  border: none;
  & > .el-menu-item.is-active {
    border-bottom: 5px solid rgb(255, 208, 75);
    border-radius: 3px;
  }
}
// 食谱
.menu {
  margin-top: 40px;
  & > ul {
    @include disflex;
    flex-wrap: wrap;
    & > .menu-every {
      margin-top: 20px;
      width: 227px;
      height: 210px;
      & > a {
        display: block;
        width: 100%;
        height: 100%;
        & > .title {
          margin-top: 10px;
          width: 220px;
          height: 20px;
          line-height: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 17px;
          color: #272b2c;
          font-weight: 600;
        }
        & > .desc {
          width: 220px;
          height: 20px;
          line-height: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 14px;
          color: rgb(196, 196, 196);
          color: #272b2c;
        }
        &:hover img {
          transition: transform 0.5s ease-out;
          transform: scale(1.1);
        }
        & > .image {
          width: 227px;
          height: 152px;
          border-radius: 10px;
          overflow: hidden;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
// 分页按钮
.activecurrent {
  border: 0px;
  width: 50px;
  height: 50px;
  background-color: rgb(235, 102, 49);
  border-radius: 360px;
  color: rgb(255, 247, 247);
  line-height: 50px;
}
.active {
  background-color: orange;
  font-weight: 600;
}
</style>