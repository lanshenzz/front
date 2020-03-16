<template>
  <div class="hello">


    <div v-for="(item,index) in userInfo" :key="index">
      <span>{{item.id}}</span>
      <span>{{item.name}}</span>
      <span>{{item.age}}</span>
      <span>{{item.sex}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      userInfo:null
    }
  },
  // created(){
  //   this.getUser()
  // },
  // methods: {
  //
  //   getUser(){
  //     this.$axios.get('/user/getAll').then(res=>{
  //       // console.log(res.data);
  //       this.userInfo=res.data
  //     })
  //   },
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
