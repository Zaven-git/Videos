<script setup lang="ts">
import { useCounterStore } from '../../stores/videos'
import { ref, onMounted, watchEffect } from 'vue';
import Filter from './Filter.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useCounterStore();

const intersectionTarget = ref<Element | any>(null)

let page = ref(0);

store.getAllVideos()

const normalizeDate = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const formatDate = (date: number): string => {
  const currentDate: Date = new Date(date);
  return `${normalizeDate(currentDate.getDate())} ${normalizeDate(currentDate.getMonth())} ${currentDate.getFullYear()}`
}

watchEffect(() => {
  store.getVideos(route.query)
})

const observeIntersection = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        page.value += 1;
        router.push({
          name: 'Videos',
          query: {
            ...route.query,
            page: page.value,
          },
        })
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  observer.observe(intersectionTarget.value);
};

onMounted(() => {
  observeIntersection();
})

</script>

<template>
  <div class="video-container bg-transparent flex flex-col lg:flex-row sm:pb-12 lg:p-28 sm:p-14">
    <div class="lg:w-[35%] xl:w-[25%] 2xl:w-[30%] lg:pr-6 md:pr-0 lg:pb-0 pb-24">
      <Filter />
    </div>
    <div class="flex flex-col lg:w-[65%] xl:w-[75%] 2xl:w-[70%] ">
      <template v-if="store.filteredVideos.length">
        <div v-for="video in store.filteredVideos" :key="video.id" class="flex h-[19vh] mb-6 bg-[#0e192b]">
          <div class="h-full lg:w-40 2xl:w-1/5 bg-black sm:w-56 xl:w-60"></div>
          <div class="w-[89%] p-5 text-white">
            <h1 class="text-2xl pb-1">{{ video.name }}</h1>
            <p class=" text-white opacity-70 text-lg pb-3">Release Date : {{ formatDate(video.first_release_date) }}</p>
            <p class="text-ellipses w-11/12 h-6/12 overflow-hidden text-white opacity-70 text-lg">{{ video.summary }}</p>
          </div>
          <div class="flex justify-center items-center pr-8">
            <p class="text-whit bg-[#5491eb] p-4 text-3xl rounded-full">{{ Math.round(video.rating) }}</p>
          </div>
        </div>
      </template>
      <p v-else>There is no Items with corresponsing Filters</p>
      <div ref="intersectionTarget" class="intersection-target"></div>
    </div>
  </div>
</template>