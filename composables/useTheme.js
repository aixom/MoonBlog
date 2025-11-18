import { ref } from 'vue';

const isDark = ref(true);
export function useTheme() {
  // تابع تغییر تم
  function toggleTheme() {
    isDark.value = !isDark.value;

    if (process.client) {
      // ذخیره تنظیمات در localStorage
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');

      // اعمال کلاس به بدنه سند
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }

  // راه‌اندازی تم در ابتدا
  function initTheme() {
    if (process.client) {
      // بررسی تنظیمات ذخیره شده
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        // استفاده از تنظیمات سیستم
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      // اعمال تم اولیه
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  };
}