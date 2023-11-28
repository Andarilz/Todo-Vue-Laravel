import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
	routes,
	history: createWebHistory(),
	// linkActiveClass: "active"
})

router.beforeEach((to, from) => {
	if(to.path == "/login"){
		return { name: "register" }
	}
})

export default router
