
<!-- <script setup>

import OneTodo from "./OneTodo.vue"
import { defineEmits, defineProps } from "vue"

const emit = defineEmits(["updateTaskList"])


const updateList = () => {
	emit("updateTaskList")
}

defineProps({
	result: Array
})

</script> -->

<script>

import OneTodo from "./OneTodo.vue"

export default {

	setup(props, context){

		const updateList = () => {
			context.emit("updateTaskList")
		}

		const result = props.result || []

		return {
			OneTodo,
			result,
			updateList
		}

	},
	props: {
			result: Array
		},
	components: {
		OneTodo
	}
}



</script>

<template>

	<table class="table mb-4">
    <thead>
      <tr>
        <th scope="col">Nubmer</th>
        <th scope="col">Todo item</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
		</thead>
      <tbody>
			<OneTodo :result="result" @updateTaskList="updateList" />
		</tbody>
	</table>

</template>
