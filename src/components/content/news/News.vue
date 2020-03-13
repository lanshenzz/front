<template>
    <div class="news">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>News</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'News ' + o }}
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 470px;
  }
</style>
