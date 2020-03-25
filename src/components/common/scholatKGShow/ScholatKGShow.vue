<template>
    <div class="ScholatKGShow">
      <div v-for="(item,index) in cardShowURL" :key="index" style=" float: left;margin-right: 20px;opacity: 76%">
        <img :src="item" alt="" >
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
    width: 960px;
  }
  .img{

    width:225px;
    height:120px;
  }
</style>
