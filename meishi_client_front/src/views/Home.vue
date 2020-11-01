<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="slideshow">
      <div>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in bannerArr" :key="item.id">
            <h3>
              <img :src="item.img" />
              <div class="slides-title">一日三餐<br />食幸福，享生活</div>
              <div class="slides-intro">
                了解 “<span>{{ item.name }}</span
                >” 的做法
              </div>
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="banner-searchbox">
        <input
          type="text"
          placeholder="搜索食谱/食材"
          autofocus="autofocus"
          class="banner-searchbox-input"
        />
        <div title="搜索" class="banner-searchbox-btn">搜索</div>
      </div>
    </div>
    <!--slideshow -->
    <div class="indexs" style="min-height: 540px">
      <div class="slideshow-indexs"></div>
      <div class="indexs-containers">
        <!-- 一日三餐 -->
        <div>
          <div class="three-meals">
            <div class="meals-title">
              一日三餐·
              <span v-show="a == 1">早上好</span>
              <span v-show="a == 2">中午好</span>
              <span v-show="a == 3">晚上好</span>
            </div>
            <div>
              <div class="meals-navigation" @click="Select">
                <div :class="{ active: mealnum == 1 }" class="navigation-item">
                  早餐
                </div>
                <div :class="{ active: mealnum == 2 }" class="navigation-item">
                  午餐
                </div>
                <div :class="{ active: mealnum == 3 }" class="navigation-item">
                  晚餐
                </div>
              </div>
            </div>
          </div>
          <!-- 1 -->
          <div class="mealsimg moni" v-if="moni" >
            <div class="imgarr" v-for="(items, index) in imgArr" :key="index">
              <div class="item-img"><img :src="items.img" /></div>
              <div class="item-title">
                {{ items.title }}
              </div>
              <div class="item-intro">
                {{ items.intro }}
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="mealsimg aft" v-if="aft">
            <div class="imgarr" v-for="(items, index) in imgArr" :key="index">
              <div class="item-img"><img :src="items.img" /></div>
              <div class="item-title">
                {{ items.title }}
              </div>
              <div class="item-intro">
                {{ items.intro }}
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="mealsimg eve" v-if="eve">
            <div class="imgarr" v-for="(items, index) in imgArr" :key="index">
              <div class="item-img"><img :src="items.img" /></div>
              <div class="item-title">
                {{ items.title }}
              </div>
              <div class="item-intro">
                {{ items.intro }}
              </div>
            </div>
          </div>
        </div>

        <!-- 组件info循环 -->
        <div v-for="(infos, index) in infoArr" :key="index">
          <div class="slideshow-indexs" style="margin-top: -22px"></div>
          <div class="three-meals">
            <div class="meals-title">{{ infos.titles }}</div>
            <div>
              <div class="meals-navigation">
                <div class="navigation-item" v-if="infos.infoitem">
                  {{ infos.infoitem }}
                </div>
              </div>
              <div class="mealsimg">
                <div
                  class="imgarr"
                  v-for="(items, index) in imgArr"
                  :key="index"
                >
                  <div class="item-img"><img :src="items.img" /></div>
                  <div class="item-title">
                    {{ items.title }}
                  </div>
                  <div class="item-intro">
                    {{ items.intro }}
                  </div>
                </div>
              </div>
            </div>
            <div class="floor-more" v-if="infos.more">{{ infos.more }}</div>
          </div>
        </div>

        <!-- app图片-->
        <div class="slideshow-indexs" style="margin-top: -30px"></div>
        <div class="three-meals">
          <img
            src="../assets/img/apperweima.png"
            style="width: 100%; height: 220px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";
import banner4 from "@/assets/img/banner4.jpg";
import menuimg from "@/assets/img/menu.png";

