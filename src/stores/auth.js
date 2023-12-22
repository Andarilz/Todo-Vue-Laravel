import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { csrfCookie, login, register, logout, getUser } from "../http/auth-api"

export const useAuthStore = defineStore("authStore", () => {

	const user = ref(null)

	const isLoggedIn = computed(() => !!user.value)

	const fetchUser = async () => {
		const { data } = await getUser()
		user.value = data
	}

	const handleLogin = async credentials => {

		await csrfCookie()

		await login(credentials)

		await fetchUser()

	}

	const handleRegister = async newUser => {

		await handleRegister(newUser)

		await login({
			email: newUser.email,
			password: newUser.password
		})

	}

	const logout = async() => {

		await logout()

		user.value = null

	}

	return {
		user,
		isLoggedIn,
		fetchUser,
		handleLogin,
		handleRegister,
		logout
	}

})