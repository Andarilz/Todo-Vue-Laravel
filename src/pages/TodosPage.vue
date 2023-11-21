<script setup>

import { onMounted, ref } from "vue"
import { allTasks } from "../http/task-api"
import Form from "../components/Form.vue"
import OneTodo from "../components/OneTodo.vue";

const result = ref([])

const getTodoList = async () => {
  const { data } = await allTasks()
  result.value = data.data
}

onMounted(async () => {
  getTodoList()
})



</script>

<template>

	<section class="h-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
            <h4 class="text-center my-3 pb-3">To Do App</h4>
            <Form @updateTaskList="getTodoList" />
            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">Nubmer</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <OneTodo :result="result" @updateTaskList="getTodoList" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>




</style>

