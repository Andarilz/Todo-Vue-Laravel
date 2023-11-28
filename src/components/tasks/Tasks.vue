
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

import Task from './Task.vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../stores/task'


export default {

	setup(props, context){

		const result = props.result
		const store  = useTaskStore()
		const { fetchAllTasks } = store
		const updateList = () => {
			// context.emit("updateTaskList")
			fetchAllTasks()
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
		},
		opacity: {
			type: Boolean,
			default: false
		}
	},
	// emits: ["updateTaskList"],
	components: {
		Task
	}

}


</script>

<template>

	<table class="table mb-4" v-if="show" >
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
				<Task :opacity="opacity" :result="r" :index="index"/>
			</tr>
		</tbody>
	</table>

</template>
