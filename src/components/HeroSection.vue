<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image with Stronger Overlay -->
    <div class="absolute inset-0">
      <img v-if="backgroundImage" :src="backgroundImage" alt="Engineering background"
        class="w-full h-full object-cover" />
      <!-- Stronger dark overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/80"></div>
    </div>

    <!-- Subtle Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute inset-0"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;">
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative container-max px-4 md:px-6 lg:px-8 py-24 md:py-0 w-full mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left Column - Text Content -->
        <div class="order-2 lg:order-1">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span class="text-white/90 text-sm font-medium">Mais de 10 anos de excelência em Projetos e Laudos</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Construindo o
            <br />
            <span class="text-primary">Futuro</span>
            <br />
            da Engenharia
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-fade-in-up animation-delay-100">
            Gestão de Projetos, adequação às normas e projetos industriais alinhados a realidade operacional
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <a href="/contato"
              class="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:gap-3">
              Solicitar Orçamento
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/servicos"
              class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Servicos
            </a>
          </div>

          <!-- Stats Row -->
          <div
            class="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-300">
            <div class="stat-item">
              <span class="text-3xl md:text-4xl font-bold text-white">10+</span>
              <span class="text-sm text-white/60 block mt-1">Anos de Experiência</span>
            </div>
            <div class="stat-item">
              <span class="text-3xl md:text-4xl font-bold text-white">250+</span>
              <span class="text-sm text-white/60 block mt-1">Projetos e Laudos Entregues</span>
            </div>
            <div class="stat-item">
              <span class="text-3xl md:text-4xl font-bold text-white">98%</span>
              <span class="text-sm text-white/60 block mt-1">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Symmetric Card Grid -->
        <div class="order-1 lg:order-2 hidden lg:block">
          <div class="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">

            <!-- Top Row -->
            <!-- Services Card (spans 2 columns) -->
            <div
              class="col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-100">
              <div class="flex items-center justify-between mb-4">
                <span class="text-white/70 text-sm font-medium">Alguns de nossos serviços</span>
              </div>

              <div class="space-y-3">
                <a v-for="(item, index) in displayedServices" :key="item.service.slug"
                  :href="'/servicos/' + item.service.slug"
                  class="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" :class="item.color.bg">
                    <svg class="w-4 h-4" :class="item.color.text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.iconPath" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-white font-medium text-sm block">{{ item.service.title }}</span>
                    <span class="text-white/50 text-xs">{{ item.service.shortDescription || item.service.category ||
                      'Serviço especializado' }}</span>
                  </div>
                  <svg class="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Bottom Row - 2 symmetric cards -->
            <!-- Projects Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-200">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span class="text-3xl font-bold text-white block">250+</span>
              <span class="text-white/60 text-sm">Projetos Entregues</span>
            </div>

            <!-- Experience Card -->
            <div
              class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <span class="text-3xl font-bold text-white block">10+</span>
              <span class="text-white/60 text-sm">Anos de Experiência</span>
            </div>

            <!-- Success Rate Card (spans 2 columns) -->
            <div
              class="col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-400">
              <div class="flex items-center justify-between mb-3">
                <span class="text-white/70 text-sm font-medium">Taxa de Sucesso</span>
                <span class="text-primary font-bold text-lg">98.7%</span>
              </div>
              <div class="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary to-green-400 rounded-full animate-progress-bar"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-scroll-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Service {
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  icon?: string;
  category?: string;
}

const props = defineProps<{
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  services?: Service[];
}>();

const colorSchemes = [
  { bg: 'bg-primary/20', text: 'text-primary' },
  { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  { bg: 'bg-green-500/20', text: 'text-green-400' },
  { bg: 'bg-rose-500/20', text: 'text-rose-400' },
  { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
];

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const iconPathMap: Record<string, string> = {
  'shield-check': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'building': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'award': 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  'clipboard-list': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  'document-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'link': 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  'users': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  'cog': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'search': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  'folder': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  'fire': 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  'academic-cap': 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
};

const defaultIconPath = 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';

const displayedServices = ref<{ service: Service; color: typeof colorSchemes[0]; iconPath: string }[]>([]);

onMounted(() => {
  if (props.services && props.services.length > 0) {
    const shuffled = shuffle(props.services).slice(0, 3);
    const shuffledColors = shuffle(colorSchemes);
    displayedServices.value = shuffled.map((service, i) => ({
      service,
      color: shuffledColors[i % shuffledColors.length],
      iconPath: iconPathMap[service.icon || 'document-text'] || defaultIconPath,
    }));
  }
});
</script>

<style scoped>
/* Base Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progress-bar {
  from {
    width: 0;
  }

  to {
    width: 98.7%;
  }
}

@keyframes scroll-line {
  0% {
    opacity: 1;
    transform: scaleY(0);
    transform-origin: top;
  }

  50% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }

  50.1% {
    transform-origin: bottom;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

/* Animation Classes */
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-progress-bar {
  animation: progress-bar 2s ease-out forwards;
  animation-delay: 0.8s;
  width: 0;
}

.animate-scroll-line {
  animation: scroll-line 2s ease-in-out infinite;
}

/* Animation Delays */
.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

/* Stats Hover Effect */
.stat-item {
  position: relative;
}

.stat-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #AA8315, transparent);
  transition: width 0.3s ease;
}

.stat-item:hover::after {
  width: 100%;
}
</style>
