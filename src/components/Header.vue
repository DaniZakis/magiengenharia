<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="container-max px-4 md:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <img 
            src="/images/logo/Sem fundo.png" 
            alt="Maggi Engenharia" 
            class="h-[104px] w-auto"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            :class="[
              'transition-colors duration-300',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
            ]"
          >
            Home
          </a>
          <a 
            href="/sobre" 
            :class="[
              'transition-colors duration-300',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
            ]"
          >
            Quem Somos
          </a>
          <a 
            href="/servicos" 
            :class="[
              'transition-colors duration-300',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
            ]"
          >
            Serviços
          </a>
          <a 
            href="/blog" 
            :class="[
              'transition-colors duration-300',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
            ]"
          >
            Blog
          </a>
          <a 
            href="/contato" 
            :class="[
              'px-6 py-2.5 rounded-lg font-semibold transition-all duration-300',
              isScrolled 
                ? 'bg-primary text-white hover:bg-secondary' 
                : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
            ]"
          >
            Contato
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          :class="[
            'md:hidden p-2 rounded-lg transition-colors',
            isScrolled ? 'hover:bg-light text-dark' : 'hover:bg-white/10 text-white'
          ]"
          :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-4"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav
          v-if="isOpen"
          :class="[
            'md:hidden pb-4 space-y-3 border-t',
            isScrolled ? 'border-light bg-white' : 'border-white/20 bg-dark/95 backdrop-blur-lg'
          ]"
        >
          <a
            href="/"
            :class="[
              'block py-2 transition-colors',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
            ]"
            @click="isOpen = false"
          >
            Home
          </a>
          <a
            href="/sobre"
            :class="[
              'block py-2 transition-colors',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
            ]"
            @click="isOpen = false"
          >
            Quem Somos
          </a>
          <a
            href="/servicos"
            :class="[
              'block py-2 transition-colors',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
            ]"
            @click="isOpen = false"
          >
            Serviços
          </a>
          <a
            href="/blog"
            :class="[
              'block py-2 transition-colors',
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
            ]"
            @click="isOpen = false"
          >
            Blog
          </a>
          <a
            href="/contato"
            class="block btn-primary text-center"
            @click="isOpen = false"
          >
            Contato
          </a>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Smooth transitions for mobile menu */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
