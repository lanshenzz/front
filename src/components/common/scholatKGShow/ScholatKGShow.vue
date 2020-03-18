<template>
    <div class="ScholatKGShow">
      <div v-for="(item,index) in cardShowURL" :key="index" style=" flex: 1;">
        <img :src="item" alt="">
      </div>

    </div>
</template>

<script>
    export default {
      name: "ScholatKGShow",
      data(){
        return{
          cardShowURL:[require("@/assets/img/ScholatKG/cardShow1.png"),require("@/assets/img/ScholatKG/cardShow2.png"),
            require("@/assets/img/ScholatKG/cardShow3.png"),require("@/assets/img/ScholatKG/cardShow4.png")]
        }
      }
    }
</script>

<style scoped>
  .ScholatKGShow{
    display:flex;

  }
  .img{

    width:225px;
    height:120px;
  }
</style>
