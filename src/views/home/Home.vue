<template>
    <div class="home">
      <div class="home-content">
        <swiper ></swiper>
        <div class="home-news">
          <news style="display:inline-block" :news_title="news_titles[0].idView"></news>
          <news  style="display:inline-block;padding-left: 10px" :news_title="news_titles[1].idView" :title_id="news_titles[1].id"></news>
        </div>
        <div class="home-news">
          <news  style="display:inline-block" :news_title="news_titles[2].idView" :title_id="news_titles[2].id"></news>
          <news style="display:inline-block;padding-left: 10px" :news_title="news_titles[3].idView" ></news>
        </div>
      </div>
      <div style="margin-top: 30px">

      </div>

    </div>
</template>

<script>
  import TopNavBar from '@/components/common/topNavBar/TopNavBar'
  import Swiper from '@/components/common/swiper/Swiper'
  import News from '@/components/content/news/News'

    export default {
      name: "Home",
      data() {
        return {
          currentIndex: 0,
          news_titles:[{id:0,idView:'Welcome to ScholatData'},{id:1,idView:'About ScholatData'},
            {id:2,idView:'Relate Papers'},{id:3,idView:'Current highlights'}],
          news_titles_E:[{id:0,idView:'Welcome to ScholatData'},{id:1,idView:'About ScholatData'},
            {id:2,idView:'Relate Papers'},{id:3,idView:'Current highlights'}],
          news_titles_C:[{id:0,idView:'学者网数据集'},{id:1,idView:'学者网简介'},
            {id:2,idView:'相关论文'},{id:3,idView:'近期动态'}],
          isEngOrCh:true
        }
      },
      components: {
        TopNavBar,
        Swiper,
        News,
      },
      methods: {

      },
      computed:{
        isChangeEngOrCh () {
          return this.$store.state.isEngOrCh;　　
        }
      },
      watch:{
        isChangeEngOrCh(newVal,oldVal){
          this.isEngOrCh=newVal;
          if(this.isEngOrCh===true){
            this.news_titles=this.news_titles_C;
          }
          if(this.isEngOrCh===false){
            this.news_titles=this.news_titles_E;
          }
        }
      }
    }
</script>

<style scoped>
  .home{

  }
  .home-content{
    padding-top: 90px;
    width: 960px;
    margin: 0 auto
  }
  .home-news{
    padding-top: 20px;
  }

</style>
