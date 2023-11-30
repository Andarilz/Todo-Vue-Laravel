<script setup>

import Navbar    from './components/Navbar.vue'
import TodosPage from './pages/TodosPage.vue'

</script>

<template>

  <Navbar />

  <router-view v-slot="{Component}">
    <transition mode="out-in" name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<style>

.btn {
  width: 105px;
  margin: 5px;
}

.table>:not(caption)>*>* {
  min-width: 180px
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
