<template>

	<section class="h-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
            <h4 class="text-center my-3 pb-3">To Do App</h4>
            <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div class="col-12">
                <div class="form-outline">
                  <input type="text" id="form1" class="form-control" v-model="form1" />
                  <label class="form-label" for="form1">Enter a task here</label>
                </div>
              </div>
              <div class="col-12">
                <button @click="saveTask" class="btn btn-primary">Save</button>
              </div>
              <div class="col-12">
                <button class="btn btn-warning">Get tasks</button>
              </div>
            </form>
            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in result">
                  <th scope="row">{{ r.id }}</th>
                  <td>{{ r.name }}</td>
                  <!-- <td><div class="status-circle" :class="getStatusClass(r.is_completed)"></div></td> -->
                  <td><div class="status-circle" :class="{ 'green': r.is_completed, 'red': !r.is_completed }"></div></td>
                  <td>
                    <button @click="deleteTaskApi(r.id)" class="btn btn-danger">Delete</button>
                    <button @click="changeStatus(r)" class="btn btn-success">{{ r.is_completed ? "Restart" : "Finish" }}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>

import { onMounted, ref } from "vue"
import { allTasks, deleteTask, completeTask, createTask } from "../http/task-api";

const result = ref([])

const getTodoList = async () => {
  const { data } = await allTasks()
  result.value = data.data
}

onMounted(async () => {
  getTodoList()
})

const deleteTaskApi = async (id) => {
  await deleteTask(id)
  getTodoList()
}

// const getStatusClass = (value) => {
//   return {
//     green: value,
//     red: !value
//   }
// }

const changeStatus = async (task) => {
  await completeTask(task.id, {...task, is_completed: !task.is_completed})
  getTodoList()
}

const form1 = ref("")

const saveTask = async (event) => {
  event.preventDefault()
  if(form1.value.length > 5){
    await createTask({ name: form1.value })
    form1.value = ""
    getTodoList()
  }
}

</script>

<style scoped>

/* Основной стиль для круга */
.status-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%; /* Делает элемент круглым */
  display: inline-block;
  margin-right: 5px; /* Можно настроить отступы, если нужно */
}

/* Стиль для зеленого круга */
.green {
  background-color: green;
}

/* Стиль для красного круга */
.red {
  background-color: red;
}


</style>

