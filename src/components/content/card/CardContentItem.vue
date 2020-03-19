<template>
    <div class="card-content-item">
     <div style="display: flex;width: 470px;">
       <div style="flex: 1"><slot name="left"></slot></div>
       <div class="center" style="flex: 1;color: #858181"><slot name="center"></slot></div>
       <div style="width: 80px;color: #ff8822"><slot name="right" ></slot></div>
     </div>
      <div ><slot name="underLine" ></slot></div>
    </div>
</template>

<script>
    export default {
        name: "CardContentItem"
    }
</script>

<style scoped>
.card-content-item{
  height: 30px;
  font-size: 14px;
  font-weight: 800;
  line-height: 30px;
  font-family: Times New Roman,bold;
}
  .underLine{

  }
</style>
