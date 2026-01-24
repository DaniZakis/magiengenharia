<template>
  <div class="card overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow group">
    <!-- Image -->
    <a :href="`/blog/${post.slug}`" class="block relative overflow-hidden h-48 bg-light">
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <svg class="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-1M8 7h.01M12 7h.01M8 11h.01M12 11h4" />
        </svg>
      </div>
      <!-- Category Badge -->
      <div v-if="post.category" class="absolute top-3 left-3">
        <span class="px-2 py-1 text-xs font-semibold bg-dark/80 text-white rounded">
          {{ post.category }}
        </span>
      </div>
    </a>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col">
      <!-- Date & Read Time -->
      <div class="flex items-center gap-3 mb-2">
        <p class="text-xs text-primary font-semibold uppercase tracking-wide">
          {{ formatDate(post.date) }}
        </p>
        <span v-if="post.readTime" class="text-xs text-dark/50">
          • {{ post.readTime }} de leitura
        </span>
      </div>

      <!-- Title -->
      <a :href="`/blog/${post.slug}`" class="block">
        <h3 class="text-lg font-bold text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {{ post.title }}
        </h3>
      </a>

      <!-- Excerpt -->
      <p class="text-sm text-dark/70 mb-4 flex-1 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Author & Read More -->
      <div class="flex items-center justify-between pt-4 border-t border-light">
        <span class="text-xs text-dark/60">{{ post.author }}</span>
        <a
          :href="`/blog/${post.slug}`"
          class="text-primary font-semibold text-sm hover:text-secondary transition-colors"
        >
          Ler Mais →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '../data/blog';

defineProps<{
  post: BlogPost;
}>();

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
