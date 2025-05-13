<template>
    <header class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow">
                    <li>
                        <NuxtLink to="/">خانه</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">بلاگ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">درباره من</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" class="btn btn-ghost text-xl">Mahtech</NuxtLink>
        </div>

        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink to="/">خانه</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">بلاگ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">درباره من</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="navbar-end">
            <button class="btn btn-ghost" @click="toggleLanguage">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {{ currentLanguage === 'fa' ? 'English' : 'فارسی' }}
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const currentLanguage = ref('fa');
function toggleLanguage() {
    currentLanguage.value = currentLanguage.value === 'fa' ? 'en' : 'fa';

    console.log('Language changed to:', currentLanguage.value);
}
</script> 
