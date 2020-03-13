<template>
    <div class="home">
      <top-nav-bar class="home-top-bar">
            <div slot="center" >
              <div class="left-2">
                <span  style="cursor:pointer;">ScholatData</span>
              </div>
              <div class="center-2">
                  <i v-for="(item,index) in title" class="center-title"
                     :class="{active:index === currentIndex}"
                     @click="itemClick(index)"><span >{{item}}</span></i>
              </div>
              <div class="right-2">
                <span style="cursor:pointer;">Login</span>
              </div>
            </div>
          </top-nav-bar>
      <div class="home-content">
        <swiper ></swiper>
        <div class="home-news">
          <news style="display:inline-block"></news>
          <news style="display:inline-block;padding-left: 10px"></news>
        </div>
        <div class="home-news">
          <news style="display:inline-block"></news>
          <news style="display:inline-block;padding-left: 10px"></news>
        </div>

      </div>
      <div style="margin-top: 30px">
        <bottom-nav-bar ></bottom-nav-bar>
      </div>

    </div>
</template>

<script>
  import TopNavBar from '@/components/common/topNavBar/TopNavBar'
  import Swiper from '@/components/common/swiper/Swiper'
  import News from '@/components/content/news/News'
  import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar'
    export default {
      name: "Home",
      data() {
        return {
          title: ['MainPage', 'ScholatKG', 'ScholatCourse'],
          currentIndex: 0,
        }
      },
      components: {
        TopNavBar,
        Swiper,
        News,
        BottomNavBar
      },
      methods: {
        itemClick(index) {
          this.currentIndex = index;
          // this.$emit('tabClick', index)
        }
      }
    }
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }

  .home-top-bar{
    font-weight: 600;
    color: #fff;
    background-color: #ff8822;
  }
  .center-title{
    cursor:pointer;
    padding-right: 20px;
  }
  .active{
    color: #ff5e21;
  }
  .active  span{
    border-bottom: 3px solid #ff5e21;
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
