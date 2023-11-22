
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

import OneTodo from './OneTodo.vue'


export default {

	setup(props, context){

		const result = props.result
		const updateList = () => {
			context.emit("updateTaskList")
		}

		return {
			result,
			updateList
		}
	},
	props: {
		result: Array,
		show: {
			type: Boolean,
			default: true
		}
	},
	emits: ["updateTaskList"],
	components: {
		OneTodo
	}

}


</script>

<template>

	<table class="table mb-4" v-if="show">
    <thead>
      <tr>
        <th scope="col">Nubmer</th>
        <th scope="col">Todo item</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
		</thead>
      <tbody>
			<tr v-for="(r, index) in result">
				<OneTodo :result="r" :index="index" @updateInnerTaskList="updateList" />
			</tr>
		</tbody>
	</table>

</template>
