<script setup>

import { ref, defineEmits } from 'vue'
import { createTask } from '../http/task-api';

const emit = defineEmits([
	"emitAddTask"
])


const form1 = ref("")

const saveTask = async (event) => {
  event.preventDefault()
  if(form1.value.length > 5){
    await createTask({ name: form1.value })
    form1.value = ""
		emit("emitAddTask")
  }
}


</script>

<!-- <script>
import { ref } from 'vue'
import { createTask } from '../http/task-api'

export default {
  setup(props, context) {
    const form1 = ref("")

    const saveTask = async (event) => {
      event.preventDefault()
      if (form1.value.length > 5) {
        await createTask({ name: form1.value })
        form1.value = ""
        // Используем emit для генерации события
        context.emit('emitAddTask')
      }
    }

    return {
      form1,
      saveTask
    }
  }
}
</script> -->

<template>
	<form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
		<div class="col-12">
			<div class="form-outline">
				<input type="text" id="form1" class="form-control" v-model="form1" />
				<label class="form-label" for="form1">Enter a task here</label>
			</div>
		</div>
		<div class="col-12">
			<button @click="saveTask" class="btn btn-primary">Save Task</button>
		</div>
	</form>
</template>

<style>

</style>
