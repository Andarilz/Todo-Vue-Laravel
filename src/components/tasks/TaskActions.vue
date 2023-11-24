<script setup>

import { defineProps, defineEmits } from 'vue'

const props = defineProps({
	result: Object
})

const emit = defineEmits(["changeStatusInner", "deleteTaskApiInner", "editEmit"])

const changeStatusInner = status => {
	emit("changeStatusInner", status)
}

const deleteTaskApiInner = id => {
	emit("deleteTaskApiInner", id)
}

const editTask = () => {
	emit("editEmit")
}

</script>

<template>

	<button @click="deleteTaskApiInner(result.id)" class="btn btn-danger">Delete</button>
  <button @click="changeStatusInner(result)" class="btn btn-success">{{ result.is_completed ? "Restart" : "Finish" }}</button>
	<button @click="editTask" class="btn btn-info">Edit</button>
</template>
