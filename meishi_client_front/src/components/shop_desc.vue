<template>
  <div class="created">
    <div class="centent">
      <!-- 商品展示 -->
      <!--  -->
      <div class="small_img">
        <img :src="value.cover" alt="" style="width: 56px; hight: 56px" />
      </div>
      <div>
        <img :src="value.cover" alt="" style="width: 320px; hight: 320px" />
      </div>
      <div class="shop_titie">
        <h3></h3>
        <p></p>
        <!-- 价格 -->
        <div class="price">
          <span class="x_price">¥20</span>
          <span class="y_price">¥<del>300</del></span>
        </div>
        <div>
          <span class=""> 月售100</span>
          <span class=""> 发货地</span>
        </div>
        <div></div>
        <!-- 商品详情 -->
        <div>
          <button type="button" @click="changenum('redc')">-</button>
          <input v-model.number="shop_num" />
          <button type="button" @click="changenum('add')">+</button><br />
          <button type="button" @click="changenum()">加入购物车</button>
          <button type="button" @click="changenum()">立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop_ip=1,
      value: {},
    };
  },
   methods:{
    changenum(t){
      switch (t) {
        case 'add':
          this.$store.commit("addstaenum","add",shop_ip)
          break;
           case 'redc':
          this.$store.commit("addstaenum","redc",shop_ip)
          break;
          case 'user':
          this.$store.commit("addstaenum",this.usernum,shop_ip)
          break;
        default:
          break;
      }
    },
   },
  created() {
    console.log(this.$route.params.Aid);
    let Aid = this.$route.params.Aid;
    this.$http.get(`/getAnime?Aid=${Aid}`).then((res) => {
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
  }
}
</style>