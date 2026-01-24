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
    excerpt: 'Conheça as principais tendências e inovações que estão revolucionando o mercado de projetos estruturais. Sustentabilidade, eficiência e tecnologia se unem para criar soluções mais inteligentes e resilientes.',
    author: 'João Silva',
    date: new Date('2024-01-22'),
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    slug: 'tendencias-projetos-2024'
  },
  {
    id: '2',
    title: 'Como Otimizar Custos em Obras de Consultoria',
    excerpt: 'Descubra estratégias práticas e comprovadas para reduzir custos em projetos de engenharia sem comprometer a qualidade. Análise detalhada de casos reais de sucesso e melhores práticas.',
    author: 'Maria Santos',
    date: new Date('2024-01-18'),
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    slug: 'otimizar-custos-obras'
  },
  {
    id: '3',
    title: 'Importância da Perícia Técnica em Disputas Judiciais',
    excerpt: 'Entenda por que laudos técnicos precisos são fundamentais em processos judiciais e como podem influenciar decisões. Experiência de 15 anos em perícias complexas e litigação.',
    author: 'Carlos Mendes',
    date: new Date('2024-01-15'),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    slug: 'pericia-tecnica-judicial'
  },
  {
    id: '4',
    title: 'BIM: A Revolução Digital na Engenharia Civil',
    excerpt: 'Building Information Modeling está transformando a forma como projetos são desenvolvidos e executados. Saiba como implementar BIM em sua empresa e aumentar a eficiência.',
    author: 'João Silva',
    date: new Date('2024-01-10'),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    slug: 'bim-revolucao-digital'
  },
  {
    id: '5',
    title: 'Sustentabilidade em Projetos de Engenharia',
    excerpt: 'Conheça as melhores práticas para desenvolver projetos sustentáveis que respeitam o meio ambiente e garantem economia a longo prazo. Certificações e normas essenciais.',
    author: 'Ana Costa',
    date: new Date('2024-01-08'),
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    slug: 'sustentabilidade-engenharia'
  },
  {
    id: '6',
    title: 'Manutenção Preventiva em Estruturas: Por que Investir?',
    excerpt: 'A manutenção preventiva é fundamental para garantir a longevidade e segurança das estruturas. Saiba como planejar e executar uma estratégia eficaz de manutenção.',
    author: 'Roberto Oliveira',
    date: new Date('2024-01-05'),
    image: 'https://images.unsplash.com/photo-1576092160550-2173dba999ef?w=400&h=300&fit=crop',
    slug: 'manutencao-preventiva'
  }
];
</script>
