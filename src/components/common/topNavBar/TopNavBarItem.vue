<template>
    <div class="top-nar-bar-item" @click="itemClick">
      <div :class="{active:isActive===true}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>

    export default {
      name: "TopNavBarItem",
      props: {
        path: {
          type:String,
          default:''
        }
      },
      methods:{
        itemClick() {
          // console.log(this.path);
          this.$router.push(this.path)
        },
      },
      computed:{
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        }
      }
    }
</script>

<style scoped>
.top-nar-bar-item{
  flex: 1;
  display: inline-block;
  cursor:pointer;
  padding-right: 20px;
}
.active span{
  color: #ff5e21;
  border-bottom: 3px solid #ff5e21;
  padding-bottom: 5px;

}
</style>
