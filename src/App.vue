<script setup>

import Navbar    from './components/Navbar.vue'

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

.table>:not(caption)>*>* {
  min-width: 85px !important;
}

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
