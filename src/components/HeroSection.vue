<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image with Stronger Overlay -->
    <div class="absolute inset-0">
      <img
        v-if="backgroundImage"
        :src="backgroundImage"
        alt="Engineering background"
        class="w-full h-full object-cover"
      />
      <!-- Stronger dark overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/80"></div>
    </div>

    <!-- Subtle Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative container-max px-4 md:px-6 lg:px-8 py-24 md:py-0 w-full mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column - Text Content -->
        <div class="order-2 lg:order-1">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span class="text-white/90 text-sm font-medium">Excelência em Engenharia desde 2024</span>
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
            Soluções inovadoras em engenharia estrutural, consultoria técnica e avaliações. 
            Transformamos desafios complexos em projetos de excelência.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <a 
              href="/contato" 
              class="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:gap-3"
            >
              Solicitar Orçamento
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/servicos" 
              class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Ver Servicos
            </a>
          </div>

          <!-- Stats Row -->
          <div class="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-300">
            <div class="stat-item">
              <span class="text-3xl md:text-4xl font-bold text-white">15+</span>
              <span class="text-sm text-white/60 block mt-1">Anos de Experiência</span>
            </div>
            <div class="stat-item">
              <span class="text-3xl md:text-4xl font-bold text-white">500+</span>
              <span class="text-sm text-white/60 block mt-1">Projetos Entregues</span>
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
            <div class="col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-100">
              <div class="flex items-center justify-between mb-4">
                <span class="text-white/70 text-sm font-medium">Nossos Serviços</span>
                <div class="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 rounded-full">
                  <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span class="text-green-400 text-xs font-medium">Ativos</span>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div class="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-white font-medium text-sm block">Consultoria Técnica</span>
                    <span class="text-white/50 text-xs">Assessoria especializada</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div class="w-9 h-9 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-white font-medium text-sm block">Projetos Estruturais</span>
                    <span class="text-white/50 text-xs">Engenharia de precisão</span>
                  </div>
                  <span class="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-md flex-shrink-0">Popular</span>
                </div>

                <div class="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div class="w-9 h-9 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-white font-medium text-sm block">Avaliações e Perícias</span>
                    <span class="text-white/50 text-xs">Laudos técnicos</span>
                  </div>
                  <span class="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-md flex-shrink-0">Certificado</span>
                </div>
              </div>
            </div>

            <!-- Bottom Row - 2 symmetric cards -->
            <!-- Projects Card -->
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-200">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span class="text-3xl font-bold text-white block">500+</span>
              <span class="text-white/60 text-sm">Projetos Entregues</span>
            </div>

            <!-- Team Card -->
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <span class="text-3xl font-bold text-white block">25+</span>
              <span class="text-white/60 text-sm">Profissionais</span>
            </div>

            <!-- Success Rate Card (spans 2 columns) -->
            <div class="col-span-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 animate-fade-in-up animation-delay-400">
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
defineProps<{
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
}>();
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
