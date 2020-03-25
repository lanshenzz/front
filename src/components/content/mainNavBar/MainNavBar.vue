<template>
  <top-nav-bar class="home-top-bar">
    <div slot="center" >
      <div class="left-2">
        <span  style="cursor:pointer;">{{other_title[0]}}</span>
      </div>
      <div class="center-2">
        <top-nav-bar-item path="/home"><div slot="item-text"><span>{{title[0]}}</span></div></top-nav-bar-item>
        <top-nav-bar-item path="/knowledgeGraph"><div slot="item-text"><span>{{title[1]}}</span></div></top-nav-bar-item>
        <top-nav-bar-item path="/course"><div slot="item-text"><span>{{title[2]}}</span></div></top-nav-bar-item>
      </div>
      <div class="right-2">
        <div class="right-2-1" ><img src="@/assets/img/C-E.svg" alt="" @click="changeLanguage(isEngOrCh)"></div>
        <div class="right-2-2" ><span >{{other_title[1]}}</span></div>
      </div>
    </div>
  </top-nav-bar>
</template>

<script>
  import TopNavBar from '@/components/common/topNavBar/TopNavBar'
  import TopNavBarItem from '@/components/common/topNavBar/TopNavBarItem'
  export default {
    name: "MainNavBar",
    components:{
      TopNavBar,
      TopNavBarItem
    },
    data() {
      return {
        title: ['MainPage', 'ScholatKG', 'ScholatCourse'],
        other_title:['ScholatData','Login'],
        currentIndex: 0,
        title_E:['MainPage', 'ScholatKG', 'ScholatCourse'],
        other_title_E:['ScholatData','Login'],
        title_C:['首页', '知识图谱', '课程数据'],
        other_title_C:['学者网数据','登录'],
        isEngOrCh:false
      }
    },
    methods:{
      changeLanguage(){
       // this.isEngOrCh=!this.isEngOrCh
        this.$store.commit('changeIsEngOrCh');
        this.isEngOrCh=this.$store.state.isEngOrCh
        if(this.isEngOrCh===true){
          this.other_title=this.other_title_C;
          this.title=this.title_C;
        }
        if(this.isEngOrCh===false){
          this.other_title=this.other_title_E;
          this.title=this.title_E;
        }
      }
    }
  }
</script>

<style scoped>
  .home-top-bar{

    color: #fff;
    background-color: #ff8822;
  }
  .left-2{
    text-align: left;
    width: 180px;
    float: left;
    font-size: 24px;
  }
  .center-2{
    text-align: left;
    width: 664px;
    float: left;
  }
  .right-2{
    text-align: right;
    width: 180px;
    float: left;
    height: 60px;
  }
  .right-2-1{
    width: 27px;display: inline-block;padding-top: 10px;
  }
  .right-2-1 img{
    height: auto;
    max-width: 100%;padding-left: 60px;cursor:pointer;
  }
  .right-2-2{
    width: 140px;display: inline;float: right
  }

  .right-2-2 span{
    cursor:pointer;display: inline-block;
  }
</style>
