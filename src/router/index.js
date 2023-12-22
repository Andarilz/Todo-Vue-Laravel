import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"
import { useAuthStore } from "../stores/auth";

const router = createRouter({
	routes,
	history: createWebHistory(),
	// linkActiveClass: "active"
})

router.beforeEach(to => {

  const store = useAuthStore()

  // if(to.path === "/register"){
  //   next({name: "login"})
  // } else {
  //   next()
  // }

  if(to.meta.auth && !store.isLoggedIn) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath
      }
    }
  }




})

export default router
