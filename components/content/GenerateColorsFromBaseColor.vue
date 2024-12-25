<template>
  <div>
    <div class="flex items-center gap-2">
      <input v-model="color" type="color" class="w-32 overflow-hidden rounded-md p-0">
      <span>{{ color }}</span>
    </div>

    <div class="mt-4 flex flex-wrap">
      <div
        v-for="item in themeArray" :key="item.key"
        :style="{ background: item.value, color: item.key > 500 ? '#fff' : '#000' }"
        class="size-24 p-4 duration-300 hover:scale-110 hover:shadow-sm"
        @click="copy(item.value)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToast } from '@/components/ui/toast/use-toast';
import { getColors } from '~/lib/utils/generate-color';

const { toast } = useToast();

const { copy, copied } = useClipboard();
watch(copied, (val) => {
  if (val) {
    toast({
      description: useConfig().value.main.codeCopyToastText,
    });
  }
});

const color = ref('#ABABAB');
const theme = ref(getColors(color.value));
watchEffect(() => {
  theme.value = getColors(color.value);
});
const themeArray = computed(() => Object.entries(theme.value).map(([key, value]) => ({ key: Number(key), value })));
</script>

<style>

</style>
