<template>
  <div id="news">


    <div class="aside-widget">

      <div class="header" :class="{active1:isActive_1,active2:isActive_2}">
        <div style="width: 20px; padding-left: 10px;display: inline-block;margin-top: 3px" >
          <img src="@/assets/img/news_note.svg" alt="" style=" height: auto;
                  max-width: 100%;display: inline-block;float: left;">
        </div>
        <span>{{news_title}}</span>
      </div>


      <div class="news-content">
        <div v-for="(item,key) in 5" :key="key" v-bind:class="{'top-news':key==0||key==1}">
          <div class="news-item">
            <div class="paper-num">{{"paper"+(++key)}}</div>
            <div class="paper-title">
              <a href="">{{"Konwledge Graph XX xxxxxx"+(++key)}}</a>
            </div>
            <span>08-17</span>
          </div>
        </div>
      </div>
    </div>
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
        isActive_2:false
      }
    },
    created(){
      this.changeBC()

    },
    methods: {
      changeBC() {
        if (parseInt(this.title_id) === 1) {
          //  console.log(this.title_id);
          this.isActive_1 = true;
        }
        if (parseInt(this.title_id) === 2) {
          //  console.log(this.title_id);
          this.isActive_2 = true;
        }
      }
    }
  }
</script>

<style scoped>
  #news{
    width: 470px;
  }
  .aside-widget {
    margin-bottom: 40px;
    border: 1px solid #ddd;
    border-radius: 6px;
    vertical-align: center;
    box-shadow: 2px 2px 5px #B8B8B8;
  }
  .header {
    background-color: #ff8822;
    border-radius: 6px;
    height: 30px;
    line-height: 30px;
  }
  .active1{
    background-color: #006699;
  }
  .active2{
    background-color: #990000;

  }

  .header span {
    font-family: Times New Roman,Regular;
    color: #ffffff;
    size: 16px;


  }

  .news-content{
    padding-left: 20px;
    padding-top: 20px;
    font-family:微软雅黑,Times New Roman,Regular;

  }
  .news-item{
    height: 50px;
    font-family: Times New Roman,Regular;

  }
  .paper-num{
    display: inline-block;
  }
  .paper-title{
    display: inline-block;
  }
  .news-item>span{
    color: #858181;
    font-size: 12px;
    float: right;
    margin-right: 10px;
    display: inline-block;
  }
  .top-news{

  }

</style>
