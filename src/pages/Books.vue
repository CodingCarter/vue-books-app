<template>
  <router-link
    v-for="book in books"
    :key="book.title"
    :to="`/books/${book.slug}`"
  >
    <h1 v-text="book.title" />
  </router-link>
</template>

<script>
export default {
  props: {
    books: Array,
  },
};
</script>
