import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
	routes,
	history: createWebHistory(),
	// linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  if (to.path === "/register") {
    // Проверка на наличие авторизации.
    // Замените эту логику на вашу логику проверки авторизации.

    // Пример: если пользователь не аутентифицирован, перенаправить на страницу входа.
      next({ name: "login", query: { message: "helloWorld", redirect: to.fullPath } });
      // Если пользователь аутентифицирован, продолжить переход к запрошенному маршруту.
    } else {
			next()
		}
});


export default router
