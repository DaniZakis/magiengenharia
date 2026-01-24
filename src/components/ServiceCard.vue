<template>
  <div class="card group overflow-hidden h-full flex flex-col hover:shadow-xl">
    <!-- Image -->
    <div class="relative overflow-hidden h-48 bg-light">
      <img
        v-if="service.image"
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
        <svg class="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col">
      <!-- Icon (if provided) -->
      <div v-if="service.icon" class="mb-3 text-3xl">
        {{ service.icon }}
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
        {{ service.title }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-dark/70 mb-4 flex-1">
        {{ service.shortDescription || service.description }}
      </p>

      <!-- Link -->
      <a
        :href="`/servicos/${service.slug}`"
        class="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group/link"
      >
        Saiba Mais
        <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  icon?: string;
}

defineProps<{
  service: Service;
}>();
</script>
