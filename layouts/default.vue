<template>
  <SpaceBackground :stars-count="getStarsCount" :show-moon="showMoon" :intensity="getIntensity">
    <!-- هدر -->
    <AppHeader class="relative z-20" />
    
    <!-- محتوای اصلی -->
    <main class="relative z-10 min-h-[calc(100vh-64px-120px)]">
      <slot />
    </main>
    
    <!-- فوتر -->
    <AppFooter class="relative z-20" />
  </SpaceBackground>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SpaceBackground from '~/components/SpaceBackground.vue';
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

const route = useRoute();

const getStarsCount = computed(() => {
  if (route.path === '/') return 150;
  if (route.path === '/about') return 60;
  if (route.path.includes('/blog')) return 20;
  return 100;
});

const showMoon = computed(() => {
  if (route.path === '/') return true;
  if (route.path === '/about') return true;
  if (route.path.includes('/blog')) return false;
  return true;
});

const getIntensity = computed(() => {
  if (route.path === '/') return 'high';
  if (route.path === '/about') return 'medium';
  if (route.path.includes('/blog')) return 'low';
  return 'high';
});
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
}


.moon::after {
    content: '';
    position: absolute;
    top: 60px;
    left: 80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(180, 180, 180, 0.8);
}

</style>