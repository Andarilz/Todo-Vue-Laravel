import TodosPage from '../pages/TodosPage.vue'
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import PageNotFound from "../pages/pageNotFound.vue"
import Home from "../pages/Home.vue"


const routes = [
	{
		path: "/tasks",
		component: TodosPage,
		name: "tasks",
		meta: {
			auth: true
		}
	},
	{
		path: "/login",
		component: Login,
		name: "login",
		meta: {
			auth: false,
			guest: true
		}
	},
	{
		path: "/register",
		component: Register,
		name: "register",
		meta: {
			auth: true,
			guest: true
		}
	},
	{
		path: "/:notFound(.*)",
		component: PageNotFound,
		name: "404erorr",
		meta: {
			auth: false
		}
	},
	{
		path: "/",
		component: Home,
		name: "home",
		meta: {
			auth: true
		}
	}
]

export default routes
