<template>
    <div class="top-nav-bar">
      <div class="top-nav-bar-left"></div>
      <div class="top-nav-bar-center">
        <div class="center">
          <slot name="center" />
        </div>
      </div>
      <div class="top-nav-bar-right"></div>
    </div>
</template>

<script>
    export default {
        name: "TopNavBar"
    }
</script>

<style scoped>
  .top-nav-bar {
    position: fixed;
    margin-top: 0;
    line-height: 60px;
    display: flex;
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 2px rgba(100, 100, 100, 0.4);
    font-family: "Times New Roman.Regular";
    z-index: 9;
  }

  .left{
    font-size: 24px;
    font-weight: 800;
    text-align: right;
  }
  .right {
    font-size: 16px;
    text-align: left;
  }

  .center {
    text-align: left;
    font-size: 16px;
    width: 1024px;
  }
  .top-nav-bar-left{
    padding-left: 0;
    width: calc((100vw - 1024px)/2);
  }
  .top-nav-bar-right{
    padding-left: 0;
    width: calc((100vw - 1024px)/2);
  }

</style>
