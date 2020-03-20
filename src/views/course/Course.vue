<template>
    <div class="course">
      <CirChart></CirChart>
    </div>
</template>

<script>
    import CirChart from '@/components/content/charts/CirChart'
    export default {
        name: "Course",
      components:{
        CirChart
      },
      data(){
        return{

        }
      },
      created(){
      //  console.log(this.courseData);
      },
      methods: {

      }
    }
</script>

<style scoped>
.course{
  height: 1000px;
  padding-top: 90px;
  width: 1024px;
  margin: 0 auto
}
</style>
