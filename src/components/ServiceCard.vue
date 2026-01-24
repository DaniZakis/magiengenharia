<template>
  <a :href="`/servicos/${service.slug}`" class="block h-full">
    <div class="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <!-- Icon Section - Muted, Harmonious Colors -->
      <div :class="[
        'relative h-48 flex items-center justify-center overflow-hidden',
        categoryGradient
      ]">
        <!-- Background Decorations -->
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <!-- Icon Container -->
        <div class="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <component :is="getIconComponent(service.icon)" :class="['w-12 h-12', iconColor]" />
        </div>

        <!-- Category Badge -->
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
            {{ service.category || 'Serviço' }}
          </span>
        </div>
      </div>

      <!-- Content Section -->
      <div class="p-6">
        <!-- Title -->
        <h3 class="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors leading-tight">
          {{ service.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-dark/60 mb-5 line-clamp-3 leading-relaxed">
          {{ service.shortDescription || service.description }}
        </p>

        <!-- Link -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <span class="text-primary font-semibold text-sm flex items-center gap-2">
            Ver detalhes
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
          
          <!-- Arrow Circle -->
          <div class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-100 group-hover:bg-primary group-hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { h, computed } from 'vue';

interface Service {
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  icon?: string;
  category?: string;
}

const props = defineProps<{
  service: Service;
}>();

// Muted, harmonious category styling - earthy tones that complement gold/brown brand
const categoryStyles: Record<string, { gradient: string; iconColor: string }> = {
  'Segurança do Trabalho': {
    gradient: 'bg-gradient-to-br from-stone-600 to-stone-800',
    iconColor: 'text-stone-600'
  },
  'Documentação Técnica': {
    gradient: 'bg-gradient-to-br from-slate-500 to-slate-700',
    iconColor: 'text-slate-600'
  },
  'Engenharia Estrutural': {
    gradient: 'bg-gradient-to-br from-amber-700 to-amber-900',
    iconColor: 'text-amber-700'
  },
  'Engenharia Mecânica': {
    gradient: 'bg-gradient-to-br from-zinc-600 to-zinc-800',
    iconColor: 'text-zinc-600'
  },
  'Capacitação': {
    gradient: 'bg-gradient-to-br from-emerald-700 to-emerald-900',
    iconColor: 'text-emerald-700'
  },
  'Segurança': {
    gradient: 'bg-gradient-to-br from-orange-800 to-orange-950',
    iconColor: 'text-orange-800'
  },
  'Recursos Humanos': {
    gradient: 'bg-gradient-to-br from-sky-700 to-sky-900',
    iconColor: 'text-sky-700'
  },
  'Institucional': {
    gradient: 'bg-gradient-to-br from-primary to-secondary',
    iconColor: 'text-primary'
  },
  'default': {
    gradient: 'bg-gradient-to-br from-dark to-secondary',
    iconColor: 'text-primary'
  }
};

const getStyle = (category?: string) => {
  return categoryStyles[category || ''] || categoryStyles['default'];
};

const categoryGradient = computed(() => getStyle(props.service.category).gradient);
const iconColor = computed(() => getStyle(props.service.category).iconColor);

// Icon components mapping
const icons: Record<string, any> = {
  'shield-check': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
      ]);
    }
  },
  'building': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
      ]);
    }
  },
  'award': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
      ]);
    }
  },
  'clipboard-list': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' })
      ]);
    }
  },
  'document-text': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
      ]);
    }
  },
  'link': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' })
      ]);
    }
  },
  'users': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
      ]);
    }
  },
  'cog': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
      ]);
    }
  },
  'search': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
      ]);
    }
  },
  'folder': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' })
      ]);
    }
  },
  'fire': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' }),
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' })
      ]);
    }
  },
  'academic-cap': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 14l9-5-9-5-9 5 9 5z' }),
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' }),
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' })
      ]);
    }
  },
  'default': {
    render() {
      return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
      ]);
    }
  }
};

const getIconComponent = (iconName?: string) => {
  return icons[iconName || 'default'] || icons['default'];
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
