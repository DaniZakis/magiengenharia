<template>
  <section class="relative min-h-screen md:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-dark to-secondary">
    <!-- Background Image -->
    <div v-if="backgroundImage" class="absolute inset-0 opacity-20">
      <img
        :src="backgroundImage"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>

    <!-- Content -->
    <div class="relative container-max px-4 md:px-6 py-12 md:py-0">
      <div class="max-w-2xl">
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6 animate-fade-in">
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p v-if="subtitle" class="text-lg md:text-2xl text-light/90 mb-8 animate-fade-in" style="animation-delay: 0.1s">
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in" style="animation-delay: 0.2s">
          <a v-if="primaryCtaUrl && primaryCtaLabel" :href="primaryCtaUrl" class="btn-primary text-center sm:text-left">
            {{ primaryCtaLabel }}
          </a>
          <a v-if="secondaryCtaUrl && secondaryCtaLabel" :href="secondaryCtaUrl" class="btn-outline text-center sm:text-left text-white border-white hover:bg-white hover:text-dark">
            {{ secondaryCtaLabel }}
          </a>
        </div>

        <!-- Accent Line -->
        <div class="mt-8 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-slide-up"></div>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
}>();
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}
</style>
