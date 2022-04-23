<script setup lang="ts">
import type { Note } from '@/types/note';

export interface Props {
  note: Note;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.body }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
