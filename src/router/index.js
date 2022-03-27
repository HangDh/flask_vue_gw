import { createRouter, createWebHistory } from "vue-router";
import SharkComp from "../components/SharkComp.vue";

const routes = [
  {
    path: "/shark",
    name: "Shark",
    component: SharkComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
