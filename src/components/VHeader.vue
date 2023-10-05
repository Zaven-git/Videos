<script setup lang="ts">
import type { HeaderProps } from '../types';
const props = withDefaults(defineProps<HeaderProps>(), {
  heading: 'Video'
});
</script>

<template>
  <div class="px-10 relative py-16 xl:py-4">
    <h1 class="uppercase text-white xl:pl-24 sm:pl-6 md:pl-0 text-4xl pt-12 z-20 relative"><span>Video Games</span><span
        class="sm:block md:inline block xl:inline sm:pt-12 xl:pt-0 sm:pl-0 xl:pl-20 pt-6">Contact</span> </h1>
    <p class="text-[gray-600] opacity-40 text-7xl absolute !top-3 left-12 sm:top-0 font-bold uppercase sm:left-8 xl:left-96">
      {{ props.heading }}
    </p>
  </div>
</template>


