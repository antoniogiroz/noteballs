<script setup lang="ts">
import { ref } from 'vue';

const showMobileMenu = ref(false);
</script>

<template>
  <nav class="navbar is-success" aria-label="main navigation" role="navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item is-size-4">Noteballs</RouterLink>

        <a
          :class="{ 'is-active': showMobileMenu }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="appNavbarMenu"
          @click.prevent="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="appNavbarMenu"
        class="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item">Notes</RouterLink>
          <RouterLink to="/stats" class="navbar-item">Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
