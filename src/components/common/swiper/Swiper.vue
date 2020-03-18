<template>
    <div class="swiper">
      <el-carousel indicator-position="outside" :interval="5000">
        <el-carousel-item v-for="item in imagesBox" :key="item.id">
          <img v-lazy="item.idView" >
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
      data(){
          return{
            imagesBox:[{id:0,idView:require("@/assets/img/show1.jpg")},
              {id:1,idView:require("@/assets/img/show2.jpg")}]
          }
      }
    }
</script>

<style scoped>
  .el-carousel__item img {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;

  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
