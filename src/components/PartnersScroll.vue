<template>
  <section class="overflow-hidden bg-white py-12 md:py-16">
    <div class="container-max px-4 md:px-6">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
          Parcerias de Sucesso
        </h2>
        <p class="text-lg text-dark/70 max-w-2xl mx-auto">
          Confiamos e trabalhamos com as melhores empresas do mercado
        </p>
      </div>

      <!-- Scrolling Partners Container -->
      <div class="relative">
        <!-- Gradient Overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        <!-- Scrolling Wrapper -->
        <div class="overflow-hidden">
          <div
            class="flex animate-scroll space-x-8 md:space-x-12 py-8"
            :style="{
              animation: 'scroll 30s linear infinite'
            }"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <!-- Duplicate partners for seamless loop -->
            <div
              v-for="partner in partners"
              :key="`${partner.id}-1`"
              class="flex-shrink-0"
            >
              <PartnerLogo :partner="partner" />
            </div>
            <!-- Repeat for seamless scroll -->
            <div
              v-for="partner in partners"
              :key="`${partner.id}-2`"
              class="flex-shrink-0"
            >
              <PartnerLogo :partner="partner" />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Version (Static Grid) -->
      <div class="grid grid-cols-2 md:hidden gap-4 mt-8">
        <div
          v-for="partner in partners.slice(0, 4)"
          :key="partner.id"
          class="flex items-center justify-center"
        >
          <PartnerLogo :partner="partner" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PartnerLogo from './PartnerLogo.vue';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

const isPaused = ref(false);

// Sample partner logos - replace with real ones
const partners: Partner[] = [
  {
    id: '1',
    name: 'Parceiro 1',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+1',
    website: '#'
  },
  {
    id: '2',
    name: 'Parceiro 2',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+2',
    website: '#'
  },
  {
    id: '3',
    name: 'Parceiro 3',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+3',
    website: '#'
  },
  {
    id: '4',
    name: 'Parceiro 4',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+4',
    website: '#'
  },
  {
    id: '5',
    name: 'Parceiro 5',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+5',
    website: '#'
  },
  {
    id: '6',
    name: 'Parceiro 6',
    logo: 'https://via.placeholder.com/150x100?text=Parceiro+6',
    website: '#'
  },
];
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

/* Pause animation on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
