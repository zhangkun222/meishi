<template>
  <div class="all">
    <div class="b-top">
      <div class="b-info">
        <input type="checkbox" class="checkAll" @click="allcheck" />全选
      </div>
      <div class="b-info b-length">商品名称</div>
      <div class="b-info">图片</div>
      <div class="b-info">单价</div>
      <div class="b-info b-length">数量</div>
      <div class="b-info">小计</div>
      <div class="b-info">操作</div>
    </div>
    <!-- 商品 -->

    <div
      class="b-list"
      v-for="(e, j) in cart"
      :key="j"
      @click.stop="add(e.price, e.num)"
    >
      <div class="b-ele">
        <div class="b-info">
          <input
            type="checkbox"
            class="check"
            :checked="e.checked"
            @click="fan(e.checked, j)"
          />
        </div>
        <div class="b-info b-length">{{ e.name }}</div>
        <div class="b-info" style="line-height: 80px">
          <img src="" />
        </div>
        <div class="b-info b-price">原价:{{ e.price }}</div>
        <div class="b-info b-length">
          <button
            class="b-count-button buttonSub"
            @click="changenum('redc', j)"
          >
            -
          </button>
          <input type="text" class="b-count-input" v-model="e.num" />
          <button class="b-count-button buttonAdd" @click="changenum('add', j)">
            +
          </button>
        </div>
        <div class="b-info b-total">现价:{{ e.totle }}</div>
        <div class="b-info">
          <!-- <button class="b-button eleDelete" value="0" @click="del_shop">
            删除
          </button> -->
          <el-button type="text" @click="open(j)">删除</el-button>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="b-display">
      <div class="left">
        <input type="checkbox" class="reverseCheck" @click="reversecheck" />反选
      </div>
      <div class="center">
        总价:<span class="allPrice">￥{{ c_price }}</span>
      </div>
      <div class="right">
        <!-- <button @click="sub">去结算</button> -->
        <el-button
          type="text"
          @click="openget"
          style="width: 110px; height: 38px"
          >立即结算</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import configDefault from "../../../egg-mysql/config/config.default";
export default {
  data() {
    return {
      cut: 2,
      c_price: 0,
      cart: [
        {
          id: "101321XNMNSDJYE6871DAS21",
          name: "华为nova5 pro",
          src: "./cartimage/415d8ef0da06eb00.png",
          price: "1499",
          totle: "1499",
          num: 1,
          checked: false,
        },
        {
          id: "101321XNMNSDJYE6871DAS21",
          name: "华为nova5 pro",
          src: "./cartimage/415d8ef0da06eb00.png",
          price: "1599",
          totle: "1599",
          num: 1,
          checked: false,
        },
        {
          id: "101321XNMNSDJYE6871DAS21",
          name: "华为nova5 pro",
          src: "./cartimage/415d8ef0da06eb00.png",
          price: "1499",
          totle: "1499",
          num: 1,
          checked: false,
        },
        {
          id: "101321XNMNSDJYE6871DAS21",
          name: "华为nova5 pro",
          src: "./cartimage/415d8ef0da06eb00.png",
          price: "1599",
          totle: "1599",
          num: 1,
          checked: false,
        },
      ],
    };
  },

  methods: {
    allcheck() {
      this.c_price = 0;
      if (this.cut % 2 == 0) {
        this.cart.forEach((e) => {
          e.checked = true;
          this.c_price += e.num * e.price;
        });
      } else {
        this.cart.forEach((e) => {
          e.checked = false;
          this.c_price = 0;
        });
      }
      this.cut++;
    },
    reversecheck() {
      this.cart.forEach((e) => {
        if (e.checked) {
          e.checked = false;
        } else {
          e.checked = true;
        }
      });
      this.add();
    },
    fan(a, j) {
      this.cart[j].checked = !this.cart[j].checked;
    },
    add() {
      this.c_price = 0;
      this.cart.forEach((e) => {
        if (e.checked) {
          this.c_price += e.num * e.price;
        }
      });
    },
    changenum(t, j) {
      switch (t) {
        case "add":
          this.$store.commit("addstaenum", "add", this.shop_ip);
          this.cart[j].num += 1;
          break;
        case "redc":
          this.$store.commit("addstaenum", "redc", this.shop_ip);
          this.cart[j].num -= 1;

          if (this.cart[j].num < 1) {
            alert("该宝贝不能减少了噢!");
            this.cart[j].num = 1;
          }
          break;
        case "user":
          this.$store.commit("addstaenum", this.usernum, this.shop_ip);
          break;
        default:
          break;
      }
    },

    sub() {
      if (p > 0) {
      }
    },
    open(j) {
      this.$confirm("此操作将删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.cart.splice(j, 1);

          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    openget() {
      const h = this.$createElement;
      this.$msgbox({
        title: "确定购买",
        message: h("div", null, [
          h("h4", null, `商品`),
          h("h4", null, `收货人`),
          h("p", { style: "color: teal" }, "发货地址"),
          h("p", { style: "color: teal" }, "购买时间"),
          h("p", { style: "color: teal" }, "购买数量"),
          h("p", { style: "color: teal" }, "购买总价"),
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
  },
};
</script>


    <style>
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.all {
  width: 1000px;
  margin: auto;
}

.b-top {
  display: flex;
  flex-direction: row;
  background: #ffe0cb;
  height: 30px;
  line-height: 30px;
}

.b-info {
  flex: 1;
  text-align: center;
}

.b-length {
  flex: 2;
}

.b-ele {
  display: flex;
  flex-direction: row;
  height: 70px;
  line-height: 70px;
  padding: 10px 0;
  border-bottom: 1px dashed silver;
}

.b-ele div {
  text-align: center;
}

.chooseEle {
  background: pink;
}

.b-button {
  color: blue;
  width: 60px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background: silver;
  border: none;
}

.b-count-button {
  width: 25px;
  height: 25px;
  border: none;
  color: blue;
  background: orange;
}

.b-count-input {
  border: none;
  height: 20px;
  width: 25px;
  outline: none;
  text-align: center;
}

img {
  width: 25px;
  height: 25px;
}

.b-display {
  display: flex;
  justify-content: space-between;
}

.b-display div {
  width: 120px;
  height: 40px;
  line-height: 40px;
}

.left {
  text-align: center;
}

.right button {
  width: 100%;
  height: 100%;
  background: red;
  color: white;
  text-align: center;
  border: none;
}
</style>








