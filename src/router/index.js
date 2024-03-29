import Vue from 'vue'
import Router from 'vue-router'

import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import SingerDetial from 'components/singer-detial/singer-detial'
import DissList from 'components/diss-list/diss-list'
import TopList from 'components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/recommend'
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        children:[
          {
            path:':id',
            component: SingerDetial
          }
        ]
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
      component: Rank,
      children:[
        {
          path:':id',
          component: TopList
        }
      ]
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
