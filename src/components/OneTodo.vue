<script setup>

import { defineProps, defineEmits, computed, isVNode } from 'vue'
import { deleteTask, completeTask } from '../http/task-api';

const props = defineProps({
	result: Object,
  index: Number
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

const isCompleted = computed(() => props.result.is_completed ? "green" : "red")


</script>


<template>

    <th scope="row">{{ index + 1 }}</th>
			<td>{{ result.name }}</td>
        <td><div class="status-circle" :class="isCompleted"></div></td>
        <td>
        <button @click="deleteTaskApi(result.id)" class="btn btn-danger">Delete</button>
        <button @click="changeStatus(result)" class="btn btn-success">{{ result.is_completed ? "Restart" : "Finish" }}</button>
    </td>

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
