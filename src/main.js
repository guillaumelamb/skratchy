import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage.vue'
import Illustration from './components/arts/Illustration.vue'
import LicenceProject from './components/arts/LicenceProject.vue'
import Graphism from './components/arts/Graphism.vue'
import Photography from './components/arts/Photography.vue'

Vue.config.productionTip = false

const routes = [{
    path: '/',
    component: Homepage
  },
  {
    path: '/illustration',
    component: Illustration,
  },
  {
    path: '/licence-project',
    component: LicenceProject,
  },
  {
    path: '/graphism',
    component: Graphism
  },
  {
    path: '/photography',
    component: Photography
  }
]
const router = new VueRouter({
  routes,
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')