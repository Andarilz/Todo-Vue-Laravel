<script setup>

	import { reactive } from "vue"
	import { useAuthStore } from "../stores/auth"
	import { useRouter } from "vue-router";

	const user = reactive({
		email: "",
		password: ""
	})

	const router = useRouter()

	const store = useAuthStore()

	const { handleLogin } = store

	const handleSubmit = async () => {
		await handleLogin(user)
		router.push({name: "tasks"})
	}

</script>


<template>

	{{ user }}

	<div style="max-height: 600px; text-align: center; display: flex; justify-content: center;">

		<form>

			<h4>LOG IN</h4>
		<!-- Email input -->
		<div class="form-outline mb-4">
			<input type="email" id="form2Example1" class="form-control" v-model="user.email" />
			<label class="form-label" for="form2Example1">Email address</label>
		</div>

		<!-- Password input -->
		<div class="form-outline mb-4">
			<input type="password" id="form2Example2" class="form-control" v-model="user.password" />
			<label class="form-label" for="form2Example2">Password</label>
		</div>

		<!-- 2 column grid layout for inline styling -->
		<div class="row mb-4">
			<div class="col d-flex justify-content-center">
				<!-- Checkbox -->
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
					<label class="form-check-label" for="form2Example31"> Remember me </label>
				</div>
			</div>

			<!-- <div class="col"> -->
				<!-- Simple link -->
				<!-- <a href="#!">Forgot password?</a> -->
			<!-- </div> -->

		</div>

		<!-- Submit button -->
		<button type="button" class="btn btn-primary btn-block mb-4" @click.prevent="handleSubmit">Sign in</button>

		<!-- Register buttons -->
		<div class="text-center">
			<p>Not a member? <a href="#!">Register</a></p>
		</div>
	</form>

	</div>
</template>
