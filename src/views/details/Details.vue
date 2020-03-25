<template>
    <div class="Details">
      <div class="details-content" >
        <swiper ></swiper>
        <DetailsDiv v-for="a in 8" :key="a" v-show="currentPage==1">
          <div slot="details-title">开学不返校，多名学者分享“学者网课程+”在线教学体验</div>
          <div slot="img"><img src="@/assets/img/image1.png" style="width: 130px;height: 90px"></div>
          <div slot="content">{{detailContent}}</div>

          <div slot="author"><a href="http://www.scholat.com/ytang" style="color: #cfcece;">{{author}}</a></div>
          <div slot="date">{{date}}</div>
          <div slot="pageView" >{{pageView}}</div>


        </DetailsDiv>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          >
        </el-pagination>
      </div>


    </div>
</template>

<script>
  import Swiper from '@/components/common/swiper/Swiper'
  import DetailsDiv from "@/components/content/details/DetailsDiv";
    export default {
        name: "Details",
      data(){
          return{
            detailContent:'学者网是主要面向高校的社交网络，提供科研教学协作平台。疫情防控，“学者网课程+在线课堂”是一种简单易用的网络教学模式，而且可以帮助教师实现学术空间管理、教学科研和学术交流一体化协同工作。 本文分享岭南师范学院吴涛教授、贵州大学李丹杨副教授、华南师范大学潘家辉和刘海副教授等学者的应用推文，供参考。[1]吴涛，在线教学战“疫”，多平台联合作',
            author:"汤庸",
            date:"2020-03-04",
            pageView:"897",
            currentPage:1,// 当前页码
            pageSize:8,// 每页大小
            total:40
          }
      },
      components:{
          Swiper,
          DetailsDiv
      },
      methods: {
        //? 长度改变----改变每页显示的条数的时候  自动触发
        handleSizeChange(val) {
          console.log("每页" + val+"条")
        },
        // 当前改变----当前页码改变之后，触发这个函数
        handleCurrentChange(val) {
          console.log("当前页：" + val)
        }
      }
    }
</script>

<style scoped>

  .details-content{
    padding-top: 90px;
    width: 960px;
    margin: 0 auto
  }
  .el-pagination {
    text-align: center;
  }


</style>
