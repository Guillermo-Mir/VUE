import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import FoodList from "@/views/FoodList.vue";
import TrainingPanel from "@/views/TrainingPanel.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/foods", name: "Foods", component: FoodList },
    { path: "/training", name: "Training", component: TrainingPanel },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
