<template>
  <div>
    <div>
      <div class="recipe-desc">
        <div class="top-title">
          <span class="title-back">食谱</span> ·
          <span class="menu-title">蒜蓉粉丝蒸龙利鱼</span>
        </div>
        <div class="recipecontent">
          <!-- 左边信息 -->
          <div class="recipe_desc_left">
            <div class="coverimg">
              <img :src="cover[0]" alt="" />
            </div>
            <div class="title">
              <div>蒜蓉粉丝蒸龙利鱼</div>
            </div>
            <!-- tag 时间 口味 -->
            <div class="desc-option">
              <div class="option-left">
                <ul>
                  <li class="tag">
                    <img src="@/assets/img/eattag.png" alt="" />
                    <div>普通</div>
                  </li>
                  <li class="time">
                    <img src="@/assets/img/time.png" alt="" />
                    <div>300分钟</div>
                  </li>

                  <li class="taste">
                    <img src="@/assets/img/taste.png" alt="" />
                    <div>咸鲜鲜嫩</div>
                  </li>
                </ul>
              </div>
              <div class="option-right">
                <ul>
                  <li class="applic">
                    <img src="@/assets/img/phone.png" alt="" />
                    <div>App</div>
                  </li>
                  <li class="share">
                    <img src="@/assets/img/share.png" alt="" />
                    <div>分享</div>
                  </li>

                  <li class="like">
                    <i class="el-icon-star-off "  @click="like"></i>
                    <div>收藏</div>
                  </li>
                </ul>
              </div>

              <div></div>
            </div>
            <!-- 作者和美食简介 -->
            <div class="auther_desc">
              <!-- 头像昵称 -->
              <div class="auther_head">
                <img :src="head[0]" alt="" />
                <span>2345678</span>
              </div>
              <!-- 简介 -->
              <div class="desc">
                龙利鱼是深海鱼的一种，它不仅营养丰富，脂肪含量也非常低，含有不饱和脂肪酸，
                经常食用可以美容养颜、提高免疫力。龙利鱼的口感嫩滑鲜美，而且没有鱼刺，
                适合各种煎、炸、蒸、煮的烹饪方式。用龙利鱼搭配粉丝和金针菇蒸食，
                味道又鲜又嫩，营养成分还不流失，老少皆宜！
              </div>
            </div>
            <!-- 食材清单 -->
            <div class="detail-food">
              <div class="detail-food-title">食材清单</div>
              <div>
                <ul>
                  <li
                    class="food_many"
                    v-for="(items, index) in foodmany"
                    :key="index"
                  >
                    <div class="food">{{ items.food }}</div>
                    <div class="many">{{ items.many }}</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 制作步骤 -->
            <div class="food_step">
              <div class="step-title">制作步骤</div>
              <div class="step-every">
                <ul v-for="(stepitem, index) in step" :key="index">
                  <li class="steps">
                    <!-- 步骤几 -->
                    <div class="stepnum">{{ stepitem.stepnum }}</div>
                    <!-- 步骤说明 -->
                    <div class="explain">
                      {{ stepitem.explain }}
                    </div>
                  </li>
                  <li>
                    <img :src="stepitem.img" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <!-- 小贴士 -->
            <div class="small_tips">
              <div class="tips">小贴士</div>
              <div></div>
              <span
                class="tips_num"
                v-for="(tipsitems, index) in tips"
                :key="index"
              >
                {{ tipsitems }}
              </span>
            </div>
            <!-- 评论 -->
            <div class="comment">
              <div class="comment-title">评论</div>
              <div class="comm-content">
                <textarea
                  name="text"
                  id=""
                  cols="90"
                  rows="20"
                  placeholder="输入文字发表你的评论 "
                  v-model="comment"
                ></textarea>
                <button type="button" @click="sendcomment">发布评论</button>
              </div>
              <div>{{ comment }}</div>
              <div class="com" v-for="(items, index) in user" :key="index">
                <div class="user-comment">
                  <div class="commenthead">
                    <!-- 头像 -->
                    <img :src="items.commentimghead" alt="" />
                  </div>
                  <div class="commentall">
                    <div class="utime">
                      <!-- 作者昵称 -->
                      <div class="usern">{{ items.commentname }}</div>
                      <!-- 回复时间 -->
                      <div class="times">20:20:02</div>
                    </div>
                    <div class="reply">回复</div>
                  </div>
                </div>
                <!-- 回复内容 -->
                <span class="content">{{ items.commentcontent }}</span>
              </div>
            </div>
            <div class="more">加载更多</div>
          </div>
          <!-- 右边信息 -->
          <div class="recipe_desc_right">
            <div class="recipe-right">
              <!-- 点击跳转到商城 -->
              <div class="shop-top" @click="jumpShop">
                <img
                  src="https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191119/PiJMxf4TRh.jpg?x-oss-process=image/crop,x_22,y_14,w_3976,h_2652"
                  alt=""
                />
              </div>
              <div class="pageview_top">
                <div class="hot-search">热门搜索</div>
                <div class="msgall">
                  <div class="msg" v-for="(items, i) in recipehot" :key="i" @click="jumpanywhere">
                    <img :src="items.recipecover" alt="" />
                    <div class="title">{{ items.title }}</div>
                    <div class="desc">{{ items.desc }}</div>
                  </div>
                </div>
                <div class="tags">
                  <div class="tag" v-for="(hotitems, i) in hotTags" :key="i">
                    {{ hotitems }}
                  </div>
                </div>
              </div>
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
  data: function () {
    return {
      foodmany: [
        { food: "姜", many: "400克" },
        { food: "鱼3333", many: "500克" },
        { food: "fgfees", many: "22克" },
        { food: "bd", many: "400克" },
        { food: "34", many: "400克" },
        { food: "fre", many: "400克" },
        { food: "rgrt", many: "400克" },
      ],
      // 步骤
      step: [
        {
          stepnum: "步骤一",
          explain: `
           将粉丝放入容器中，加入热水浸泡变软。
          `,
          img: `https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191008/jBRE4BFCAn.jpg?x-oss-process=image/crop,x_9,y_9,w_2820,h_1880`,
        },
        {
          stepnum: "步骤二",
          explain: `
           将粉丝放入容器中，加入热水浸泡变软。
          `,
          img: `https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191008/jBRE4BFCAn.jpg?x-oss-process=image/crop,x_9,y_9,w_2820,h_1880`,
        },
        {
          stepnum: "步骤三",
          explain: `
           将粉丝放入容器中，加入热水浸泡变软。
          `,
          img: `https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191008/jBRE4BFCAn.jpg?x-oss-process=image/crop,x_9,y_9,w_2820,h_1880`,
        },
        {
          stepnum: "步骤四",
          explain: `
           将粉丝放入容器中，加入热水浸泡变软。
          `,
          img: `https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191008/jBRE4BFCAn.jpg?x-oss-process=image/crop,x_9,y_9,w_2820,h_1880`,
        },
      ],
      head: [
        `http://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20171023/1508763274245_267X356.jpg?x-oss-process=image/crop,x_0,y_23,w_266,h_266`,
      ],
      cover: [
        `https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191008/rYnKJFSKWR.jpg?x-oss-process=image/crop,x_9,y_9,w_2820,h_1880`,
      ],
      tips: [
        `
         1.鱼类蒸煮时间不必太久，以免口感过于老了。
       `,
        `
         2.调味料可以按照个人口味调配，不喜欢麻辣味道的就把花椒和小米椒省略。
        `,
      ],
      comment: "",
      user: [
        {
          // commenttime: `${new Data}`,
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "哈哈哈哈哈哈哈哈哈哈",
        },
        {
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "sdfhtyuk64y532refgdfbc哈哈哈哈",
        },
        {
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "这里萨尔为23456789o78ikyhjmnbgvf哈哈哈",
        },
      ],
      sendmsg: {
        commentname: this.$store.state.user.name,
        commentimghead: this.$store.state.user.avatar,
        commentcontent: "",
      },
      // 热门;
      recipehot: [
        {
          title: "蒜蓉粉丝蒸龙利鱼",
          desc:
            "秋冬季节正是吃羊肉的大好时节，毕竟羊肉属温性，正好可以滋补身体。用羊肉搭配白萝卜，那更是极品搭配呀！因为民间常有“冬吃萝卜夏吃姜不劳医生开处方”的谚语。秋冬季节，很难找出羊肉和白萝卜之外，还有什么更完美的搭档了。",
          recipecover:
            "https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191119/PiJMxf4TRh.jpg?x-oss-process=image/crop,x_22,y_14,w_3976,h_2652",
          recipeauthor: "辛墨墨",
          taste: "咸味",
          time: "30分钟",
          type: "普通",
        },
        {
          title: "蒜蓉粉丝蒸龙利鱼",
          desc:
            "秋冬季节正是吃羊肉的大好时节，毕竟羊肉属温性，正好可以滋补身体。用羊肉搭配白萝卜，那更是极品搭配呀！因为民间常有“冬吃萝卜夏吃姜不劳医生开处方”的谚语。秋冬季节，很难找出羊肉和白萝卜之外，还有什么更完美的搭档了。",
          recipecover:
            "https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191119/PiJMxf4TRh.jpg?x-oss-process=image/crop,x_22,y_14,w_3976,h_2652",
          recipeauthor: "辛墨墨",
          taste: "咸味",
          time: "30分钟",
          type: "普通",
        },
        {
          title: "蒜蓉粉丝蒸龙利鱼",
          desc:
            "秋冬季节正是吃羊肉的大好时节，毕竟羊肉属温性，正好可以滋补身体。用羊肉搭配白萝卜，那更是极品搭配呀！因为民间常有“冬吃萝卜夏吃姜不劳医生开处方”的谚语。秋冬季节，很难找出羊肉和白萝卜之外，还有什么更完美的搭档了。",
          recipecover:
            "https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191119/PiJMxf4TRh.jpg?x-oss-process=image/crop,x_22,y_14,w_3976,h_2652",
          recipeauthor: "辛墨墨",
          taste: "咸味",
          time: "30分钟",
          type: "普通",
        },
        {
          title: "蒜蓉粉丝蒸龙利鱼",
          desc:
            "秋冬季节正是吃羊肉的大好时节，毕竟羊肉属温性，正好可以滋补身体。用羊肉搭配白萝卜，那更是极品搭配呀！因为民间常有“冬吃萝卜夏吃姜不劳医生开处方”的谚语。秋冬季节，很难找出羊肉和白萝卜之外，还有什么更完美的搭档了。",
          recipecover:
            "https://app-file.beitaichufang.com/img/310636AF348FC3F27D7F7C2040807A97/20191119/PiJMxf4TRh.jpg?x-oss-process=image/crop,x_22,y_14,w_3976,h_2652",
          recipeauthor: "辛墨墨",
          taste: "咸味",
          time: "30分钟",
          type: "普通",
        },
      ],
      // 热门Tag
      hotTags: ["火锅", "土豆", "川菜", "串", "火锅"],

    };
  },
  
  created() {
    console.log(this);
  },
  methods: {
    sendcomment() {
      this.sendmsg.commentcontent = "11111111111111";
      this.user.push(this.sendmsg);
    },
    // 收藏
    like(e){
         e.target.classList.toggle('el-icon-star-on');
    },
    // 跳转至商城
    jumpShop(){
      this.$router.push("/shop");
    },
    // 热门内容跳转传值
    jumpanywhere(){
       console.log(this.$router.push("/Recipe/recipe_desc?kw=1"));
    },
     watch: {
    //1、 路由传参方式一query，路由地址上拼接参数字段及参数值
    // "$route.query.kw"() {
    //   // 路由切换不在创造时，监听路由参数的改变来获取参数
    //   console.log(this.$route.query.kw);
    //   this.shopping = this.$route.query.kw;
    // },
    //2、 路由传参方式二params
    "$route.params.wd"() {
      console.log(this.$route.params.wd);
      this.shopping = this.$route.params.wd;
      console.log(this.$route);
    },
  },
  created() {
    // 路由传参方式一query，路由地址上拼接参数字段及参数值
    //组件初始化获取导航参数
    // console.log(this.$route.query.kw);
    // this.shopping=this.$route.query.kw

    //2、 路由传参方式二params
    this.shopping = this.$route.params.wd;
    // console.log(this.$route);
  },
  },
};
</script>

