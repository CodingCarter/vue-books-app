<template>
  <h1 v-text="title" />
  <p v-text="author" />
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
  },
};
</script>
