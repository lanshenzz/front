<template>
    <div class="card">
      <div class="heard"><slot name="card-title" ></slot></div>
      <div><slot name="card-content"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Card",
    }
</script>

<style scoped>
  .card{
    flex: 1;
    width: 470px;
    height: 260px;
    font-family: Times New Roman,bold;
  }
  .heard{
    height: 30px;
    background-color: #fff;
    color:#ff8822;
    font-size: 20px;
    font-weight: 900;


  }

</style>
