import type { Note } from '@/types/note';
import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

export const useNotesStore = defineStore({
  id: 'notes',

  state: () => ({
    notes: [
      { id: 'id1', body: 'Note 1' },
      { id: 'id2', body: 'Note 2' },
      { id: 'id3', body: 'Note 3' },
      { id: 'id4', body: 'Note 4' },
    ] as Note[],
  }),

  actions: {
    addNote(noteBody: string) {
      this.notes.unshift({
        id: uuid(),
        body: noteBody,
      });
    },

    deleteNote(id: string) {
      this.notes = this.notes.filter((note: Note) => note.id !== id);
    },
  },
});
