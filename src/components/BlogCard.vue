<template>
  <div class="card overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
    <!-- Image -->
    <div class="relative overflow-hidden h-48 bg-light">
      <img
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <svg class="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v.756a3.5 3.5 0 015.477 3.082A3.5 3.5 0 0115.513 15H20a2 2 0 012-2v-1a2 2 0 00-2-2h-.38a2 2 0 01-1.923-1.322l-.5-1.5a2 2 0 00-1.923-1.322H11a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col">
      <!-- Date -->
      <p class="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
        {{ formatDate(post.date) }}
      </p>

      <!-- Title -->
      <h3 class="text-lg font-bold text-dark mb-3 line-clamp-2">
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-sm text-dark/70 mb-4 flex-1 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Author & Read More -->
      <div class="flex items-center justify-between pt-4 border-t border-light">
        <span class="text-xs text-dark/60">{{ post.author }}</span>
        <a
          href="#"
          class="text-primary font-semibold text-sm hover:text-secondary transition-colors"
        >
          Ler Mais →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: Date;
  image?: string;
  slug?: string;
}

defineProps<{
  post: BlogPost;
}>();

const formatDate = (date: Date) => {
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
