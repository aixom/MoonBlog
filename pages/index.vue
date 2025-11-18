<template>
  <div class="relative z-10 py-16 px-4 text-neutral-800 dark:text-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200">
          خوش آمدید به بلاگ من
        </h1>
        <p class="text-xl mb-10 max-w-xl mx-auto">
          این فضای شخصی من برای اشتراک‌گذاری دانش و تجربیات در دنیای توسعه وب است.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div v-for="(card, index) in infoCards" :key="index" class="card-container opacity-100 transform-none"
          :class="[isDark ? 'bg-slate-800/40 border-l-4 border-purple-500' : 'bg-white/70 border-l-4 border-indigo-400']">
          <div class="info-icon">
            <svg v-if="card.iconType === 'document'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
              </path>
            </svg>
            <svg v-if="card.iconType === 'folder'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <svg v-if="card.iconType === 'star'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/blog" class="action-button bg-purple-700 hover:bg-purple-800">
            مطالب بلاگ
          </NuxtLink>
          <NuxtLink to="/about" class="action-button bg-indigo-700 hover:bg-indigo-800">
            درباره من
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  height: 100%;
  direction: rtl;
  text-align: right;
  opacity: 0;
  transform: translateY(30px);
}

.card-container {
  color: inherit;
}

:root.light .card-container {
  color: var(--text-light);
}

:root.light .card-container h3 {
  color: var(--text-light);
}

:root.light .card-container p {
  color: var(--text-light-secondary);
}

:root.dark .card-container {
  color: var(--text-dark);
}

:root.dark .card-container h3 {
  color: var(--text-dark);
}

:root.dark .card-container p {
  color: var(--text-dark-secondary);
}

.card-container:hover {
  transform: translateY(-10px);
}

.info-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 1rem;
  color: white;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
}

:root.light .info-icon {
  background: linear-gradient(135deg, #818cf8, #60a5fa);
}

:root.dark .card-container:hover {
  box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.25);
}

:root.light .card-container:hover {
  box-shadow: 0 20px 25px -5px rgba(129, 140, 248, 0.25);
}

.action-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.action-button:hover {
  transform: translateY(-3px);
}

:root.dark .action-button.bg-purple-700:hover {
  box-shadow: 0 15px 20px -5px rgba(139, 92, 246, 0.3);
}

:root.light .action-button.bg-purple-700 {
  background-color: #8b5cf6;
}

:root.light .action-button.bg-purple-700:hover {
  background-color: #7c3aed;
  box-shadow: 0 15px 20px -5px rgba(124, 58, 237, 0.3);
}

:root.light .action-button.bg-indigo-700 {
  background-color: #6366f1;
}

:root.light .action-button.bg-indigo-700:hover {
  background-color: #4f46e5;
  box-shadow: 0 15px 20px -5px rgba(79, 70, 229, 0.3);
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { isDark, initTheme } = useTheme();

const infoCards = ref([
  {
    title: 'مطالب به‌روز',
    description: 'جدیدترین مقالات و آموزش‌های فرانت‌اند و بک‌اند را در بلاگ من پیدا کنید. تلاش می‌کنم هر هفته مطالب جدید منتشر کنم.',
    iconType: 'document'
  },
  {
    title: 'پروژه‌های کاربردی',
    description: 'نمونه‌کارها و پروژه‌های عملی با جزئیات پیاده‌سازی و کد منبع برای یادگیری بهتر.',
    iconType: 'folder'
  },
  {
    title: 'تجربیات شخصی',
    description: 'اشتراک‌گذاری تجربیات شخصی و درس‌های آموخته شده در مسیر برنامه‌نویسی.',
    iconType: 'star'
  }
]);

onMounted(() => {
  requestAnimationFrame(() => {
    const cards = document.querySelectorAll('.card-container');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  });

  initTheme();
});
</script>