
<script setup>

import OneTodo from "./OneTodo.vue"
import { defineEmits, defineProps } from "vue"

const emit = defineEmits(["updateTaskList"])


const updateList = () => {
	emit("updateTaskList")
}

defineProps({
	result: Array
})

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
