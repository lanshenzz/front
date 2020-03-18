<template>
  <div class="app">
    <main-nav-bar></main-nav-bar>
    <keep-alive>
    <router-view/>
    </keep-alive>
    <bottom-nav-bar ></bottom-nav-bar>
  </div>
</template>

<script>
  import MainNavBar from '@/components/content/mainNavBar/MainNavBar'
  import BottomNavBar from '@/components/common/bottomNavBar/BottomNavBar'
  export default {
    name: 'App',
    components:{
      MainNavBar,
      BottomNavBar
    }
  }
</script>

<style scoped>
.app{
  width: 100%;
  height: 100%;

}
</style>
