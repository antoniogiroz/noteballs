<script setup lang="ts"></script>

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

    <div v-for="i in 4" :key="i" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem impedit
          doloribus consequuntur explicabo non, deleniti molestiae eveniet cum
          optio vel repudiandae fugiat. Praesentium, eligendi? Quod soluta omnis
          aperiam eum atque.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