export default {
  data() {
    return {
      moni:1,
      aft:"",
      eve:"",
      a: 1,
      mealnum: 1,
      infoArr: [
        {
          titles: "探寻·烘焙之旅",
          infoitem: "美味且经过试作保障的烘焙食谱",
        },
        {
          titles: "一日三餐·杂志月刊",
          infoitem: "专业团队打造全世界销量靠前的家庭美食指南",
          more: "查看更多",
        },
        {
          titles: "一日三餐书店",
          infoitem: "为你打造美味家庭烹饪的通关秘籍",
          more: "查看更多",
        },
        {
          titles: "厨房故事",
        },
      ],
      imgArr: [
        {
          img: menuimg,
          title: "香脆芋头丝",
          intro: "吃的时候一口咬下去咔嚓脆卜卜，既细软，又酥脆，味道带有香辣味",
        },
        {
          img: menuimg,
          title: "香脆芋头丝",
          intro: "吃的时候一口咬下去咔嚓脆卜卜，既细软，又酥脆，味道带有香辣味",
        },
        {
          img: menuimg,
          title: "香脆芋头丝",
          intro: "吃的时候一口咬下去咔嚓脆卜卜，既细软，又酥脆，味道带有香辣味",
        },
        {
          img: menuimg,
          title: "香脆芋头丝",
          intro: "吃的时候一口咬下去咔嚓脆卜卜，既细软，又酥脆，味道带有香辣味",
        },
      ],
      bannerArr: [
        {
          img: banner1,
          name: "南瓜腰豆糕",
          id: 11,
        },
        {
          img: banner2,
          name: "提拉米苏",
          id: 22,
        },
        {
          img: banner3,
          name: "梭子蟹白菜汤",
          id: 33,
        },
        {
          img: banner4,
          name: "马蹄银耳羹",
          id: 44,
        },
      ],
    };
  },
  methods: {
    Select(e) {
      switch (e.target.innerHTML.trim()) {
        case "早餐":
          this.a = 1;
          this.mealnum = 1;
          this.moni=1;
          this.aft="";
          this.eve="";
          break;
        case "午餐":
          this.a = 2;
          this.mealnum = 2;
          this.moni="";
          this.aft=2;
          this.eve="";
          break;
        case "晚餐":
          this.a = 3;
          this.mealnum = 3;
          this.moni="";
          this.aft="";
          this.eve=3;
          break;
      }
      console.log(e.target.innerHTML.length);
    },
  },
  // name: "Home",
  // components: {
  //  Home
  // },
};
</script>

<style lang="scss">
.el-carousel__container {
  position: relative;
  height: 740px !important;
}
.slides-title {
  font-size: 60px;
  color: #fff;
  line-height: 66px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 182px;
  left: 50%;
  margin-left: -480px;
}
.slides-intro {
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: 334px;
  left: 50%;
  margin-left: -480px;
}
.indexs {
  width: 100%;
  height: 3000px;//整个高度
  background-color: white;
}
.slideshow-indexs {
  // background-color: pink;
  padding-bottom: 80px;
}
.banner-searchbox {
  position: absolute;
  z-index: 9;
  bottom: 177px;
  left: 50%;
  margin-left: -480px;
  top: 505px;
  height: 60px;
  width: 960px;
  border: 1px solid #eee;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  display: flex;
  background: #fff url(../assets/img/searchbtn.png) no-repeat 20px/19px;
}
.banner-searchbox-input {
  -webkit-box-flex: 1;
  flex: 1;
  padding: 19px 0;
  margin-left: 60px;
  height: 22px;
  line-height: 22px;
  outline: none;
  overflow: hidden;
  border: none;
  background-color: #fff;
}
.banner-searchbox-btn {
  cursor: pointer;
  -webkit-box-flex: 0;
  flex: 0 74px;
  font-size: 17px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  margin: 10px 20px;
  border-radius: 4px;
  background: #d8316c;
}
.indexs-containers {
  height: auto;
  margin: 0 auto;
  width: 960px;
  height: 2422px;
  background-color: rgb(245, 235, 244);
  & > .three-meals {
    position: relative;
    & > .meals-title {
      font-size: 24px;
      color: #272b2c;
      letter-spacing: -0.4px;
      // background-color: #fff;
      font-weight: 800;
    }
  }
}
.meals-navigation {
  margin-top: 6px;
  display: flex;
  height: 39px;
  // background-color: pink;
}
.navigation-item {
  position: relative;
  display: inline-block;
  padding: 10px 0;
  margin: 0 20px;
  font-size: 17px;
  color: #272b2c;
  // border-bottom: 2px solid #d8316c;
  font-weight: 500;
  // background-color: #fff;
}
.navigation-item:hover {
  cursor: pointer;
  color: #d8316c;
  // border-bottom: 2px solid #d8316c;
}
.active {
  border-bottom: 2px solid #d8316c;
}

.mealsimg {
  display: flex;
  height: 280px;
  width: 100%;
  justify-content: space-between;
  // background-color: #fff;
}
.meals-title {
  font-size: 24px;
  color: #272b2c;
  letter-spacing: -0.4px;
  font-weight: 800;
}
.imgarr {
  height: 100%;
  width: 228px;
  // background-color: pink;
}
.item-img {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  & > img {
    height: 228px;
    width: 228px;
  }
}

.item-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 17px;
  color: #272b2c;
  font-weight: 600;
}
.item-intro {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #272b2c;
  font-weight: 300;
}
.floor-more {
  cursor: pointer;
  width: 180px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 17px;
  color: #fff;
  font-weight: 500;
  background: #d8316c;
  border-radius: 5px;
  margin-top: 30px;
}
</style>