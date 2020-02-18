import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'

import App from '../App'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import BookUpdate from '../views/BookUpdate'
import PageFour from '../views/PageFour'

import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/book',
  //   component:Book
  // },
  {
    path:'/',
    name:'图书馆',
    component:Index,
    show:true,
    redirect:'/bookManage',
    children:[
      {
        path:'/bookManage',
        name:'查询图书',
        component:BookManage
      },
      {
        path:'/addBook',
        name:'添加图书',
        component:AddBook
      }
    ]
  },
  {
    show:false,
    path:'/update',
    name:'更新',
    component:BookUpdate
  }
  // {
  //  path:'/nav',
  //  name:'导航二',
  //  component:Index,
  //  children:[
  //   {
  //     path:'/pageThree',
  //     name:'页面3',
  //     component:PageThree
  //   },
  //   {
  //     path:'/pageFour',
  //     name:'页面4',
  //     component:PageFour
  //   }
  //  ] 
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
