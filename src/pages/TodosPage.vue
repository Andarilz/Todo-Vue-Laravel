<script setup>

import Form from "../components/Form.vue"
import Table from "../components/Table.vue"
import { ref, onMounted, computed } from "vue"
import { allTasks } from "../http/task-api";

const result = ref([])

const getTodoList = async () => {
  const { data } = await allTasks()
  result.value = data.data
}

onMounted(async () => {
  getTodoList()
})

const completedTasks   = computed(() => result.value.filter(task =>  task.is_completed))
const uncompletedTasks = computed(() => result.value.filter(task => !task.is_completed))

</script>

<template>
  <section class="h-100" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <h4 class="text-center my-3 pb-3">To Do App</h4>
              <Form  @updateTaskList="getTodoList" />
              <Table @updateTaskList="getTodoList" :result="completedTasks" />
              <Table @updateTaskList="getTodoList" :result="uncompletedTasks" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


</style>

