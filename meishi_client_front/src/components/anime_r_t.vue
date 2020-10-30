<template>
  <div class="created">
    <div class="centent">
      <!-- 漫画食谱成品展示 -->
      <div class="w690">
        <div>{{value.aname}}</div>
        <img :src="value.cover" alt="" style="width:498px">
        <br>
        <br>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>你当前的位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">一日三餐</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/anime_recipe' }">动漫</el-breadcrumb-item>
          <el-breadcrumb-item>{{value.aname}}</el-breadcrumb-item>

        </el-breadcrumb>
      </div>

      <div class="right">
        <div>小游戏</div>
        <br />
        <a href="http://www.4399.com/flash/1923.htm#search3" target="_blank"
          >厨房连连看</a
        ><br /><br />
        <a href="http://www.4399.com/flash/120890.htm#search3" target="_blank"
          >可爱宝贝爱厨房</a
        ><br /><br />
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
        value:{},
    };
  },
  created() {
    console.log(this.$route.params.Aid);
    let Aid=this.$route.params.Aid
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
    .right {
      width: 200px;
      height: 150px;
      margin: 40px 20px;
      text-align: left;
      float: left;
      a {
        text-decoration: none;
        margin: 10px auto;
        &:link,
        &:visited {
          color: rgb(100, 99, 99);
        }
        &:hover {
          color: rgb(247, 148, 0);
        }
      }
    }
    .w690 {
      float: left;
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