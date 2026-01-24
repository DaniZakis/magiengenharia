<template>
  <div class="relative w-full">
    <!-- Carousel Container -->
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
      >
        <!-- Carousel Items -->
        <div
          v-for="(service, index) in services"
          :key="index"
          :style="{ width: `${100 / itemsPerPage}%` }"
          class="px-4 md:px-6 flex-shrink-0"
        >
          <ServiceCard :service="service" />
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="flex justify-center items-center gap-2 mt-8">
      <button
        v-for="(_, index) in dotsCount"
        :key="index"
        @click="currentIndex = index"
        :class="[
          'h-3 rounded-full transition-all duration-300',
          currentIndex === index
            ? 'w-8 bg-primary'
            : 'w-3 bg-primary/30 hover:bg-primary/50'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
        type="button"
      />
    </div>

    <!-- Previous Button -->
    <button
      @click="handlePrevious"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors -translate-x-5 md:-translate-x-12"
      aria-label="Previous slide"
      type="button"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Next Button -->
    <button
      @click="handleNext"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors translate-x-5 md:translate-x-12"
      aria-label="Next slide"
      type="button"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Auto-play Indicator -->
    <div class="mt-4 text-center text-xs text-dark/50">
      {{ currentIndex + 1 }} / {{ dotsCount }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ServiceCard from './ServiceCard.vue';

interface Service {
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  icon?: string;
}

const props = defineProps<{
  services: Service[];
}>();

const currentIndex = ref(0);
let autoplayInterval: NodeJS.Timeout | null = null;

// Calculate items per page based on screen size
const itemsPerPage = ref(3); // Desktop
const dotsCount = computed(() => Math.ceil(props.services.length / itemsPerPage.value));

const updateItemsPerPage = () => {
  const width = window.innerWidth;
  if (width < 768) {
    itemsPerPage.value = 1; // Mobile
  } else if (width < 1024) {
    itemsPerPage.value = 2; // Tablet
  } else {
    itemsPerPage.value = 3; // Desktop
  }
};

const nextSlide = () => {
  const maxIndex = Math.ceil(props.services.length / itemsPerPage.value) - 1;
  currentIndex.value = (currentIndex.value + 1) % (maxIndex + 1);
};

const previousSlide = () => {
  const maxIndex = Math.ceil(props.services.length / itemsPerPage.value) - 1;
  currentIndex.value = (currentIndex.value - 1 + maxIndex + 1) % (maxIndex + 1);
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const handlePrevious = () => {
  previousSlide();
  resumeAutoplayAfter();
};

const handleNext = () => {
  nextSlide();
  resumeAutoplayAfter();
};

// Resume autoplay when user stops interacting
const resumeAutoplayAfter = () => {
  stopAutoplay();
  setTimeout(() => {
    startAutoplay();
  }, 3000);
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener('resize', updateItemsPerPage);
});
</script>

<style scoped>
.carousel {
  overflow: hidden;
}
</style>
