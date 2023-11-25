import { defineStore } from "pinia"

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [
			{
				id: 1,
				name: "Hello",
				is_completed: true
			},
			{
				id: 2,
				name: "Hello",
				is_completed: true
			},
			{
				id: 3,
				name: "Hello",
				is_completed: false
			},
		],
	}),
	getters: {
		completedTasks:   (state) => state.tasks.filter(task => task.is_completed),
		uncompletedTasks(){
			return this.tasks.filter(task => !task.is_completed)
		},
		uncompletedCount(){
			return this.uncompletedTasks.length
		}
	}
})
