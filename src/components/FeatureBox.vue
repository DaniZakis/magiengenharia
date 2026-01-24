<template>
  <div class="flex flex-col items-center text-center">
    <!-- Icon -->
    <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <div class="text-4xl">
        {{ icon }}
      </div>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-dark mb-3">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-dark/70 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
