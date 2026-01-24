<template>
  <div class="flex items-center justify-center">
    <a
      v-if="partner.website"
      :href="partner.website"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block"
    >
      <img
        :src="partner.logo"
        :alt="partner.name"
        class="h-20 md:h-24 object-contain transition-transform duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
      />
    </a>
    <img
      v-else
      :src="partner.logo"
      :alt="partner.name"
      class="h-20 md:h-24 object-contain filter grayscale"
    />
  </div>
</template>

<script setup lang="ts">
interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

defineProps<{
  partner: Partner;
}>();
</script>

<style scoped>
img {
  max-width: 150px;
}

@media (max-width: 768px) {
  img {
    max-width: 120px;
  }
}
</style>
