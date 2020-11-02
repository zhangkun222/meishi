<template>
  <div>
    <div class="footernav">
      <div class="footer-content">
        <!-- 底部上面部分内容 -->
        <div class="footer-upcon">
          <!-- 左边 -->
          <div class="footer-upcon-left">
            <div class="nav-logoicon">
              <div>
                <img src="@/assets/img/nav-logo.png" alt="" />
              </div>
              <div class="nav-icontitle">YRSC.COM</div>
              <img src="@/assets/img/weixin-icon.png" alt="" />
              <img src="@/assets/img/weibo-icon.png" alt="" />
              <img src="@/assets/img/phone-icon.png" alt="" />
            </div>
            <div class="nav-loginicon"></div>
          </div>
          <!-- 右边 -->
          <div class="footer-upcon-right">
            <ul class="allapc">
              <li class="about">
                <div class="about-title">关于一日三餐厨房</div>
                <div class="aboutend">
                  <div>了解一日三餐</div>
                  <div>团队介绍</div>
                  <div>美食专家</div>
                  <div>一日三餐星厨</div>
                  <div>加入我们</div>
                </div>
              </li>
              <li class="product">
                <div class="product-title">产品服务</div>
                <div class="producted">
                  <div>美食生活书刊</div>
                  <div>美食专家</div>
                  <div>Web&App</div>
                  <div>品质优选</div>
                </div>
              </li>
              <li class="contact">
                <div class="contact-title">联系我们</div>
                <div class="contacted">
                  <div>投稿</div>
                  <div>商务合作</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-down">
          <p>Copyright © 2020 一本正经股份有限公司 版权所有[88888888]</p>
          <p>一日三餐独家放送</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin disflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footernav {
  width: 100%;
  height: 360px;
  background-color: black;
  & > .footer-content {
    margin: 0 auto;
    width: 960px;
    height: 100%;
    background-color: rgb(0, 0, 0);
    & > .footer-upcon {
      border-bottom: 1px solid rgb(48, 44, 44);
      height: 279px;
      width: 100%;
      @include disflex;
      & > .footer-upcon-left {
        width: 137px;
        height: 156px;
        & > .nav-logoicon {
            &>img{
                margin-top: 5px;
                width: 36px;
                height: 36px;
            }
          & > .nav-icontitle {
            width: 100%;
            height: 50px;
            line-height: 50px;
          }
          & > div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-end;
            width: 137px;
            height: 50px;
            & > img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      & > .footer-upcon-right {
        & > .allapc {
          @include disflex;
          height: 156px;
          & > .about,
          & > .product,
          & > .contact {
            padding-left: 50px;
            width: 144px;
            height: 100%;
            font-size: 14px;
            color: white;
            & > .about-title,
            & > .product-title,
            & > .contact-title {
              font-weight: 600;
              font-size: 18px;
            }
            & > .aboutend > div,
            & > .producted > div,
            & > .contacted > div {
              color: rgb(245, 244, 244);
              &:hover {
                font-weight: 600;
                cursor: pointer;
              }
            }
          }
          & > .product {
            height: 100%;
            width: 88px;
          }
          & > .contact {
            height: 100%;
            width: 73px;
          }
        }
      }
    }
  }
}
.footer-down {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999;
}
.nav-icontitle {
  color: white;
}
</style>