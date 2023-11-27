<script setup>

import Navbar    from './components/Navbar.vue'
import TodosPage from './pages/TodosPage.vue'

</script>

<template>

  <Navbar />

  <router-view></router-view>

</template>

<style>

.btn {
  width: 105px;
  margin: 5px;
}

.table>:not(caption)>*>* {
  min-width: 180px
}

</style>
