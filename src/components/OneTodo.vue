<script setup>

import { defineProps, defineEmits } from 'vue'
import { deleteTask, completeTask } from '../http/task-api';

defineProps({
	result: Array
})

const emit = defineEmits(["updateInnerTaskList"])

const deleteTaskApi = async (id) => {
  await deleteTask(id)
  emit("updateInnerTaskList")
}

const changeStatus = async (task) => {
  await completeTask(task.id, {...task, is_completed: !task.is_completed})
  emit("updateInnerTaskList")
}

</script>


<template>

	<tr v-for="(r, index) in result">
    <th scope="row">{{ index + 1 }}</th>
			<td>{{ r.name }}</td>
        <td><div class="status-circle" :class="{ 'green': r.is_completed, 'red': !r.is_completed }"></div></td>
        <td>
        <button @click="deleteTaskApi(r.id)" class="btn btn-danger">Delete</button>
        <button @click="changeStatus(r)" class="btn btn-success">{{ r.is_completed ? "Restart" : "Finish" }}</button>
    </td>
	</tr>

</template>


<style scoped>

.status-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}


.green {
  background-color: green;
}


.red {
  background-color: red;
}

</style>
