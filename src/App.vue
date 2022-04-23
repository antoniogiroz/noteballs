<script setup lang="ts">
import AppNavBar from './components/AppNavBar.vue';
</script>

<template>
  <AppNavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>
