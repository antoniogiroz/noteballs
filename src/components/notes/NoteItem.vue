<script setup lang="ts">
import type { Note } from '@/types/note';
import { computed } from 'vue';

export interface Props {
  note: Note;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'delete', id: string): void;
}>();

const charactersLength = computed(() => {
  const count = props.note.body.length;
  return count === 1 ? '1 character' : `${count} characters`;
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.body }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="emit('delete', note.id)"
      >
        Delete
      </a>
    </footer>
  </div>
</template>
