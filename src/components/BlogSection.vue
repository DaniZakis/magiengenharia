<template>
  <section class="section-padding bg-light border-t border-light">
    <div class="container-max">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
            Notícias e Artigos
          </h2>
          <p class="text-lg text-dark/70 max-w-2xl">
            Fique atualizado com as últimas novidades e insights do mercado de engenharia
          </p>
        </div>
        <a href="/blog" class="btn-secondary mt-6 md:mt-0 inline-block whitespace-nowrap">
          Ver Todos os Artigos
        </a>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          client:load
        />
      </div>

      <!-- View All Button (Mobile) -->
      <div class="text-center mt-12 md:hidden">
        <a href="/blog" class="btn-secondary">
          Ver Todos os Artigos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: Date;
  image?: string;
  slug?: string;
}

// Sample blog posts
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Tendências em Projetos Estruturais para 2024',
    excerpt: 'Conheça as principais tendências e inovações que estão revolucionando o mercado de projetos estruturais. Sustentabilidade, eficiência e tecnologia se unem para criar soluções mais inteligentes.',
    author: 'João Silva',
    date: new Date('2024-01-22'),
    image: 'https://via.placeholder.com/400x300?text=Blog+Post+1',
    slug: 'tendencias-projetos-2024'
  },
  {
    id: '2',
    title: 'Como Otimizar Custos em Obras de Consultoria',
    excerpt: 'Descubra estratégias práticas e comprovadas para reduzir custos em projetos de engenharia sem comprometer a qualidade. Análise detalhada de casos reais de sucesso.',
    author: 'Maria Santos',
    date: new Date('2024-01-18'),
    image: 'https://via.placeholder.com/400x300?text=Blog+Post+2',
    slug: 'otimizar-custos-obras'
  },
  {
    id: '3',
    title: 'Importância da Perícia Técnica em Disputas Judiciais',
    excerpt: 'Entenda por que laudos técnicos precisos são fundamentais em processos judiciais e como podem influenciar decisões. Experiência de 15 anos em pericias complexas.',
    author: 'Carlos Mendes',
    date: new Date('2024-01-15'),
    image: 'https://via.placeholder.com/400x300?text=Blog+Post+3',
    slug: 'pericia-tecnica-judicial'
  }
];
</script>
