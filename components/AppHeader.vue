<template>
   <header class="navbar shadow-sm transition-all duration-300 transform-gpu fixed top-0 left-0 w-full z-50" 
   :class="[
    //agar true bod dark kon agar false bod light kon/ isScrolled true bod shadow ro bishtar kon agar false bod hich taghiri nakone
        isDark ? 'bg-base-100/20 backdrop-blur-md' : 'bg-sky-100/30 backdrop-blur-md',
         isScrolled ? 'shadow-md' : ''
    ]">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
                :class="[isDark ? 'bg-base-100/90' : 'bg-slate-100/95']">
                    <li>
                    <NuxtLink class="transition duration-700 ease-in-out" :to="localePath('index')" :class="[
                            'transition duration-700 ease-in-out pb-1',
                            route.path === '/' ? activeLinkClass : 'border-b-2 border-transparent'
                        ]">{{ $t('navbar.home') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('blog')" no-prefetch :class="[
                            'transition duration-700 ease-in-out pb-1',
                            route.path === '/blog' ? activeLinkClass : 'border-b-2 border-transparent'
                        ]">{{ $t('navbar.blog') }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="localePath('about')" no-prefetch :class="[
                            'transition duration-700 ease-in-out pb-1',
                            route.path === '/about' ? activeLinkClass : 'border-b-2 border-transparent'
                        ]">{{ $t('navbar.about') }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink :to="localePath('index')" class="flex items-center gap-3 btn btn-ghost text-xl transition duration-700 ease-in-out pb-1 px-2">
                <div class="logo-container">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-icon">
                        <defs>
                            <linearGradient id="forwardMoon" x1="10" y1="6" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                                <stop stop-color="currentColor" stop-opacity="0.95"/>
                                <stop offset="1" stop-color="currentColor" stop-opacity="0.55"/>
                            </linearGradient>
                        </defs>
                        <!-- Forward-facing crescent -->
                        <path d="M21 6C12.72 6 6 12.72 6 21C6 29.28 12.72 36 21 36C25.6 36 29.73 33.95 32.62 30.52C25.84 29.9 20.48 24.26 20.48 17.34C20.48 10.42 25.84 4.78 32.62 4.16C29.73 2.05 25.6 0 21 0V6Z" fill="url(#forwardMoon)" class="moon-shape"/>
                        <!-- Laptop, front view -->
                        <g class="tech-icon">
                            <rect x="20" y="16" width="16" height="10" rx="2" class="tech-screen"/>
                            <rect x="18" y="27" width="20" height="2.8" rx="1.2" class="tech-base"/>
                            <path d="M18 29.8L15 33.6H41L38 29.8" class="tech-shadow"/>
                            <circle cx="28" cy="21" r="2.5" class="tech-glow"/>
                        </g>
                    </svg>
                </div>
                <span class="brand-text">Mahtech</span>
            </NuxtLink>
        </div>

        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink class="transition duration-700 ease-in-out" :to="localePath('index')" :class="[
                        'transition duration-700 ease-in-out pb-1',
                        route.path === '/' ? activeLinkClass : 'border-b-2 border-transparent'
                    ]">{{ $t('navbar.home') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="transition duration-700 ease-in-out" :to="localePath('blog')" :class="[
                        'transition duration-700 ease-in-out pb-1',
                        route.path === '/blog' ? activeLinkClass : 'border-b-2 border-transparent'
                    ]">{{ $t('navbar.blog') }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="transition duration-700 ease-in-out" :to="localePath('about')" :class="[
                        'transition duration-700 ease-in-out pb-1',
                        route.path === '/about' ? activeLinkClass : 'border-b-2 border-transparent'
                    ]">{{ $t('navbar.about') }}</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="navbar-end">
            <button @click="toggleTheme" class="btn btn-ghost">
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
            <button @click="toggleLanguage" class="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {{ locale === 'en' ? 'فارسی' : 'English' }}
            </button>
        </div>
    </header>
    <div class="h-16"></div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'
import { useRoute } from 'vue-router'
import { useTheme } from '~/composables/useTheme'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const route = useRoute();
const localePath = useLocalePath();
const { locale, locales, setLocale } = useI18n();
const { isDark, toggleTheme} = useTheme();
const isScrolled = ref(false);
const activeLinkClass = computed(() =>
    'border-b-2 border-sky-400 shadow-[0_2px_10px_rgba(56,189,248,0.55)]'
);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 16;
};

onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function toggleLanguage() {
    setLocale(locale.value === 'en' ? 'fa' : 'en');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.brand-text {
    font-family: 'Space Grotesk', 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: linear-gradient(120deg, #60a5fa, #1d4ed8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: background 0.3s ease, transform 0.2s ease;
}

:root.light .brand-text {
    background: linear-gradient(120deg, #60a5fa, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

:root.dark .brand-text {
    background: linear-gradient(120deg, #7dd3fc, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.brand-text:hover,
.brand-text:focus-visible {
    background: linear-gradient(125deg, #e2e8f0, #cbd5f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-1px);
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: float 3s ease-in-out infinite;
}

.logo-icon {
    transition: color 0.25s ease, transform 0.4s ease;
}

:root.light .logo-icon {
    color: #7dd3fc;
}

:root.dark .logo-icon {
    color: #93c5fd;
}

.logo-container:hover .logo-icon,
.logo-container:focus-visible .logo-icon {
    color: #cbd5f5;
    transform: translateY(-1px) scale(1.02);
}

.tech-icon,
.tech-screen,
.tech-base,
.tech-shadow,
.tech-glow {
    stroke: currentColor;
    stroke-width: 1.1;
    fill: none;
}

.tech-screen {
    fill: rgba(255, 255, 255, 0.09);
    stroke-width: 1.3;
}

.tech-base {
    fill: rgba(255, 255, 255, 0.08);
}

.tech-shadow {
    stroke-linecap: round;
    opacity: 0.5;
}

.tech-glow {
    fill: currentColor;
    opacity: 0.28;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-3px);
    }
}

:root.light .navbar a {
    color: #334155; 
}

:root.light .navbar a:hover {
    color: #38bdf8; 
}

:root.dark .navbar a {
    color: #f1f5f9; 
}

:root.dark .navbar a:hover {
    color: #60a5fa;
}

:root.light button.btn-ghost {
    color: #334155;
}

:root.light button.btn-ghost:hover {
    color: #38bdf8;
    background-color: transparent;
}

:root.dark button.btn-ghost {
    color: #f1f5f9;
}

:root.dark button.btn-ghost:hover {
    color: #60a5fa;
    background-color: transparent;
}
</style>