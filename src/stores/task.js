import { defineStore } from "pinia"
import { allTasks } from "../http/task-api"
import { ref, reactive, computed } from "vue"

const tmp = {
	state: () => ({
		tasks: [],
	}),
	getters: {
		completedTasks: state => state.tasks.filter(task => task.is_completed),
		uncompletedTasks(){
			return this.tasks.filter(task => !task.is_completed)
		}
	}, actions: {
		async fetchAllTasks(){
			const { data } = await allTasks()
			this.tasks = data.data
		}
	}
}

export const useTaskStore = defineStore("taskStore", () => {
	const tasks = ref([])
	// const task  = variable({
	// 	id: null,
	// 	name: null,
	// 	is_completed: false
	// })

	const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
	const completedTasks   = computed(() => tasks.value.filter(task =>  task.is_completed))

	const fetchAllTasks = async () => {
		const { data } = await allTasks()
		tasks.value = data.data
	}

	return {
		tasks,
		uncompletedTasks,
		completedTasks,
		fetchAllTasks
	}

})

