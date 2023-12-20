import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
	routes,
	history: createWebHistory(),
	// linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  if(to.path === "/register"){
    next({name: "login"})
  } else {
    next()
  }
})

export default router
