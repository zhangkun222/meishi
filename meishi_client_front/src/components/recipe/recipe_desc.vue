<template>
  <div>
    <div>
      <div class="recipe-desc">
        <div class="top-title">
          <span class="title-back">食谱</span> ·
          <span class="menu-title">{{ codesc.title }}</span>
        </div>
        <div class="recipecontent">
          <!-- 左边信息 -->
          <div class="recipe_desc_left">
            <div class="coverimg">
              <img :src="codesc.cover" alt="" />
            </div>
            <div class="title">
              <div>{{ codesc.title }}</div>
            </div>
            <!-- tag 时间 口味 -->
            <div class="desc-option">
              <div class="option-left">
                <ul>
                  <li class="tag">
                    <img src="@/assets/img/eattag.png" alt="" />
                    <div>{{ codesc.degree }}</div>
                  </li>
                  <li class="time">
                    <img src="@/assets/img/time.png" alt="" />
                    <div>{{ codesc.cooktime }}</div>
                  </li>

                  <li class="taste">
                    <img src="@/assets/img/taste.png" alt="" />
                    <div>{{ codesc.taste }}</div>
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
                    <i class="el-icon-star-off" @click="like"></i>
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
                <img :src="codesc.cover" alt="" />
                <span>{{ codesc.uid }}</span>
              </div>
              <!-- 简介 -->
              <div class="desc">
                {{ codesc.pdesc }}
              </div>
              <div class="bottomline"></div>
            </div>
            <!-- 食材清单 -->
            <div class="detail-food">
              <div class="detail-food-title">食材清单</div>
              <div>
                <ul>
                  <li class="food_many">
                    <div class="food">
                      <div v-for="(ifoodlist, index) in foodlist" :key="index">
                        {{ ifoodlist }}
                      </div>
                    </div>
                    <div class="many">
                      <div
                        v-for="(iamountlist, index) in amountlist"
                        :key="index"
                      >
                        {{ iamountlist }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 制作步骤 -->
            <div class="food_step">
              <div class="step-title">制作步骤</div>
              <div class="step-every">
                <ul v-for="(stepitem, index) in steps" :key="index">
                  <li class="steps">
                    <!-- 步骤说明 -->
                    <div class="explain">
                      {{ stepitem.stepcontent }}
                    </div>
                  </li>
                  <li>
                    <img :src="stepitem.cover" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <!-- 小贴士 -->
            <div class="small_tips">
              <div class="tips">小贴士</div>
              <div></div>
              <span class="tips_num">
                {{ codesc.tips }}
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
                  v-model="commentcon"
                ></textarea>
                <button type="button" @click="sendcomment">发布评论</button>
              </div>
              <input type="text" v-model="commentcon" />
              <div>{{ commentcon }}</div>
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
                      <div class="times">{{ items.addtime }}</div>
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
                <div class="shoplook">去商城康康</div>
                <img
                  src="https://cp1.douguo.com/upload/caiku/1/c/e/220x220_1c7941876ec01115f4d397fdffff8b2e.jpg"
                  alt=""
                />
              </div>
              <div class="pageview_top">
                <div class="hot-search">热门搜索</div>
                <div class="msgall">
                  <div
                    class="msg"
                    v-for="(items, i) in recipehot"
                    :key="i"
                    @click="jumpanywhere"
                  >
                    <img :src="items.cover" alt="" />
                    <div class="title">{{ items.title }}</div>
                    <div class="desc">{{ items.pdesc }}</div>
                  </div>
                </div>
                <div class="hottag">热门话题</div>
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
      foodmany: [{ foodlist: "", many: "" }],
      foodlist: [],
      amountlist: [],
      // 食谱页面跳转过来对应的信息
      codesc: {},
      // 食谱信息
      recipemsg: [],
      // 步骤
      steps: [],
      step: {
        stepcontent: "",
        // cover: "",
      },
      tips: [],
      comment: "",
      user: [
        {
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "哈哈哈哈哈哈哈哈哈哈",
          addtime: "Fri Oct 30 2020 11:20:09 GMT+0800 (中国标准时间)",
        },
        {
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "sdfhtyuk64y532refgdfbc哈哈哈哈",
          addtime: "Fri Oct 30 2020 11:20:09 GMT+0800 (中国标准时间)",
        },
        {
          commentname: "kwang",
          commentimghead:
            "https://app-file.beitaichufang.com/img/EE11CBB19052E40B07AAC0CA060C23EE/20200825/1598355946892_738X738.jpeg",
          commentcontent: "这里萨尔为23456789o78ikyhjmnbgvf哈哈哈",
          addtime: "Fri Oct 30 2020 11:20:09 GMT+0800 (中国标准时间)",
        },
      ],
      sendmsg: {
        // rid:1,
        commentname: this.$store.state.user.name,
        commentimghead: this.$store.state.user.avatar,
        commentcontent: "",
      },
      // 热门;
      recipehot: [],
      // 热门Tag
      hotTags: [],
      commentcon: "",
      username: "",
      rid: "",
      jump:"/Recipe/recipe_desc"
    };
  },
  methods: {
    sendcomment() {
      console.log(this.$store);
      this.sendmsg.commentcontent = "11111111111111";
      console.log(this.sendmsg);
      this.user.push(this.sendmsg);
    },
    // 收藏
    like(e) {
      e.target.classList.toggle("el-icon-star-on");
    },
    // 跳转至商城
    jumpShop() {
      this.$router.push("/shop");
    },
    // 热门内容跳转传值
    jumpanywhere() {
          // h.rid=this.$route.query.rid;
          // this.$router.push(`/recipe`); //recipe+'?rid='+item.rid
        // this.$router.push(this.jump+`?rid=`+hotTags[0].rid);
    },
    // 评论
    // /comment
    sendcomment(e) {
      console.log(e.target);
      // this.$http
      //   .get("/getComment", {
      //     rid: this.sendmsg.rid,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
  watch: {
    "$route.query.rid"() {
      // console.log(this.$route.query.rid);
      this.recipemsg = this.$route.query.rid;
    },
  },
  created() {
    console.log(this.$store._mutations.adminLogin);
    // console.log(this.$route.query.rid);
    this.codesc.rid = this.$route.query.rid;
    this.$http
      .post("/getAllMenu")
      .then((response) => {
        this.recipemsg = response.data;
        this.recipemsg.forEach((recipe) => {
          if (recipe.rid == this.$route.query.rid) {
            this.codesc = recipe;
            // 食物配料
            this.foodlist = this.codesc.foodlist.split(",");
            // 食物量
            this.amountlist = this.codesc.amountlist.split(",");
            // 步骤内容
            this.codesc.steps = recipe.steps;
            this.codesc.stepsImg = recipe.stepsImg;
            // console.log(this.codesc.stepsImg);
            let step = recipe.steps.split(",").forEach((step) => {
              this.codesc.step = {
                stepcontent: step,
                // cover: "",
              };
              this.step = this.codesc.step;
              this.steps.push(this.step);
            });
          }
        });
        // 根据热门推荐加tag
        // 热门内容根据综合进行推荐
        this.recipemsg.forEach((hot) => {
          if (hot.rid <= 6) {
            this.recipehot.push(hot);
            this.hotTags.push(hot.title.trim().slice(0, 2));
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // 评论
    this.$http
      .post("/getComment",  { rid: this.rid } )
      .then((response) => {
        console.log(111);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.like {
  & > i {
    font-size: 28px;
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
          border-bottom: 1px solid #eeeeee;
          padding-bottom: 15px;
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
          display: flex;
          justify-content: center;
          align-items: center;
          & > .food_many {
            width: 500px;
            display: flex;
            justify-content: space-around;
            & > .food,
            & > .many {
              & > div {
                padding-bottom: 5px;
              }
              width: 100px;
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
            margin-top: 75px;
            font-size: 20px;
            color: #272b2c;
            margin-bottom: -6px;
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
            @include disflex;
            flex-wrap: wrap;
            & > .tag {
              margin-top: 10px;
              width: 70px;
              line-height: 30px;
              text-align: center;
              border-radius: 5px;
              height: 30px;
              white-space: nowrap;
              text-emphasis: none;
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
.shoplook,
.hottag {
  font-size: 20px;
  color: #272b2c;
  font-weight: 800;
  padding: 0 0 20px 0;
}
.hottag {
  margin-top: 50px;
}
</style>