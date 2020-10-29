<template>
  <div class="created">
    <div class="centent">
      <!-- 漫画食谱成品展示 -->
      <div class="w690">
        <a href="" v-for="i in value" :key="i.id" class="anime_link">
          <img :src="i.cover" alt="" class="anime_img" />
          <p>{{ i.aname }}</p>
        </a>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>你当前的位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">一日三餐</el-breadcrumb-item>
        <el-breadcrumb-item>动漫</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <h3>小游戏</h3>
        <a href="http://www.4399.com/flash/1923.htm#search3" target="_blank"
          >厨房连连看</a
        ><br />
        <a href="http://www.4399.com/flash/120890.htm#search3" target="_blank"
          >可爱宝贝爱厨房</a
        ><br />
        <a href="http://www.4399.com/flash/60015.htm#search3" target="_blank"
          >厨房清理</a
        ><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      data: {
        mid: 1, //用户
        cover: "", //封面
        aname: "食谱名称", //食谱名称
      },
    };
  },
  created() {
    this.$http.get(`/getAnime`).then((res) => {
      console.log(res.data);
      this.value = res.data;
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
    display: flex;
    flex-direction: column;
    .w690 {
      width: 690px;
      .anime_link {
        margin: 30px 0;
        p {
          margin-top: 15px;
        }
        &:nth-child(2n + 1) {
          margin-right: 30px;
        }
        &:last-child {

        }
        text-decoration: none;
        display: inline-block;
        &:hover {
          color: rgb(255, 153, 0);
        }
      }
      .anime_img {
        width: 330px;
      }
    }
  }
}
</style>