<script setup>

import Form from "../components/Form.vue"
import Tasks from "../components/tasks/Tasks.vue"
import { ref, onMounted, computed } from "vue"
import { allTasks } from "../http/task-api"
import { useTaskStore } from "../stores/task"
import { storeToRefs } from "pinia"
import { useAuthStore } from "../stores/auth"

const store = useTaskStore()
const authStore = useAuthStore()
const result = ref([])
const { tasks, completedTasks, uncompletedTasks } = storeToRefs(store)
const { fetchAllTasks } = store

// const getTodoList = async () => {
//   fetchAllTasks()
// }

onMounted(async () => {
    await fetchAllTasks()
})


const toggleTasks = ref(false)

const showCompleted = computed(() => {
  return completedTasks.value.length > 0
})

const hideCompleted = computed(() => {
  return uncompletedTasks.value.length > 0
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
                <Form  />
                <Tasks :result="uncompletedTasks" :show="hideCompleted" />
              <div v-show="showCompleted">
                <button class="btn btn-danger" @click="toggleTasks = !toggleTasks">
                  <span v-if="toggleTasks">Hide</span>
                  <span v-else>Show</span>
                </button>
              </div>
              <Tasks :opacity="true" :result="completedTasks" :show="toggleTasks && showCompleted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


</style>

