import TodosPage from '../pages/TodosPage.vue'
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"
import PageNotFound from "../pages/pageNotFound.vue"
import Home from "../pages/Home.vue"


const routes = [
	{
		path: "/tasks",
		component: TodosPage,
		name: "tasks"
	},
	{
		path: "/login",
		component: Login,
		name: "login"
	},
	{
		path: "/register",
		component: Register,
		name: "register"
	},
	{
		path: "/:notFound(.*)",
		component: PageNotFound,
		name: "404erorr"
	},
	{
		path: "/",
		component: Home,
		name: "home"
	}
]

export default routes
