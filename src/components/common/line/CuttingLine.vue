<template>
  <div class="CuttingLine">
    <div class="line1"></div>
    <div style=" float: left;"><img src="@/assets/img/ScholatKG/RelationshipIcon.png" alt="" style="height: 25px"></div>
    <div  class="line-title" style=" "><slot></slot></div>
    <div  style=" float: right;"><img src="@/assets/img/ScholatKG/RelationshipIcon2.png" alt="" style="height: 25px"></div>
    <div class="line2"></div>
  </div>
</template>

<script>
  export default {
    name: "CuttingLine"
  }
</script>

<style scoped>
  .CuttingLine{
    display: flex;
    margin-top: 20px;
    height: 32px;
    align-items: center;
  }
  .line1{
    float: left;
    width:300px ;
    height: 2px;
    background-color: #ff8822;
  }
  .line2{
    float: right;
    width:300px ;
    height: 2px;
    background-color: #ff8822;
  }
  .line-title{
    flex: 1;
    font-family: 'Times New Roman';
    font-size: 20px;
    color: #ff8822;
    line-height: 36px;
    font-weight: 900;
    text-align: center;
  }
</style>
