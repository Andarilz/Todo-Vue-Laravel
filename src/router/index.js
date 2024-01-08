import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(async to => {

  const store = useAuthStore()

  await store.fetchUser()

  if(to.meta.auth && !store.isLoggedIn) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath
      }
    }
  } else if(to.meta.guest && store.isLoggedIn){
    return {
      name: "tasks",
      query: {
        redirect: to.fullPath
      }
    }
  }
})

export default router
