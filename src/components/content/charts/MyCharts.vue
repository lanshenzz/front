<template>
    <div class="my-charts" ref="myCharts">
    </div>
</template>

<script>
    export default {
      name: "MyCharts",
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      props:{
        courseData:null,
      },
      created(){
        console.log(this.courseData);
      },
      mounted(){
        this.drawLine();

      },
      methods: {
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
       //  let myChart = this.$echarts.init(document.getElementById('myCharts'))
           let myChart=this.$echarts.init(this.$refs.myCharts);
          myChart.setOption({
              title:{
                text: "广州大学数据分析",
                subtext: "各学院专业关系-Acring",
                top: 20,
                left: "center",
              },
              tooltip: {},
              legend: [{
                tooltip: {
                  show: true
                },
                selectedMode: 'false',
                bottom: 20,
                data:this.courseData.categories,
              }],
              toolbox: {
                show : true,
                feature : {
                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              animationDuration: 3000,
              animationEasingUpdate: 'quinticInOut',
              series: [{
                name: '广州大学',
                type: 'graph',
                layout: 'force',
                force: {
                  repulsion: 30
                },
                data:this.courseData.data,
                links: this.courseData.links,
                categories: this.courseData.categories,
                focusNodeAdjacency: true,
                roam: true,
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0,
                    type: "solid"
                  }
                }
              }]
          })
        }
      }
    }
</script>

<style scoped>
.my-charts{
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
