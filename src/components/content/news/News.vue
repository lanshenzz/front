<template xmlns:height="http://www.w3.org/1999/xhtml" xmlns:inline-block>
  <div class="news">

    <div class="news-column-title">
      <div style="height: 30px;width:30px;float: left"><img src="@/assets/img/news_note.svg" style="height: 80%;margin-left: 5px;vertical-align:middle;display: inline-block" ></div>
      <div style="">
        <slot name="news-column-title"></slot>
      </div>

    </div>

    <div class="news-content">
      <slot name="news-content"></slot>
      <slot name="scholat-website"></slot>
    </div>
  </div>



</template>

<script>
  import NewsContentItem from "./NewsContentItem";
  export default {
    name: "News",
    props:{
      news_title:'',
      title_id:'',

    },
    components:{
      NewsContentItem
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
  .news{
    width: 470px;
    height: 270px;
    box-shadow: 2px 2px 5px #B8B8B8;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-family: Times New Roman, Regular;
    margin-bottom: 20px;
  }
  .news-column-title{
    width: 470px;
    height: 30px;
    background-color: #ff8822;
    border-radius: 6px;
    line-height: 30px;
    color: #ffffff;
    font-size: 16px;

  }
  .news-content{
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }


</style>
