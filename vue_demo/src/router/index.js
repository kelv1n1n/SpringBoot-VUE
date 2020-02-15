import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'

import App from '../App'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import PageThree from '../views/PageThree'
import PageFour from '../views/PageFour'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/book',
  //   component:Book
  // },
  {
    path:'/',
    name:'导航一',
    component:App,
    children:[
      {
        path:'/pageOne',
        name:'页面1',
        component:PageOne
      },
      {
        path:'/pageTwo',
        name:'页面2',
        component:PageTwo
      }
    ]
  },
  {
   path:'/nav',
   name:'导航二',
   component:App,
   children:[
    {
      path:'/pageThree',
      name:'页面3',
      component:PageThree
    },
    {
      path:'/pageFour',
      name:'页面4',
      component:PageFour
    }
   ] 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
