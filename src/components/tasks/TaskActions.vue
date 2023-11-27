<script setup>

import { defineProps, defineEmits } from 'vue'
// import { deleteTask, completeTask, updateTask, getTask } from '../../http/task-api'
import { useTaskStore } from "../../stores/task"

const props = defineProps({
	result: Object,
  isEdit: Boolean
})

const emit = defineEmits(["editHandle"])
// const emit = defineEmits(["changeStatusInner", "deleteTaskApiInner", "editEmit"])

const store = useTaskStore()

const { changeStatus, deleteTaskApi, editTask } = store

// const deleteTaskApi = async (id) => {
//   await deleteTask(id)
//   fetchAllTasks()
//   // emit("updateInnerTaskList")
// }

// const changeStatus = async (task) => {
//   await completeTask(task.id, {...task, is_completed: !task.is_completed})
//   fetchAllTasks()
//   // emit("updateInnerTaskList")
// }


const editTaskHandle = async (res) => {
    editTask(res)
    emit("editHandle")
}

</script>

<template>

	<button @click="deleteTaskApi(result.id)" class="btn btn-danger">Delete</button>
  <button @click="changeStatus(result)" class="btn btn-success">{{ result.is_completed ? "Restart" : "Finish" }}</button>
	<button @click="editTaskHandle(result)" v-if="!isEdit" class="btn btn-info">Edit</button>
</template>
