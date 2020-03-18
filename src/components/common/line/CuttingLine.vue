<template>
    <div class="CuttingLine">
      <div class="line1"></div>
      <div style=" float: left"><img src="@/assets/img/ScholatKG/RelationshipIcon.png" alt="" style="" ></div>
      <div  class="line-title" style=" "><slot></slot></div>
      <div  style=" float: right"><img src="@/assets/img/ScholatKG/RelationshipIcon2.png" alt=""></div>
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
  padding-top: 10px;
}
  .line1{
    float: left;
    width:300px ;
    padding-top: 30px;
    border-bottom: 2px solid #ff8822;
  }
  .line2{
    float: right;
    width:300px ;
    padding-top: 30px;
    border-bottom: 2px solid #ff8822;
  }
  .line-title{
    flex: 1;font-family: 'Times New Roman';
    font-size: 20px;
    color: #ff8822;
    line-height: 36px;
    text-align: center;
    font-weight: 900
  }
</style>
