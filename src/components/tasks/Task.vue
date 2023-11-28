<script setup>

import { defineProps, computed, ref, onMounted } from 'vue'
import { updateTask } from '../../http/task-api'
import TaskActions from './TaskActions.vue'
import { useTaskStore } from "../../stores/task"
import { storeToRefs } from 'pinia';


const store = useTaskStore()
const { editTask } = store
const { hello, hardHello, newHardHello } = storeToRefs(store)
const form1 = ref("")
// const task = ref({})
const isEdit = ref(false)

const isEditTask = () => {
  isEdit.value = !isEdit.value
  // getTaskById(result.id)
  form1.value = props.result.name
}

// const getTaskById = async id => {
//   const { data } = await getTask(id)
//   task.value = data.data
//   form1.value = task.value.name
// }

const toggleEdit = () => isEdit.value = !isEdit.value

const props = defineProps({
	result: Object,
  index: Number,
  opacity: Boolean
})

// const emit = defineEmits(["updateInnerTaskList"])

// const deleteTaskApi = async (id) => {
//   await deleteTask(id)
//   // emit("updateInnerTaskList")
//   fetchAllTasks()
// }

// const changeStatus = async (task) => {
//   await completeTask(task.id, {...task, is_completed: !task.is_completed})
//   // emit("updateInnerTaskList")
//   fetchAllTasks()
// }


const edit = async (res, formData) => {
    // await updateTask(res.id, { ...res, name: form.value })
    // // emit("updateInnerTaskList")
    // await fetchAllTasks()
    // isEditTask()
    await editTask(res, formData)
    isEditTask()
}


const isCompleted = computed(() => props.result.is_completed ? "green" : "red")

const textUnderline = completed => {
  if(completed){
      return {
        "text-decoration": "line-through"
    }
  }
}

const opacityShow = {
    "opacity-50": props.opacity
}




</script>


<template>

    <th scope="row">{{ index + 1 }}</th>
        <td>{{ hardHello }} || {{ newHardHello }}</td>
			  <td
          v-if="!isEdit"
          @dblclick="isEditTask(result)"
        >
          <p :style="textUnderline(result.is_completed)" :class="opacityShow">{{ result.name }}</p>
        </td>
        <td v-else>
          <input
            type="text"
            v-model="form1"
            @keyup.enter="edit(result, form1)"
            @keyup.esc="toggleEdit"
          >
        </td>
        <td><div class="status-circle" :class="isCompleted"></div></td>
        <td>
        <TaskActions :result="result" @editHandle="isEditTask" :isEdit="isEdit" />
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

.opacity-50 {
  opacity: 50%
}
</style>
