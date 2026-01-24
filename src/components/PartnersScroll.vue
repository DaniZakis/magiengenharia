<template>
  <section class="bg-white py-12 md:py-16">
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

      <!-- Desktop: Scrolling Partners Container -->
      <div class="hidden md:block relative">
        <!-- Gradient Overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <!-- Scrolling Wrapper -->
        <div class="overflow-hidden">
          <div
            class="flex gap-8 md:gap-12 py-8"
            :class="['partners-scroll', isPaused ? 'paused' : 'scrolling']"
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

        <!-- Hover Area for Pause/Resume -->
        <div
          class="absolute inset-0"
          @mouseenter="isPaused = true"
          @mouseleave="isPaused = false"
        ></div>
      </div>

      <!-- Mobile Version (Static Grid) -->
      <div class="grid grid-cols-2 md:hidden gap-4">
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

// Real partner logos from /public/images/partners/
const partners: Partner[] = [
  {
    id: '1',
    name: 'Parceiro 1',
    logo: '/images/partners/00bc070cca554892fc9f7c2949316e4e.png',
    website: '#'
  },
  {
    id: '2',
    name: 'Parceiro 2',
    logo: '/images/partners/0262833fc3b143a74bd472d19bfd56de.png',
    website: '#'
  },
  {
    id: '3',
    name: 'Parceiro 3',
    logo: '/images/partners/0763e71ab7ed268e08ccffe0c6fc9eaa.png',
    website: '#'
  },
  {
    id: '4',
    name: 'Parceiro 4',
    logo: '/images/partners/0eb2cee273692054dc6078c016edba92.png',
    website: '#'
  },
  {
    id: '5',
    name: 'Parceiro 5',
    logo: '/images/partners/14fce3bebf9ff20ba63a4a268010c257.png',
    website: '#'
  },
  {
    id: '6',
    name: 'Parceiro 6',
    logo: '/images/partners/23003b6b1d7380ebeedbf2f3ae860be7.png',
    website: '#'
  },
  {
    id: '7',
    name: 'Parceiro 7',
    logo: '/images/partners/392055571b40f21df103394b7e1d7f0e.png',
    website: '#'
  },
  {
    id: '8',
    name: 'Parceiro 8',
    logo: '/images/partners/4265b083f94b1b188a63792b6bb25e04.png',
    website: '#'
  },
  {
    id: '9',
    name: 'Parceiro 9',
    logo: '/images/partners/4ba0e35e876b73c89d8a0f937f811f07.png',
    website: '#'
  },
  {
    id: '10',
    name: 'Parceiro 10',
    logo: '/images/partners/656fd3ff0769374fc0b3390cef26e4b4.png',
    website: '#'
  },
  {
    id: '11',
    name: 'Parceiro 11',
    logo: '/images/partners/65e63b0b7a3b6a1cabb50cd700e0f94e.png',
    website: '#'
  },
  {
    id: '12',
    name: 'Parceiro 12',
    logo: '/images/partners/6a9e34ef70724af68dc3d89907df0b1f.png',
    website: '#'
  },
  {
    id: '13',
    name: 'Parceiro 13',
    logo: '/images/partners/b6b63874349e9ee6b423bd66ed86573d.png',
    website: '#'
  },
  {
    id: '14',
    name: 'Parceiro 14',
    logo: '/images/partners/c05b3130fbb9c8a071e09ae76b7a637a.png',
    website: '#'
  },
  {
    id: '15',
    name: 'Parceiro 15',
    logo: '/images/partners/e92581d183c7e01703f7a1a3879f1367.png',
    website: '#'
  },
  {
    id: '16',
    name: 'Parceiro 16',
    logo: '/images/partners/fe28ea465f5b206530e2de35c8f0b0c1.png',
    website: '#'
  },
];
</script>

<style scoped>
@keyframes slideInfinite {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.partners-scroll {
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;
  will-change: transform;
}

.partners-scroll.scrolling {
  animation: slideInfinite 80s linear infinite;
}

.partners-scroll.paused {
  animation-play-state: paused;
}

/* Ensure smooth rendering */
@media (prefers-reduced-motion: no-preference) {
  .partners-scroll.scrolling {
    animation: slideInfinite 80s linear infinite;
  }
}
</style>
