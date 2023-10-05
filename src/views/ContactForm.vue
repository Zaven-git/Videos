<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const registerAnswer = () => {
  // Form Sending logic here
}

</script>

<template>
  <div class="max-w-[600px] m-auto px-10">
    <div class="sm:pb-16 pb-12">
      <h1 class="text-lg uppercase font-bold opacity-60 text-left">get in touch</h1>
      <p class="text-xs pt-2 opacity-40 text-left">
        Trysail transam furl Sea Legs scallywag Jack Ketch chandler mizzenmast reef sails skysail. Shiver me timbers loot
        bucko belaying pin Sea Legs boom gunwalls booty jury mast fare
      </p>
    </div>
    <form @submit.prevent="registerAnswer" class="p-6 bg-[#0e192b]">
      <p class="text-white text-left text-[32px]">Contact Form:</p>
      <div class="flex justify-between sm:flex-row flex-col py-8">
        <div class="sm:mr-12 pb-10 sm:pb-0">
          <label class="pb-2">Name <span class="text-blue-500">*</span></label>
          <input type="text" v-model="name" class="bg-[#182c47] py-2 pl-6 w-full mb-6x sm:mb-0 ">
        </div>
        <div>
          <label class="pb-2">Email Address <span class="text-blue-500">*</span></label>
          <input type="email" v-model="email" class="bg-[#182c47] py-2 pl-6 w-full ">
        </div>
      </div>
      <div>
        <label class="pb-2">Message <span class="text-blue-500">*</span></label>
        <textarea v-model="message" class="bg-[#182c47] w-full h-[6vh] sm:h-[11vh]"></textarea>
      </div>
      <div class="flex justify-end items-start mt-4">
        <button type="submit" class="bg-blue-500 px-4 text-v-gray uppercase py-2">Send</button>
      </div>
    </form>
  </div>
</template>


