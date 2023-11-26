<script setup>

import { defineProps, defineEmits } from 'vue'
import { deleteTask, completeTask, updateTask, getTask } from '../../http/task-api'
import { useTaskStore } from "../../stores/task"

const props = defineProps({
	result: Object
})

// const emit = defineEmits(["changeStatusInner", "deleteTaskApiInner", "editEmit"])

const store = useTaskStore()

const { fetchAllTasks } = store

const deleteTaskApi = async (id) => {
  await deleteTask(id)
  // emit("updateInnerTaskList")
  fetchAllTasks()
}

const changeStatus = async (task) => {
  await completeTask(task.id, {...task, is_completed: !task.is_completed})
  // emit("updateInnerTaskList")
  fetchAllTasks()
}


// const editTask = async (res) => {
//     await updateTask(res.id, { ...res, name: form1.value })
//     // emit("updateInnerTaskList")
//     await fetchAllTasks()
//     isEditTask()
// }

</script>

<template>

	<button @click="deleteTaskApi(result.id)" class="btn btn-danger">Delete</button>
  <button @click="changeStatus(result)" class="btn btn-success">{{ result.is_completed ? "Restart" : "Finish" }}</button>
	<button @click="editTask(result)" class="btn btn-info">Edit</button>
</template>
