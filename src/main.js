import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import './style/main.scss'
import SiteMenu from './components/SiteMenu.vue'
import Jeopardy from './components/Jeopardy.vue'
import DragDrop from './components/DragDrop.vue'
import Memory from './components/Memory.vue'
import Coloring from './components/Coloring.vue'
import Resources from './components/Resources.vue'
import EnterInformation from './components/EnterInformation.vue'
import Certificate from './components/Certificate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:SiteMenu
  },
  {
    path: '/jeopardy',
    component:Jeopardy
  },
  {
    path: '/drag-drop',
    component: DragDrop
  },
  {
    path: '/memory',
    component: Memory
  },
  {
    path: '/coloring',
    component: Coloring
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/certificate',
    component: Certificate
  },
  {
    path: '/enter-info',
    component: EnterInformation
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
