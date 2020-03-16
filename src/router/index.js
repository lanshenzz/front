import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import KnowledgeGraph from '@/views/knowledgeGraph/KnowledgeGraph'
import Course from '@/views/course/Course'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/knowledgeGraph',
      name: 'KnowledgeGraph',
      component: KnowledgeGraph
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
  ]
})
