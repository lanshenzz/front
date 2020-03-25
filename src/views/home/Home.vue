<template>
    <div class="home">
      <div class="home-content">
        <swiper ></swiper>
        <!--使用slot的news主页-->
        <div class="home-news" style="display: flex;align-items: flex-start">
          <!--<news style="display:inline-block">
            <div slot="news-column-title" class="">
                {{news_titles[0].idView}}
            </div>
            <div slot="news-content">
              <NewsContentItem v-for="i in 6" :key="i">
                <div slot="news-title">Scholatdata is a free and open knowledge base that can be read and used by both humans and machines.</div>
              </NewsContentItem>
            </div>
          </news>-->
          <news style="display:inline-block">
            <div slot="news-column-title" class="" style="border-radius: 6px">{{news_titles[0].idView}}
              <div class="omit" @click="gotoDetails"><img src="@/assets/img/omit2.svg" alt="" style=""></div>
            </div>
            <div slot="news-content">
              <NewsContentItem v-for="a in 2" :key="a" style="height: 52px">

                <div slot="day" style="color: #ff8822;font-size: 24px;font-weight: bold;font-family: 微软雅黑">{{dateFormat3(new Date())}}</div>
                <div slot="year.month" style="color: #858181;font-size: 8px;font-weight: bold;font-family: 微软雅黑">{{dateFormat1(new Date())}}</div>

                <div slot="news-title" style="vertical-align: middle;display: inline-block;float: right;margin-right: 10px;margin-left: 10px">Scholatdata is a free and open Knowledge base that can be read and used by both humans and machines.</div>
                <div slot="underline" style="border-bottom: 1px solid #d6d6d6;width: 430px;margin:auto"></div>
              </NewsContentItem>
              <NewsContentItem v-for="b in 4" :key="b+'1'">
                <div slot="news-title" style="width: 400px;margin-bottom: 10px" class="text-overflow">Scholatdata is a free and open Knowledge base that can be read and used by both humans and machines.</div>
                <div slot="month-date" style="float: right">{{dateFormat2(new Date())}}</div>
              </NewsContentItem>
            </div>
          </news>
          <news style="display:inline-block;margin-left: 20px">
            <div slot="news-column-title" class="" style="background-color: #006699;border-radius: 6px">
              {{news_titles[1].idView}}</div>
            <div slot="news-content">
              <NewsContentItem v-for="i in 3" :key="i">
                <div slot="news-title" style="margin-bottom: 10px">Scholatdata is a free and open knowledge base that can be read and used by both humans and machines.</div>
              </NewsContentItem>
            </div>
            <div slot="scholat-website" style="cursor: pointer;color: #006699;size: 14px;font-family: 微软雅黑; font-weight: bold;margin-top: 30px">
              学者网网址：<a :href="scholat_website" style="font-family: 'Times New Roman';color: #006699;">{{scholat_website}}</a>
            </div>
          </news>
        </div>
        <div class="home-news" style="display: flex;align-items: flex-start">
          <news style="display:inline-block">
            <div slot="news-column-title" class="" style="background-color: #990000;border-radius: 6px">{{news_titles[2].idView}}
              <div class="omit" @click="gotoDetails"><img src="@/assets/img/omit2.svg" alt="" style=""></div>
            </div>
            <div slot="news-content">
              <NewsContentItem v-for="i in 2" :key="i" style="height: 52px">

                  <div slot="day" style="color: #990000;font-size: 24px;font-weight: bold;font-family: 微软雅黑">{{dateFormat3(new Date())}}</div>
                  <div slot="year.month" style="color: #858181;font-size: 8px;font-weight: bold;font-family: 微软雅黑">{{dateFormat1(new Date())}}</div>

                <div slot="news-title" style="vertical-align: middle;display: inline-block;float: right;margin-right: 10px;margin-left: 10px">Scholatdata is a free and open Knowledge base that can be read and used by both humans and machines.</div>
                <div slot="underline" style="border-bottom: 1px solid #d6d6d6;width: 430px;margin:auto"></div>
              </NewsContentItem>
              <NewsContentItem v-for="o in 4" :key="o+'1'">
                <div slot="news-title" style="width: 400px;margin-bottom: 10px" class="text-overflow">Scholatdata is a free and open Knowledge base that can be read and used by both humans and machines.</div>
                <div slot="month-date" style="float: right">{{dateFormat2(new Date())}}</div>
              </NewsContentItem>
            </div>
          </news>
          <news style="display:inline-block;margin-left: 20px">
            <div slot="news-column-title" class="">{{news_titles[3].idView}}
              <div class="omit" @click="gotoDetails"><img src="@/assets/img/omit2.svg" alt="" style=""></div>
            </div>
            <div slot="news-content">
              <NewsContentItem v-for="i in 4" :key="i+'2'">
                <div slot="news-title" style="margin-bottom: 10px">Scholatdata is a free and open knowledge base that can be read and used by both humans and machines.</div>
              </NewsContentItem>
            </div>
          </news>
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
  import NewsContentItem from "../../components/content/news/NewsContentItem";


    export default {
      name: "Home",
      data() {
        return {
          currentIndex: 0,
          news_titles:[{id:0,idView:'Welcome to ScholatData'},{id:1,idView:'About Scholat'},
            {id:2,idView:'Relate Papers'},{id:3,idView:'Current highlights'}],
          news_titles_E:[{id:0,idView:'Welcome to ScholatData'},{id:1,idView:'About Scholat'},
            {id:2,idView:'Relate Papers'},{id:3,idView:'Current highlights'}],
          news_titles_C:[{id:0,idView:'学者网数据集'},{id:1,idView:'学者网简介'},
            {id:2,idView:'相关论文'},{id:3,idView:'近期动态'}],
          isEngOrCh:this.$store.state.isEngOrCh,
          scholat_website:"www.scholat.com",
        }
      },
      components: {
        NewsContentItem,
        TopNavBar,
        Swiper,
        News,
      },
      methods: {
        /*2019.09*/
        dateFormat1(time) {
          var date=new Date(time);
          var year=date.getFullYear();
          /* 在日期格式中，月份是从0开始的，因此要加0
           * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
           * */
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          // 拼接
          return year+"."+month;
        },
        /*08-15*/
        dateFormat2(time) {
          var date=new Date(time);
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          // 拼接
          return month+"-"+day;
        },
        /*06*/
        dateFormat3(time){
          var date=new Date(time);
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          return day;
        },
        gotoDetails(){
          this.$router.push('details')
        }
      },
      computed:{
        isChangeEngOrCh () {
          return this.$store.state.isEngOrCh;　　
        }
      },
      created(){
        if(this.isEngOrCh===true){
          this.news_titles=this.news_titles_C;
        }
        if(this.isEngOrCh===false){
          this.news_titles=this.news_titles_E;
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

  }
  .text-overflow{
    display:block;                     /*内联对象需加*/
    width:31em;
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;         /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
  .omit{
    height: 30px;width:30px;float: right
  }img{
       height: 80%;vertical-align:middle;display: inline-block;cursor:pointer
     }
</style>
