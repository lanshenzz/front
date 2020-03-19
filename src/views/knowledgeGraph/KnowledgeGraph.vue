<template>
    <div class="KnowledgeGraph">
      <div class="KGCard">
        <card style="margin-right: 20px;">
        <div slot="card-title" class="card-title">{{cardTitle[0]}}</div>
        <div slot="card-content" style="margin-top: 20px;">
          <CardContentItem v-for="i in 6" :key="i">
            <div slot="left" style="cursor:pointer;">{{cardContentData}}</div>
          </CardContentItem>
        </div>
        </card>
       <card >
        <div slot="card-title" class="card-title">{{cardTitle[1]}}<img src="@/assets/img/omit.svg" alt="" style="float: right;width: 40px"></div>
        <div slot="card-content" style="margin-top: 20px;">
          <CardContentItem v-for="i in 6" :key="i">
            <div slot="left">{{contentDate}}</div>
            <div slot="center" style="float: right">{{contentDetail}}</div>
            <div slot="right" style="float: right;cursor:pointer;"><span>download</span></div>
            <div slot="underLine" style="border-bottom: 1px solid #d6d6d6;width: 460px;margin:auto"></div>
          </CardContentItem>
        </div>
        </card>
      </div>
      <ScholatKGShow></ScholatKGShow>
      <CuttingLine>{{cardTitle[2]}}</CuttingLine>
      <div class="myChart"><my-charts :courseData="courseData"></my-charts></div>

    </div>
</template>

<script>
    import Card from '@/components/content/card/Card'
    import CardContentItem from '@/components/content/card/CardContentItem'
    import ScholatKGShow from '@/components/common/scholatKGShow/ScholatKGShow'
    import CuttingLine from '@/components/common/line/CuttingLine'
    import MyCharts from '@/components/content/charts/Mycharts'
    import Cdata from './data'

    export default {
      name: "KnowledgeGraph",
      components:{
        Card,
        CardContentItem,
        ScholatKGShow,
        CuttingLine,
        MyCharts

      },
      data(){
        return{
          cardTitle:['Scholat Knowledge Graph(ScholatKG)','Dataset Download','Visualization of ScholatKG'],
          cardContentData:'Konwledge Graph',
          contentDate:'20200315.zip',
          contentDetail:'detail information',
          courseData:Cdata,

        }
      },
      mounted() {
       // this.$chart.line1('Graph');
      }
    }
</script>

<style scoped>
.KnowledgeGraph{

  height: 100%;
  padding-top: 90px;
  width: 960px;
  margin: 0 auto
}
  .KGCard{
    display: flex;
  }
  .card-title {
    border-left: 3px solid #ff8822;
    padding-left: 5px
  }
  .myChart{
    height: 600px;
  }
</style>
