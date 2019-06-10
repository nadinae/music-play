import Vue from 'vue'
import Router from 'vue-router'

import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/Rank/Rank'
import Singer from 'components/singer/singer'
import SingerDetial from 'components/singer-detial/singer-detial'
import DissList from 'components/diss-list/diss-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/rank'
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: Recommend,
        children:[
          {
            path:':id',
            component: DissList
          }
        ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children:[
        {
          path:':id',
          component:SingerDetial
        }
    ]
    }
  ]
})
