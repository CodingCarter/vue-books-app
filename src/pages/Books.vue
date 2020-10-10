<template>
  <router-link
    v-for="book in books"
    :key="book.title"
    :to="`/books/${formatSlug(book.title)}`"
  >
    <h1 v-text="book.title" />
  </router-link>
</template>

<script>
import { formatSlug } from "@/utils/format-slug.js";

export default {
  props: {
    books: Array,
  },
  methods: { formatSlug },
};
</script>
