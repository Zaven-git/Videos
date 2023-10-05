<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CustomSelect from '../../components/VSelect.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const name = ref('');
const score = ref('');
const orderValue = ref('')


watchEffect(() => {
  router.push({
    name: 'Videos',
    query: {
      ...route.query,
      name: name.value,
      score: score.value,
      orderBy: orderValue.value,
      page: '1'
    },
  })
})

const handleSelect = (val: string) => {
  orderValue.value = val
  router.push({
    name: 'Videos',
    query: {
      ...route.query,
      name: name.value,
      score: score.value,
      orderBy: orderValue.value
    },
  })
}

const resetFilters = () => {
  name.value = '';
  score.value = '';
  orderValue.value = '';
}

</script>

<template>
  <div class="w-full bg-[#0e192b] p-6">
    <p class="pb-10 text-xl">Filter Results</p>
    <div class="pb-8">
      <label class="leading-10 text-lg">Name (contains) </label>
      <input type="text" v-model="name" placeholder="Text string"
        class="py-2.5 pl-2 w-full mb-6x sm:mb-0 text-black bg-[#182c47] ">
    </div>
    <div class="flex md:flex lg:block flex-col md:flex-row justify-between md:justify-between md:items-center">
      <div class="pb-8 md:pb-0 lg:pb-8 md:w-40 lg:w-full">
        <label class="leading-10 text-lg">Minimum Score </label>
        <input type="text" v-model.number="score" placeholder="1-10"
          class="py-2.5 pl-2 w-full mb-6x sm:mb-0  text-black bg-[#182c47]">
      </div>
      <div class="md:w-96  lg:w-full sm:w-full">
        <label class="leading-10">Order By </label>
        <div class="flex">
          <div class="bg-[#5491eb] px-3 flex justify-center items-center">
            <img src="/assets/top-arrow.svg" class="w-6 h-6" alt="">
          </div>
          <CustomSelect :options="['Release Date', 'Name', 'Score']" :default="'Release Date'" class="select"
            @input="handleSelect" />
        </div>
      </div>
      <div class="flex justify-end lg:pt-6 md:pt-8 pt-8">
        <button class="bg-[#5491eb] lg:py-1 px-3 md:py-2 py-3 w-full md:w-auto" @click="resetFilters">Clear</button>
      </div>
    </div>
  </div>
</template>