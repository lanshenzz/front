<template>
    <div class="news">
      <el-card class="box-card" :class="{ active1: isActive_1,active2: isActive_2} ">
        <div slot="header" class="clearfix" ref="card">
          <div style="width: 20px;"><img src="@/assets/img/news_note.svg" alt="" style=" height: auto;
    max-width: 100%;display: inline-block;float: left"></div>

          <div style="display: inline-block;float: left;padding-left: 5px"><span style=" font-family: Times New Roman,Regular;color: #fff;font-size: 16px">{{news_title}}</span></div>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'News ' + o }}
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "News",
      props:{
          news_title:'',
          title_id:''
      },
      data(){
          return{
            isActive_1:false,
            isActive_2:false,
          }
      },
      created(){
        this.changeBC()

      },
      methods: {
        changeBC(){
          if(parseInt(this.title_id)===1){
          //  console.log(this.title_id);
            this.isActive_1=true;
          }
          if(parseInt(this.title_id)===2){
            //  console.log(this.title_id);
            this.isActive_2=true;
          }
       }
    }


    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";

  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 470px;
    border-radius: 6px;
  }
  .el-card >>> .el-card__header {
    background-color: #ff8822;
    height: 30px;
    padding-top: 3px;
    padding-left: 5px;
  }
  .active1 >>> .el-card__header{
    background-color: #006699;
  }
  .active2 >>> .el-card__header{
    background-color: #990000;
  }
</style>
