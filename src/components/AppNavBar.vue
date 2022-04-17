<script setup lang="ts">
import { ref } from 'vue';

const showMobileMenu = ref(false);
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item is-size-4">Noteballs</RouterLink>

      <a
        @click.prevent="showMobileMenu = !showMobileMenu"
        :class="{ 'is-active': showMobileMenu }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showMobileMenu }"
    >
      <div class="navbar-end">
        <RouterLink to="/" class="navbar-item">Notes</RouterLink>
        <RouterLink to="/stats" class="navbar-item">Stats</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-menu {
  position: absolute;
  left: 0;
  width: 100%;
}
</style>