<style lang="scss">
.like{
  &>i{
    font-size:28px
  }

}
a {
  list-style: none;
}
.more {
  cursor: pointer;
  padding: 30px 0;
  font-size: 17px;
  color: #d8316c;
  font-weight: 800;
  text-align: center;
  padding: 50px 0;
}
@mixin disflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li {
  list-style: none;
}
.recipe-desc {
  width: 960px;
  margin: 122px auto 0;
  & > .top-title {
    font-family: "PingFangSC", "Helvetica-Light", arial, sans-serif;
    height: 50px;
    line-height: 50px;
    & > .title-back {
      font-size: 17px;
      color: #d8316c;
      font-weight: 800;
      cursor: pointer;
    }
    & > .menu-title {
      font-size: 17px;
      color: #272b2c;
    }
  }
  & > .recipecontent {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // 左边
    & > .recipe_desc_left {
      width: 650px;
      & > .coverimg {
        width: 650px;
        height: 443px;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > .title {
        font-size: 24px;
        width: 100%;
        color: #272b2c;
        font-weight: 800;
        padding: 30px 455px 20px 0;
        box-sizing: border-box;
      }
      & > .desc-option {
        @include disflex;
        margin-bottom: 30px;
        & > .option-left,
        & > .option-right {
          & > ul {
            display: flex;
            align-items: center;
            width: 100%;
          }
          & > ul > li {
            @include disflex;
            margin-left: 10px;
            font-size: 17px;
            color: #656969;
            & > img {
              width: 22px;
              height: 22px;
            }
          }
        }
        & > .option-right {
          width: 35%;
        }
      }
      & > .auther_desc {
        border-bottom: 1px solid #eeeeee;
        padding: 30px 0 30px 0;
        width: 650px;
        height: 156px;
        & > .auther_head {
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          & > img {
            width: 50px;
            height: 50px;
            border-radius: 360px;
          }
          & > span {
            margin-left: 30px;
            font-size: 17px;
            color: #272b2c;
          }
        }
        & > .desc {
          margin-top: 20px;
          width: 100%;
          font-size: 17px;
          color: #272b2c;
          line-height: 24px;
          text-align: justify;
        }
      }
      & > .detail-food {
        width: 100%;
        & > .detail-food-title {
          width: 80px;
          font-size: 20px;
          color: #272b2c;
          font-weight: 800;
          padding-top: 30px;
          padding-bottom: 15px;
        }
        & > div > ul {
          width: 100%;
          @include disflex;
          flex-wrap: wrap;
          & > .food_many {
            & > .food {
              width: 100px;
            }
            @include disflex;
            & > div {
              margin-right: 100px;
              margin-top: 10px;
            }
          }
        }
      }
      & > .food_step {
        width: 100%;
        & > .step-title {
          width: 80px;
          font-size: 20px;
          color: #272b2c;
          font-weight: 800;
          padding-top: 30px;
          padding-bottom: 15px;
        }
        & > .step-every {
          & > ul {
            @include disflex;
            & > li {
              margin-top: 30px;
              font-size: 17px;
              color: #272b2c;
              & > .explain {
                margin-top: 5px;
              }
              & > .stepnum {
                font-weight: 600;
              }
              & > img {
                width: 360px;
                height: 240px;
              }
            }
          }
        }
      }
      // 小贴士
      & > .small_tips {
        width: 100%;
        & > .tips {
          width: 62px;
          font-size: 20px;
          color: #272b2c;
          font-weight: 800;
          padding-top: 40px;
          padding-bottom: 15px;
        }
        & > .tips_num {
          font-size: 100%;
          font-weight: normal;
          vertical-align: baseline;
        }
      }
      & > .comment {
        & > .comment-title {
          width: 43px;
          font-size: 20px;
          color: #272b2c;
          font-weight: 800;
          padding-top: 40px;
          padding-bottom: 15px;
        }
        & > .comm-content {
          & > textarea [name="text"] {
            width: 300px;
            display: inline-block;
            height: 300px;
            padding: 20px 24px;
            font-size: 16px;
            color: #272b2c;
            font-size: 18px;
            box-sizing: border-box;
            &:focus {
              border: 1px solid rgba(216, 49, 108);
            }
          }
          & > button[type="button"] {
            cursor: pointer;
            width: 100px;
            height: 36px;
            background: #d8316c;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 36px;
            border: none;
            border-radius: 3px;
            float: right;
          }
        }
        & > .com {
          border-bottom: 1px solid #eee;
          margin-top: 50px;
          & > .content {
            font-size: 100%;
            font-weight: normal;
            vertical-align: baseline;
          }
          & > .user-comment {
            display: flex;
            & > .commenthead {
              width: 50px;
              & > img {
                width: 100%;
                height: 50px;
                border-radius: 50%;
              }
            }

            & > .commentall {
              display: flex;
              justify-content: space-between;
              align-items: center;
              & > .reply {
                cursor: pointer;
                position: relative;
                font-size: 14px;
                color: #d8316c;
                font-weight: 500;
                margin-left: 20px;
              }
              & > .utime {
                & > .usern {
                  height: 28px;
                  line-height: 28px;
                  font-size: 17px;
                  color: #272b2c;
                  font-weight: 500;
                }
                & > .times {
                  height: 20px;
                  line-height: 20px;
                  font-size: 14px;
                  color: #656969;
                  font-weight: 300;
                  margin-top: 2px;
                }
              }
            }
          }
        }
      }
    }

    // 右边
    & > .recipe_desc_right {
      width: 249px;
      & > .recipe-right {
        width: 100%;
        & > .shop-top {
          font-weight: 600px;
          width: 249px;
          height: 166px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > .pageview_top {
          & > .hot-search {
            margin-top: 20px;
            font-size: 20px;
            color: #272b2c;
            margin-bottom: 20px;
            font-weight: 800;
          }
          & > div {
            & > .msg {
              & > .desc {
                text-overflow: ellipsis;
                font-size: 14px;
                color: #272b2c;
                font-size: 300;
                line-height: 20px;
                height: 40px;
                margin-top: 6px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                font-weight: 300;
              }
              & > .title {
                font-size: 17px;
                color: #272b2c;
                margin-top: 12px;
                height: 20px;
                line-height: 24px;
                font-weight: 800;
              }

              & > img {
                width: 249px;
                height: 166px;
                margin-top: 50px;
              }
            }
          }
          & > .tags {
            margin-top: 50px;
            @include disflex;
            flex-wrap: wrap;
            & > .tag {
              margin-top: 10px;
              width: 70px;
              line-height: 30px;
              text-align: center;
              border-radius: 5px;
              height: 30px;
              border: 1px solid rgb(61, 61, 61);
            }
          }
        }
      }
    }
  }
}
.option-left {
  width: 65%;
}
.option-right {
  width: 35%;
}
</style>