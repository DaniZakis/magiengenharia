<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-max px-4 md:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">M</span>
          </div>
          <span class="hidden sm:inline font-serif font-bold text-lg text-dark">Maggi</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-dark hover:text-primary transition-colors">Home</a>
          <a href="/servicos" class="text-dark hover:text-primary transition-colors">Serviços</a>
          <a href="/contato" class="btn-primary">Contato</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg hover:bg-light transition-colors"
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
          class="md:hidden pb-4 space-y-3 border-t border-light"
        >
          <a
            href="/"
            class="block py-2 text-dark hover:text-primary transition-colors"
            @click="isOpen = false"
          >
            Home
          </a>
          <a
            href="/servicos"
            class="block py-2 text-dark hover:text-primary transition-colors"
            @click="isOpen = false"
          >
            Serviços
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
import { ref } from 'vue';

const isOpen = ref(false);
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
