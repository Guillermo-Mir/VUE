import { createRouter, createWebHistory } from 'vue-router'
/*import FrameworkDetail from '@/views/FrameworkDetail.vue'*/
import Home from '@/views/Home.vue'
import Frameworks from '@/views/Frameworks.vue'
import FrameworkVersions from '@/views/FrameworkVersions.vue'
import FrameworkDetail2 from '@/views/FrameworkDetail2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/frameworks",
      name: "frameworks",
      component: Frameworks,
      children: [{
        path: ":id",
        name: "frameworkDetail2",
        component: FrameworkDetail2
      }]
    }
  ],
})

export default router
