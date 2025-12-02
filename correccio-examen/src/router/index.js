import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", component:()=> import('@/views/Home.vue') },
    {path:'/foods', component:()=> import('@/views/FoodList.vue')},
    {path:'/trainings', component:()=> import('@/views/TrainingPanel.vue')}
  ],
})

export default router
