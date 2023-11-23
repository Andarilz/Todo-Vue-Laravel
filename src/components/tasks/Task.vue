<script setup>

import { defineProps, defineEmits, computed, ref } from 'vue'
import { deleteTask, completeTask, updateTask } from '../../http/task-api'
import TaskActions from './TaskActions.vue'

const isEdit = ref(false)

const form1 = ref("")

const isEditTask = () => {
  isEdit.value = !isEdit.value
}

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

const editTask = async (res) => {
    await updateTask(res.id, { ...res, name: form1.value })
    emit("updateInnerTaskList")
    isEditTask()
}

</script>


<template>

    <th scope="row">{{ index + 1 }}</th>
			  <td v-if="!isEdit">{{ result.name }}</td>
        <td v-else><input type="text" v-model="form1" @keyup.enter="editTask(result)"></td>
        <td><div class="status-circle" :class="isCompleted"></div></td>
        <td>
        <TaskActions @editEmit="isEditTask" :result="result" @changeStatusInner="changeStatus($event)" @deleteTaskApiInner="deleteTaskApi($event)" />
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
