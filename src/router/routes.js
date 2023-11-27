import TodosPage from '../pages/TodosPage.vue'
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"


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
	}
]

export default routes
