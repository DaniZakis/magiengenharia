<template>
  <section class="section-padding bg-light border-t border-light">
    <div class="container-max">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-dark mb-4">
            Notícias e Artigos
          </h2>
          <p class="text-lg text-dark/70 max-w-2xl">
            Fique por dentro das últimas novidades da área de engenharia, gestão de projeto e normas industriais.
          </p>
        </div>
        <a href="/blog" class="btn-secondary mt-6 md:mt-0 inline-block whitespace-nowrap">
          Ver Todos os Artigos
        </a>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard
          v-for="post in recentPosts"
          :key="post.slug"
          :post="post"
        />
      </div>

      <!-- View All Button (Mobile) -->
      <div class="text-center mt-12 md:hidden">
        <a href="/blog" class="btn-secondary">
          Ver Todos os Artigos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue';
import { getRecentPosts, type BlogPost } from '../data/blog';

// Get the 3 most recent posts from the actual blog data
const recentPosts: BlogPost[] = getRecentPosts(3);
</script>
