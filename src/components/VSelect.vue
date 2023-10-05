<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { SelectProps } from '../types/index'

const props = withDefaults(defineProps<SelectProps>(), {
  options: [],
  default: '',
  tabindex: 0
});

const emit = defineEmits(['input']);

const selected = ref(props.default ? props.default : props.options.length > 0 ? props.options[0] : null,)
const open = ref(false);

const selectValue = (option: string) => {
  selected.value = option;
  open.value = false;
  emit('input', option);
}
onMounted(() => {
  emit("input", selected.value);
})
</script>

<template>
  <div class="custom-select relative w-full text-left outline-none h-[47px] leading-[47px]" :tabindex="tabindex"
    @blur="open = false">
    <div
      class="selected bg-[#182c47] rounded-sm text-white pl-2 cursor-pointer select-none after:absolute after:content-[url(/assets/arrow-down.svg)] after:top-[3px] after:right-8 after:w-0 after:h-0 after:border after:border-solid after:border-transparent"
      @click="open = !open">
      {{ selected }}
    </div>
    <div
      class="items text-white overflow-hidden absolute bg-[#0a0a0a] left-0 right-0 z-10 border border-solid border-r-gray-600 border-l-gray-600 border-b-gray-600 bg-[#182c47]"
      :class="{ 'hidden': !open }">
      <div v-for="(option, i) of options" :key="i" class="hover:bg-gray-600 text-white pl-4 cursor-pointer select-none"
        @click="selectValue(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

