<template>
    <div class="min-h-screen bg-base-100 flex flex-col">
        <!-- Header -->
         <AppHeader />
         <main class="container mx-auto p-4 flex-grow">
            <slot />
            </main>
            
            <!-- Footer -->
             <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

</script>
