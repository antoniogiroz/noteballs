<script setup lang="ts">
import NoteItem from '@/components/notes/NoteItem.vue';
import { useNotesStore } from '@/stores/notes';
import { ref } from 'vue';

const notesStore = useNotesStore();

const newNoteRef = ref<HTMLTextAreaElement | null>(null);
const newNote = ref('');

function addNote() {
  if (!newNote.value?.trim()) {
    return;
  }

  notesStore.addNote(newNote.value.trim());

  newNote.value = '';
  newNoteRef.value?.focus();
}

function deleteNote(id: string) {
  notesStore.deleteNote(id);
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

    <NoteItem
      v-for="note in notesStore.notes"
      :key="note.id"
      :note="note"
      class="mb-4"
      @delete="deleteNote"
    />
  </div>
</template>
