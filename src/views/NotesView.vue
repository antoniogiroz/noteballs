<script setup lang="ts">
import NoteItem from '@/components/notes/NoteItem.vue';
import type { Note } from '@/types/note';
import { v4 as uuid } from 'uuid';
import { ref } from 'vue';

const newNoteRef = ref<HTMLTextAreaElement | null>(null);
const newNote = ref('');

const notes = ref<Note[]>([
  { id: 'id1', body: 'Note 1' },
  { id: 'id2', body: 'Note 2' },
  { id: 'id3', body: 'Note 3' },
  { id: 'id4', body: 'Note 4' },
]);

function addNote() {
  if (!newNote.value?.trim()) {
    return;
  }

  notes.value.unshift({
    id: uuid(),
    body: newNote.value,
  });

  newNote.value = '';
  newNoteRef.value?.focus();
}
</script>

<template>
  <div class="notes">
    <div class="has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add new note"
            @keyup.ctrl.enter="addNote"
          ></textarea>
          <p class="help is-white">
            <span class="is-family-monospace">Ctrl + Enter</span> to add the
            note
          </p>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            @click="addNote"
          >
            Add new note
          </button>
        </div>
      </div>
    </div>

    <NoteItem v-for="note in notes" :key="note.id" :note="note" class="mb-4" />
  </div>
</template>
