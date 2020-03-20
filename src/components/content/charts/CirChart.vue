<template>
    <div id="CirChart">

    </div>
</template>

<script>
  import insertCss from 'insert-css';
  import {User,UserTarget} from '@/utils/constructor/courseConstruct'
    export default {
      name: "CirChart",
      data(){
        return{
          CData:{
              nodes:[] ,
                // {
                //   id:'',
                //   name:''
                // },{
                //   id:'',
                //   name:''
                // }
              edges:[],
        // {
        //   source:'',
        //     target:'',
        // },{
        //   source:'',
        //     target:'',
        // },{
        //   source:'',
        //     target:'',
        // }

            // type:Object,
            // default:{
            //   nodes:{
            //     type:Object,
            //     default:{
            //       id:0,
            //       name:'aa'
            //     }
            //   },
            //   edges:{
            //     type:Object,
            //    default:{
            //      source:2272,
            //      target:2273,
            //    }
            //   }
            // },

            },
          userInfo:{},
          userTarget:{},
          idS:[]
          }
            // nodes: [
            //   {
            //     id: '0',
            //     label: '0',
            //   },
            //   {
            //     id: '1',
            //     label: '1',
            //   },
            //   {
            //     id: '2',
            //     label: '2',
            //   },
            //   {
            //     id: '3',
            //     label: '3',
            //   },
            //   {
            //     id: '4',
            //     label: '4',
            //   },
            //   {
            //     id: '5',
            //     label: '5',
            //   },
            //   {
            //     id: '6',
            //     label: '6',
            //   },
            //   {
            //     id: '7',
            //     label: '7',
            //   },
            //   {
            //     id: '8',
            //     label: '8',
            //   },
            //   {
            //     id: '9',
            //     label: '9',
            //   },
            //   {
            //     id: '10',
            //     label: '10',
            //   },
            //   {
            //     id: '11',
            //     label: '11',
            //   },
            //   {
            //     id: '12',
            //     label: '12',
            //   },
            //   {
            //     id: '13',
            //     label: '13',
            //   },
            //   {
            //     id: '14',
            //     label: '14',
            //   },
            //   {
            //     id: '15',
            //     label: '15',
            //   },
            //   {
            //     id: '16',
            //     label: '16',
            //   },
            //   {
            //     id: '17',
            //     label: '17',
            //   },
            //   {
            //     id: '18',
            //     label: '18',
            //   },
            //   {
            //     id: '19',
            //     label: '19',
            //   },
            //   {
            //     id: '20',
            //     label: '20',
            //   },
            //   {
            //     id: '21',
            //     label: '21',
            //   },
            //   {
            //     id: '22',
            //     label: '22',
            //   },
            //   {
            //     id: '23',
            //     label: '23',
            //   },
            //   {
            //     id: '24',
            //     label: '24',
            //   },
            //   {
            //     id: '25',
            //     label: '25',
            //   },
            //   {
            //     id: '26',
            //     label: '26',
            //   },
            //   {
            //     id: '27',
            //     label: '27',
            //   },
            //   {
            //     id: '28',
            //     label: '28',
            //   },
            //   {
            //     id: '29',
            //     label: '29',
            //   },
            //   {
            //     id: '30',
            //     label: '30',
            //   },
            //   {
            //     id: '31',
            //     label: '31',
            //   },
            //   {
            //     id: '32',
            //     label: '32',
            //   },
            //   {
            //     id: '33',
            //     label: '33',
            //   },
            // ],
            // edges: [
            //   {
            //     source: '0',
            //     target: '1',
            //   },
            //   {
            //     source: '0',
            //     target: '2',
            //   },
            //   {
            //     source: '0',
            //     target: '3',
            //   },
            //   {
            //     source: '0',
            //     target: '4',
            //   },
            //   {
            //     source: '0',
            //     target: '5',
            //   },
            //   {
            //     source: '0',
            //     target: '7',
            //   },
            //   {
            //     source: '0',
            //     target: '8',
            //   },
            //   {
            //     source: '0',
            //     target: '9',
            //   },
            //   {
            //     source: '0',
            //     target: '10',
            //   },
            //   {
            //     source: '0',
            //     target: '11',
            //   },
            //   {
            //     source: '0',
            //     target: '13',
            //   },
            //   {
            //     source: '0',
            //     target: '14',
            //   },
            //   {
            //     source: '0',
            //     target: '15',
            //   },
            //   {
            //     source: '0',
            //     target: '16',
            //   },
            //   {
            //     source: '2',
            //     target: '3',
            //   },
            //   {
            //     source: '4',
            //     target: '5',
            //   },
            //   {
            //     source: '4',
            //     target: '6',
            //   },
            //   {
            //     source: '5',
            //     target: '6',
            //   },
            //   {
            //     source: '7',
            //     target: '13',
            //   },
            //   {
            //     source: '8',
            //     target: '14',
            //   },
            //   {
            //     source: '9',
            //     target: '10',
            //   },
            //   {
            //     source: '10',
            //     target: '22',
            //   },
            //   {
            //     source: '10',
            //     target: '14',
            //   },
            //   {
            //     source: '10',
            //     target: '12',
            //   },
            //   {
            //     source: '10',
            //     target: '24',
            //   },
            //   {
            //     source: '10',
            //     target: '21',
            //   },
            //   {
            //     source: '10',
            //     target: '20',
            //   },
            //   {
            //     source: '11',
            //     target: '24',
            //   },
            //   {
            //     source: '11',
            //     target: '22',
            //   },
            //   {
            //     source: '11',
            //     target: '14',
            //   },
            //   {
            //     source: '12',
            //     target: '13',
            //   },
            //   {
            //     source: '16',
            //     target: '17',
            //   },
            //   {
            //     source: '16',
            //     target: '18',
            //   },
            //   {
            //     source: '16',
            //     target: '21',
            //   },
            //   {
            //     source: '16',
            //     target: '22',
            //   },
            //   {
            //     source: '17',
            //     target: '18',
            //   },
            //   {
            //     source: '17',
            //     target: '20',
            //   },
            //   {
            //     source: '18',
            //     target: '19',
            //   },
            //   {
            //     source: '19',
            //     target: '20',
            //   },
            //   {
            //     source: '19',
            //     target: '33',
            //   },
            //   {
            //     source: '19',
            //     target: '22',
            //   },
            //   {
            //     source: '19',
            //     target: '23',
            //   },
            //   {
            //     source: '20',
            //     target: '21',
            //   },
            //   {
            //     source: '21',
            //     target: '22',
            //   },
            //   {
            //     source: '22',
            //     target: '24',
            //   },
            //   {
            //     source: '22',
            //     target: '25',
            //   },
            //   {
            //     source: '22',
            //     target: '26',
            //   },
            //   {
            //     source: '22',
            //     target: '23',
            //   },
            //   {
            //     source: '22',
            //     target: '28',
            //   },
            //   {
            //     source: '22',
            //     target: '30',
            //   },
            //   {
            //     source: '22',
            //     target: '31',
            //   },
            //   {
            //     source: '22',
            //     target: '32',
            //   },
            //   {
            //     source: '22',
            //     target: '33',
            //   },
            //   {
            //     source: '23',
            //     target: '28',
            //   },
            //   {
            //     source: '23',
            //     target: '27',
            //   },
            //   {
            //     source: '23',
            //     target: '29',
            //   },
            //   {
            //     source: '23',
            //     target: '30',
            //   },
            //   {
            //     source: '23',
            //     target: '31',
            //   },
            //   {
            //     source: '23',
            //     target: '33',
            //   },
            //   {
            //     source: '32',
            //     target: '33',
            //   },
            // ],
      },
      created(){
        this.getUser();
        setTimeout(()=>{
          this.getSource();
        },2000)
      },
      watch:{

      },
      methods: {

        getUser() {
          this.$axios.get('/user/getAll').then(res => {
            const data=res.data;
         //   console.log(data.length-1);
            for(let i=0;i<=data.length-1;i++){
              this.idS[i]=parseInt(data[i].id);
              this.CData.nodes.push(new User(data[i]));
            }
           // console.log(this.idS);
            // this.CData.nodes[0].id=this.CData.nodes[0].id+'';
            // this.CData.nodes[1].id=this.CData.nodes[1].id+'';
          }).catch((err)=>{
            console.log(err)
          })
        },
        getUserById(SId){
          this.$axios.get('/user/getById/'+SId).then(res => {
            this.userTarget = res.data.userModels;
            console.log(this.userTarget);
            if(this.userTarget.length!==0)
            {
              for(let j=0;j<=this.userTarget.length-1;j++)
              {this.CData.edges.push(new UserTarget(this.CData.nodes[j],this.userTarget[j]));
               // console.log( this.CData.edges[j].source+'-> '+this.CData.edges[j].target);
              }
            }
         //   console.log( this.CData.edges[0].source+' '+this.CData.edges[0].target);
          }).catch((err)=>{
            console.log(err)
            })
        },
        getSource(){

          for(let i=0;i<=this.idS.length-1;i++){
            //console.log(this.idS[i]);
            this.getUserById(this.idS[i]);
          }
        }
      },
      mounted() {

        insertCss(`
         .g6-tooltip {
                  border: 1px solid #e2e2e2;
                  border-radius: 4px;
                  font-size: 12px;
                  color: #000;
                  background-color: rgba(255, 255, 255, 0.9);
                  padding: 10px 8px;
                  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
                }
             `);
        const graph = new this.$G6.Graph({
          container: 'CirChart', // 指定图画布的容器 id，与第 9 行的容器对应
          // 画布宽高
          width: 800,
          height: 500,
          modes: {
            default: ['drag-canvas', 'drag-node',
              {
                type: 'tooltip',
                formatText: function formatText(model) {
                  return model.name;
                },
              },
              {
                type: 'edge-tooltip',
                formatText: function formatText(model, e) {
                  const edge = e.item;
                  return (
                    '来源：' +
                    edge.getSource().getModel().label +
                    '<br/>去向：' +
                    edge.getTarget().getModel().label
                  );
                },
              },
              'activate-relations',],
          },
          layout: {
            type: 'radial',
            unitRadius: 70,
            preventOverlap: true,
            strictRadial: false,
          },
          animate: true,
          defaultNode: {
            size: 40,
            style: {
              lineWidth: 4,
              fill: '#C6E5FF',
              stroke: '#5B8FF9',
            },
          },
          defaultEdge: {
            size: 1,
            color: '#e2e2e2',
            style: {
              endArrow: {
                path: 'M 0,0 L 8,4 L 8,-4 Z',
                fill: '#e2e2e2'
              },
            },
          },
          nodeStateStyles: {
            active: {
              opacity: 1,
            },
            inactive: {
              opacity: 0.2,
            },
          },
          edgeStateStyles: {
            active: {
              stroke: '#999',
            },
          },
        });

        setTimeout(()=>{
          graph.data(this.CData);
        graph.render();
        },5000)

      }

    }
</script>

<style scoped>
#CirChart{
  height: 600px;
  width: 960px;
}
</style>
