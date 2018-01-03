import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Main from "@/components/Main.vue";
import Test from "@/components/Test.vue";

export default new Router({
  routes: [
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/",
      name: "main",
      component: Main,
    },
  ],
});

