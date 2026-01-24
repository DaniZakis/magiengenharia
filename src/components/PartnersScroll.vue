<template>
  <section class="relative py-20 md:py-28 bg-light overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-[0.4]">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(170,131,21,0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container-max px-4 md:px-6 relative">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="text-primary text-sm font-medium">Parceiros de Confiança</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-dark mb-3">
            Parcerias de Sucesso
          </h2>
          <p class="text-lg text-dark/60 max-w-xl">
            Empresas que confiam em nossa expertise e qualidade de serviço
          </p>
        </div>
        
        <!-- Stats -->
        <div class="flex items-center gap-8">
          <div class="text-center">
            <span class="text-4xl font-bold text-primary block">16+</span>
            <span class="text-dark/60 text-sm">Parceiros Ativos</span>
          </div>
          <div class="w-px h-12 bg-dark/10"></div>
          <div class="text-center">
            <span class="text-4xl font-bold text-primary block">10+</span>
            <span class="text-dark/60 text-sm">Anos de Parceria</span>
          </div>
        </div>
      </div>

      <!-- Desktop: Scrolling Partners -->
      <div class="hidden md:block relative">
        <!-- Gradient Overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light via-light/80 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light via-light/80 to-transparent z-10 pointer-events-none"></div>

        <!-- First Row - Scrolling Left -->
        <div class="overflow-hidden mb-6">
          <div
            class="flex gap-6"
            :class="['partners-scroll-left', isPaused ? 'paused' : '']"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <div
              v-for="partner in partnersRow1"
              :key="`row1-${partner.id}-1`"
              class="flex-shrink-0"
            >
              <div class="group relative bg-white rounded-2xl p-6 shadow-sm border border-dark/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 w-44 h-28 flex items-center justify-center">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div
              v-for="partner in partnersRow1"
              :key="`row1-${partner.id}-2`"
              class="flex-shrink-0"
            >
              <div class="group relative bg-white rounded-2xl p-6 shadow-sm border border-dark/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 w-44 h-28 flex items-center justify-center">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row - Scrolling Right -->
        <div class="overflow-hidden">
          <div
            class="flex gap-6"
            :class="['partners-scroll-right', isPaused ? 'paused' : '']"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <div
              v-for="partner in partnersRow2"
              :key="`row2-${partner.id}-1`"
              class="flex-shrink-0"
            >
              <div class="group relative bg-white rounded-2xl p-6 shadow-sm border border-dark/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 w-44 h-28 flex items-center justify-center">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div
              v-for="partner in partnersRow2"
              :key="`row2-${partner.id}-2`"
              class="flex-shrink-0"
            >
              <div class="group relative bg-white rounded-2xl p-6 shadow-sm border border-dark/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 w-44 h-28 flex items-center justify-center">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Version (Grid) -->
      <div class="grid grid-cols-2 gap-4 md:hidden">
        <div
          v-for="partner in partners.slice(0, 6)"
          :key="`mobile-${partner.id}`"
          class="bg-white rounded-xl p-4 shadow-sm border border-dark/5 flex items-center justify-center h-24"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-w-full max-h-full object-contain opacity-70"
          />
        </div>
      </div>

      <!-- Bottom Trust Banner -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6 px-8 bg-white rounded-2xl border border-dark/5 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span class="font-semibold text-dark block">Qualidade Certificada</span>
            <span class="text-dark/50 text-sm">Normas ISO 9001</span>
          </div>
        </div>
        
        <div class="hidden sm:block w-px h-12 bg-dark/10"></div>
        
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span class="font-semibold text-dark block">Suporte Dedicado</span>
            <span class="text-dark/50 text-sm">Atendimento personalizado</span>
          </div>
        </div>
        
        <div class="hidden sm:block w-px h-12 bg-dark/10"></div>
        
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <span class="font-semibold text-dark block">Entrega Rápida</span>
            <span class="text-dark/50 text-sm">Prazos cumpridos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

const isPaused = ref(false);

// Real partner logos from /public/images/partners/
const partners: Partner[] = [
  { id: '1', name: 'Parceiro 1', logo: '/images/partners/00bc070cca554892fc9f7c2949316e4e.png', website: '#' },
  { id: '2', name: 'Parceiro 2', logo: '/images/partners/0262833fc3b143a74bd472d19bfd56de.png', website: '#' },
  { id: '3', name: 'Parceiro 3', logo: '/images/partners/0763e71ab7ed268e08ccffe0c6fc9eaa.png', website: '#' },
  { id: '4', name: 'Parceiro 4', logo: '/images/partners/0eb2cee273692054dc6078c016edba92.png', website: '#' },
  { id: '5', name: 'Parceiro 5', logo: '/images/partners/14fce3bebf9ff20ba63a4a268010c257.png', website: '#' },
  { id: '6', name: 'Parceiro 6', logo: '/images/partners/23003b6b1d7380ebeedbf2f3ae860be7.png', website: '#' },
  { id: '7', name: 'Parceiro 7', logo: '/images/partners/392055571b40f21df103394b7e1d7f0e.png', website: '#' },
  { id: '8', name: 'Parceiro 8', logo: '/images/partners/4265b083f94b1b188a63792b6bb25e04.png', website: '#' },
  { id: '9', name: 'Parceiro 9', logo: '/images/partners/4ba0e35e876b73c89d8a0f937f811f07.png', website: '#' },
  { id: '10', name: 'Parceiro 10', logo: '/images/partners/656fd3ff0769374fc0b3390cef26e4b4.png', website: '#' },
  { id: '11', name: 'Parceiro 11', logo: '/images/partners/65e63b0b7a3b6a1cabb50cd700e0f94e.png', website: '#' },
  { id: '12', name: 'Parceiro 12', logo: '/images/partners/6a9e34ef70724af68dc3d89907df0b1f.png', website: '#' },
  { id: '13', name: 'Parceiro 13', logo: '/images/partners/b6b63874349e9ee6b423bd66ed86573d.png', website: '#' },
  { id: '14', name: 'Parceiro 14', logo: '/images/partners/c05b3130fbb9c8a071e09ae76b7a637a.png', website: '#' },
  { id: '15', name: 'Parceiro 15', logo: '/images/partners/e92581d183c7e01703f7a1a3879f1367.png', website: '#' },
  { id: '16', name: 'Parceiro 16', logo: '/images/partners/fe28ea465f5b206530e2de35c8f0b0c1.png', website: '#' },
];

// Split partners into two rows
const partnersRow1 = computed(() => partners.slice(0, 8));
const partnersRow2 = computed(() => partners.slice(8, 16));
</script>

<style scoped>
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.partners-scroll-left {
  animation: scrollLeft 25s linear infinite;
  will-change: transform;
}

.partners-scroll-right {
  animation: scrollRight 25s linear infinite;
  will-change: transform;
}

.partners-scroll-left.paused,
.partners-scroll-right.paused {
  animation-play-state: paused;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .partners-scroll-left,
  .partners-scroll-right {
    animation: none;
  }
}
</style>
