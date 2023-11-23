<script setup>

import Form from "../components/Form.vue"
import Tasks from "../components/tasks/Tasks.vue"
import { ref, onMounted, computed } from "vue"
import { allTasks } from "../http/task-api";

const result = ref([])

// const showCompleted = ref(true)

const getTodoList = async () => {
  const { data } = await allTasks()
  result.value = data.data
}

onMounted(async () => {
  getTodoList()
})

const completedTasks   = computed(() => result.value.filter(task =>  task.is_completed))
const uncompletedTasks = computed(() => result.value.filter(task => !task.is_completed))

const toggleTasks = ref(false)

const showCompleted = computed(() => {
  return completedTasks.value.length > 0 && uncompletedTasks.value.length > 0
})

const hideCompleted = computed(() => {
  return completedTasks.value.length > 0 && uncompletedTasks.value.length === 0
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
              <Form  @updateTaskList="getTodoList" />
              <Tasks @updateTaskList="getTodoList" :result="uncompletedTasks" />
              <div v-show="showCompleted">
                <button class="btn btn-danger" @click="toggleTasks = !toggleTasks">
                  <span v-if="toggleTasks">Hide</span>
                  <span v-else>Show</span>
                </button>
              </div>
              <Tasks style="opacity: 50%" @updateTaskList="getTodoList" :result="completedTasks" :show="toggleTasks && hideComplete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


</style>

