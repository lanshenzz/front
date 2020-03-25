<template>
  <div class="details-div">
    <div class="details-title">
      <slot name="details-title" ></slot>
    </div>
    <div class="details-content">
      <div class="postImg"><slot name="img"></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="foot">
        <div class="author"><slot name="author"></slot></div>
        <div class="newsInfo"><slot name="date"></slot></div>
        <div class="newsInfo"><slot name="pageView"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailsDiv"
    }
</script>

<style scoped>

  .details-div {
    background-color: #fff;
    padding: 20px;
    border-bottom: 2px solid #f4f4f4;
  }
  .details-title{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }
  .details-content{
    margin-top: 10px;
    height: 90px;
  }
  .postImg {
    float: left;
    width: 130px;
    height: 90px;
    margin-right: 15px;
    border-radius: 2px;
  }
  .content {
    font-size: 14px;
    color: #999999;
    height: 60px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow: hidden;
  }
  .foot {
    margin-top: 6px;
    height: 24px;

  }
  .author {
    line-height: 24px;
    margin-left: 5px;
    margin-right: 16px;
    font-size: 14px;
    color: #b5b5b5;
float: left;
  }
  .newsInfo{
    font-size: 14px;
    color: #cfcece;
    float: right;
    margin-right: 10px;

  }
</style>
