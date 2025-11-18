<template>
    <div :class="[
        'space-background', 
        `intensity-${intensity}`,
        themeClass
    ]">
        <!-- ستاره‌ها - فقط در حالت تاریک -->
        <div v-for="i in starsCount" :key="i" class="star animate-twinkle" :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: isDark ? '1' : '0'
        }"></div>

        <!-- ماه - فقط در حالت تاریک -->
        <div v-if="showMoon" class="moon bg-moon-gradient animate-float shadow-moon" :style="{ opacity: isDark ? '1' : '0' }"></div>

        <!-- خورشید - فقط در حالت روشن -->
        <div class="sun" :style="{ opacity: !isDark ? '1' : '0' }"></div>
        
        <!-- ابرها - فقط در حالت روشن -->
        <div v-for="i in 5" :key="`cloud-${i}`" class="cloud" :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 30}%`,
            animationDelay: `${Math.random() * 30}s`,
            opacity: !isDark ? (0.7 + (Math.random() * 0.3)) : '0',
            transform: `scale(${0.5 + Math.random()})`,
        }"></div>
        
        <!-- محتوای اصلی -->
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from '~/composables/useTheme';

const { isDark } = useTheme();
const themeClass = computed(() => isDark.value ? 'dark-theme' : 'light-theme');

defineProps({
    starsCount: {
        type: Number,
        default: 100
    },
    showMoon: {
        type: Boolean,
        default: true
    },
    intensity: {
        type: String,
        default: 'high',
        validator: (value) => ['high', 'medium', 'low'].includes(value)
    }
});
</script>

<style>
/* استایل‌های پایه */
.space-background {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  transition: background 0.8s ease;
}

/* ---- تم تاریک (شب) ---- */
.dark-theme {
  transition: background 0.8s ease;
}

/* شدت بالا - صفحه اصلی */
.dark-theme.intensity-high {
  background: linear-gradient(135deg, #0a0724, #1e1b4b, #24243e);
}

.dark-theme.intensity-high::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(76, 0, 112, 0.25), transparent 80%);
  animation: pulse 8s infinite alternate;
  z-index: 1;
  pointer-events: none;
}

/* شدت متوسط - صفحه درباره من */
.dark-theme.intensity-medium {
  background: linear-gradient(135deg, #0a0724, #1e1b4b, #24243e);
}

/* شدت پایین - صفحه بلاگ */
.dark-theme.intensity-low {
  background: linear-gradient(135deg, #0c0c1d, #1a1a3a, #20203a);
}

/* ستاره‌ها */
.star {
  position: fixed;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 5s infinite alternate;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.7);
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.8s ease;
}

/* ماه */
.moon {
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e6e6e6, #c9c9c9);
  top: 15%;
  right: 10%;
  box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.4);
  z-index: 1;
  animation: float 15s infinite ease-in-out;
  pointer-events: none;
  transition: opacity 1s ease;
}

.moon::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 40px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(180, 180, 180, 0.7);
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

/* ---- تم روشن (روز) ---- */
.light-theme {
  transition: background 0.8s ease;
}

.light-theme.intensity-high {
  background: linear-gradient(135deg, #7dd3fc, #93c5fd, #c7d2fe);
}

.light-theme.intensity-medium {
  background: linear-gradient(135deg, #7dd3fc, #93c5fd, #c7d2fe);
}

.light-theme.intensity-low {
  background: linear-gradient(135deg, #93c5fd, #c7d2fe, #ddd6fe);
}

.light-theme::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5), transparent 80%);
  z-index: 1;
  pointer-events: none;
}

/* خورشید */
.sun {
  position: fixed;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #fef08a, #fcd34d, #f59e0b);
  top: 15%;
  right: 10%;
  box-shadow: 0 0 60px 5px rgba(252, 211, 77, 0.7);
  z-index: 1;
  animation: sunPulse 4s infinite alternate ease-in-out;
  pointer-events: none;
  transition: opacity 1s ease;
}

/* ابر */
.cloud {
  position: fixed;
  width: 200px;
  height: 60px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  z-index: 2;
  pointer-events: none;
  animation: moveCloud 60s infinite linear;
  transition: opacity 0.8s ease;
}

.cloud::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  top: -30px;
  left: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
}

.cloud::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  top: -45px;
  right: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
}

/* انیمیشن‌ها */

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

@keyframes sunPulse {
  0% { transform: scale(0.95); box-shadow: 0 0 50px 5px rgba(252, 211, 77, 0.6); }
  100% { transform: scale(1); box-shadow: 0 0 80px 10px rgba(252, 211, 77, 0.8); }
}

@keyframes moveCloud {
  0% { transform: translateX(-300px); }
  100% { transform: translateX(calc(100vw + 300px)); }
}
</style>