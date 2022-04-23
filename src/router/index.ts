import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: HomeView,
    },
    {
      path: "/breakfast",
      name: "breakfast",
      component: () => import("../views/BreakfastView.vue"),
    },
    {
      path: "/dinner",
      name: "dinner",
      component: () => import("../views/DinnerView.vue"),
    },
    {
      path: "/something-sweet",
      name: "something-sweet",
      component: () => import("../views/SomethingSweetView.vue"),
    },
    {
      path: "/recipe",
      name: "recipe",
      component: () => import("../views/RecipeView.vue"),
    },
  ],
});

export default router;
