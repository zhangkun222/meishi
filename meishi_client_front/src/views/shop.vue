<template>
  <div class="created">
    <div class="centent">
      <!-- 漫画食谱成品展示 -->

      <!-- 懒加载 -->
      <div class="cntent">
        <div class="shop" v-for="i in value" :key="i.Aid">
          <a class="anime_link demo-image__lazy" @click="link(i.Aid)">
            <el-image :src="i.cover" alt="" class="anime_img" lazy></el-image>
            <br />
            <h3>标题:{{ i.aname }}</h3>
          </a>
          <div class="price">
            <div>
              <span class="x_price">¥20</span>
              <span class="y_price">¥<del>300</del></span>
            </div>
           <span class="right"> 月售100</span>
          </div>
        </div>
      </div>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item>你当前的位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">一日三餐</el-breadcrumb-item>
        <el-breadcrumb-item>动漫</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      h: `/anime_r_t`,
      data: {
        sid: 1, //商品id
        cover: "", //封面
        sname: "商品名称", //食谱名称
      },
    };
  },
  methods: {
    link(id) {
      this.h = `./anime_r_t/${id}`;
      console.log(this.h);
      this.$router.push(this.h);
    },
  },
  created() {
    this.$http.get(`/getAnime`).then((res) => {
      console.log(res.data);
      this.value = res.data;
    });
  },
};
</script>

<style lang="scss" >
//自己
.created {
  .centent {
    width: 1000px;
    margin: 10px auto;
    .cntent {
      width: 1000px;
    }
    .shop {
      display: inline-block;
      width: 250px;
    }
    .anime_link {
      margin: 30px 0;
      text-decoration: none;
      display: inline-block;
      &:hover {
        color: rgb(255, 153, 0);
      }
    }
    .anime_img {
      width: 240px;
      height: 240px;
    }
    .price{
      width: 240px;
      display: flex;
      justify-content: space-between;
      .x_price{
        margin: 15px;
        font-size: 20px;;
        color: red;
      }
      .y_price{
        font-size: 14px;
      }
      .right{
        font-size: 14px;
      }
    }
  }
}
</style>