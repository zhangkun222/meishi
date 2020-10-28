<template>
  <div class="home">
    <top-menu></top-menu>
      <el-carousel :interval="4000" type="card" height="400px" :autopaly="autopaly">
        <el-carousel-item v-for="(item,index) in imgarr" :key="index">
          <h3><img :src="item" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
 data(){
   return{
     autopaly:true,
     imgarr:['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1909725915,1791135853&fm=26&gp=0.jpg',
     'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564582563,424424435&fm=26&gp=0.jpg',
     'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320651748,2418229641&fm=26&gp=0.jpg',
     'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3829852440,1930026227&fm=26&gp=0.jpg',
     'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580945220,330175111&fm=26&gp=0.jpg',
     'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1748128699,4290184910&fm=26&gp=0.jpg'
     
     ]
   }
 }
};
</script>
<style scoped>
.el-carousel__item h3 {
  width: 100%;
    height: 100%;
    color: #475669;
    font-size: 14px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item h3 img{
    width: 100%;
    height: 100%;
  }
</style>
