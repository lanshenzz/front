<template>
  <div class="news-content-item">
    <div style="display: flex;width: 470px">
      <div>
        <div><slot name="day"></slot></div>
        <div><slot name="year.month"></slot></div>
      </div>
      <div><slot name="news-title"></slot></div>
      <div><slot name="month-date"></slot></div>
    </div>
    <div><slot name="underline"></slot></div>
    <div><slot name="scholat-website"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NewsContentItem"
    }
</script>

<style scoped>
.news-content-item{
  font-size: 14px;
  font-family: "Times New Roman";
  color: #222222;

}
</style>
