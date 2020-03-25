<template>
    <div class="BottomNavBar">
      <div style="padding-top: 25px">{{scholatUrl}}</div>
      <div style="padding-top: 15px"><div style="font-size: 14px">{{severUrl}}</div></div>
    </div>
</template>

<script>
    export default {
        name: "BottomNavBar",
      data(){
          return{
            scholatUrl:'SCHOLAT.com',
            severUrl:'Service MailBox:help@scholat.con'
          }
      }
    }
</script>

<style scoped>
  .BottomNavBar{
    width: 100%;
    height: 120px;
    background-color: #3a3d3e;
    margin-bottom: 0;
    z-index: 9;
    text-align: center;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.4);
  }
  .BottomNavBar div{

    color: #999;
    size: 16px;
    font-family:"Times New Roman.Regular";
  }
</style>
