<script setup lang="ts">
import type { Note } from '@/types/note';
import { ref } from 'vue';

const notes = ref<Note[]>([
  { id: 'id1', body: 'Note 1' },
  { id: 'id2', body: 'Note 2' },
  { id: 'id3', body: 'Note 3' },
  { id: 'id4', body: 'Note 4' },
]);
</script>

<template>
  <div class="notes">
    <div class="has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add new note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card mb-4">
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
  </div>
</template>
