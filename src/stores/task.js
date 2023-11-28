import { defineStore } from "pinia"
import { allTasks, updateTask, completeTask, deleteTask } from "../http/task-api"
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

	const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
	const completedTasks   = computed(() => tasks.value.filter(task => task.is_completed))

	const fetchAllTasks = async () => {
		const { data } = await allTasks()
		tasks.value = data.data
	}

	const editTask = async (res, form) => {
    await updateTask(res.id, { ...res, name: form })
    await fetchAllTasks()
	}

	const changeStatus = async (task) => {
		await completeTask(task.id, {...task, is_completed: !task.is_completed})
		await fetchAllTasks()
	}

	const deleteTaskApi = async (id) => {
		await deleteTask(id)
		await fetchAllTasks()
		// emit("updateInnerTaskList")
	}


	return {
		tasks,
		completedTasks,
		uncompletedTasks,
		fetchAllTasks,
		editTask,
		changeStatus,
		deleteTaskApi
	}

})

