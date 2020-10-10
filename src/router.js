import { createRouter, createWebHistory } from "vue-router";

import { formatSlug } from "@/utils/format-slug.js";

import booksData from "@/data/books.yaml";
const { books } = booksData;

const pages = {
  home: () => import("@/pages/Home.vue"),
  books: () => import("@/pages/Books.vue"),
  $404: () => import("@/pages/404.vue"),
};

const templates = {
  book: () => import("@/templates/Book.vue"),
};

const routes = [
  { path: "/:pathMatch(.*)*", component: pages.$404 },
  { path: "/", component: pages.home },
  {
    path: "/books",
    component: pages.books,
    props: { books },
    children: books.map((book) => ({
      path: formatSlug(book.title),
      component: templates.book,
      props: book,
    })),
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
