import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingView from '../views/LandingView.vue'
import AppartmentView from '../views/AppartmentView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import HausordnungView from '../views/HausordnungView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingView
  },
  {
    path: '/wohnung/:ferienwohnung',
    name: 'Wohnung',
    component: AppartmentView
  },
  {
    path: '/hausordnung',
    name: 'Hausordnung',
    component: HausordnungView
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: ImpressumView
  }
]

const router = new VueRouter({
  routes
})

export default router
