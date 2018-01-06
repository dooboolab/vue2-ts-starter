import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Main from "@/components/navigator/Main.vue";
import Login from "@/components/screen/Login.vue";
import Intro from "@/components/screen/Intro.vue";

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          name: 'Intro',
          path: '',
          component: Intro,
        },
      ],
    },
    // { path: '*', component: NotFound },
  ],
});

