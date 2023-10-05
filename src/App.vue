<script setup lang="ts">
import { RouterView } from 'vue-router';
import { computed } from 'vue'
import VHeader from './components/VHeader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name);

const title = computed(() => {
  return String(route.name)
})
</script>

<template>
  <div class="bg-vd-gray py-10 ">
    <VHeader :heading="`${title}`" />
    <router-view />
  </div>
</template>

