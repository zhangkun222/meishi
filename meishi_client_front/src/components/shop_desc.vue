<template>
  <div class="created">
    <top-nav></top-nav>
    <div class="centent">
      <!-- 商品展示 -->
      <div class="shop_top">
        <div class="small_img">
          <img :src="value.cover" alt="" style="width: 56px; height: 56px" />
        </div>
        <div>
          <img :src="value.cover" alt="" style="width: 320px; height: 320px" />
        </div>
        <div class="shop_titie">
          <h4>{{ value.pname }}</h4>
          <br />
          <p>介绍</p>
          <br />
          <!-- 价格 -->
          <div class="price">
            <span
              class="x_price"
              style="margin: 0 15px 0 0; font-size: 24px; color: red"
              >¥{{ (value.price * value.discount) / 10 - 1 }}</span
            >
            <span class="y_price" style="font-size: 16px"
              >¥<del>{{ value.price }}</del></span
            >
          </div>
          <br />
          <div>
            <span class="">月售{{ value.sales }}</span>
            <span class="">发货地:{{ value.address }}</span>
          </div>
          <br />
          <div></div>
          <!-- 商品加购/下单 -->
          <div class="right">
            数量:
            <button
              type="button"
              @click="changenum('redc')"
              style="width: 30px; height: 30px; color: rgb(255, 189, 6)"
            >
              -
            </button>
            <input
              v-model.number="shop_num"
              style="width: 50px; height: 26px; padding: 0 10px"
            />
            <button
              type="button"
              @click="changenum('add')"
              style="width: 30px; height: 30px; color: rgb(255, 189, 6)"
            >
              +</button
            ><br />
            <br />
            <el-button plain @click="open1()"> 加入购物车 </el-button>
            <!-- <button
              type="button"
              @click="addcart"
              style="width: 100px; height: 30px"
            >
              加入购物车
            </button> -->
            <!-- <button
              type="button"
              @click="sub"
              style="width: 100px; height: 30px; margin: 0 10px"
            >
              立即购买
            </button> -->
            <el-button
              type="text"
              @click="open"
              style="width: 110px; height: 38px"
              >立即购买</el-button
            >
            <!-- <div>商品数量:{{ $store.state.shop }}</div> -->
          </div>
        </div>
      </div>
      <!-- 商品详情 -->
      <div>
        <h3>商品详情</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop_ip: 1,
      shop_num: 1,
      value: {},
    };
  },
  methods: {
    changenum(t) {
      switch (t) {
        case "add":
          this.shop_num += 1;
          break;
        case "redc":
          this.shop_num -= 1;
          if (this.shop_num < 1) {
            this.shop_num = 1;
            alert("该宝贝不能减少了噢!");
          }
          break;
        case "user":
          this.shop_num += this.usernum;
          break;
        default:
          break;
      }
    },
    addcart() {
      console.log(1);
      if (this.shop_num) {
        this.$store.commit("addstaenum", this.shop_num, this.shop_ip);
        alert("已经加入购物车了,可在右上角购物车查看");
      }
    },
    sub() {},
    open() {
      let data = new Date();
      let newdata=data.getFullYear().toString()+`年`+data.getMonth().toString()+`月`+ data.getHours().toString()+`:`+data.getMinutes().toString();
      const h = this.$createElement;
      this.$msgbox({
        title: "确定购买",
        message: h("div", null, [
          h("h4", null, `商品:${this.value.pname}`),
          h("h5",  {style: "margin: 8px 0"}, `收货人:${"张锟"||this.value.pid}`),
          h("p", { style: "color: teal" }, `发货地址:${this.value.address}`),
          h(
            "p",
            { style: "color: teal" },
            `购买时间: ${newdata}`
          ),
          h("p", { style: "color: teal" }, `购买数量:${this.shop_num}`),
          h(
            "p",
            { style: "color: teal" },
            `购买总价:${
              this.shop_num *
              ((this.value.price * this.value.discount) / 10 - 1)
            }`
          ),
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "购买成功",
        });
      });
    },
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "加购成功",
        message: h(
          "i",
          { style: "width: 100px; height: 30px" },
          "已经加入购物车了,可在右上角购物车查看"
        ),
      });
    },
  },
  created() {
    console.log(this.$route.params.pid);
    let pid = this.$route.params.pid;
    this.$http.get(`/getShopping?pid=${pid}`).then((res) => {
      console.log(res.data[0]);
      this.value = res.data[0];
    });
  },
};
</script>
<style lang="scss">
//自己
.created {
  .centent {
    width: 1000px;
    margin: 10px auto;
    margin-top: 100px;

    .shop_top {
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
    }
    .shop_titie {
      text-align: left;
      width: 580px;
      height: 320px;
    }
    button {
      border: rgb(95, 138, 86);
      outline: rgb(170, 95, 95);
      &:nth-child(6),
      &:nth-child(7) {
        background-color: rgb(255, 189, 6);
      }
    }
  }
}
</style>