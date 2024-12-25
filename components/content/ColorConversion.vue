<template>
  <div>
    <div class="flex items-center gap-2">
      <UiInput v-model="color" type="color" class="w-full" placeholder="color" />
    </div>

    <div class="mt-4 flex flex-col flex-wrap gap-2">
      <div class="flex items-center gap-2">
        <span>RGB:</span>
        <span>{{ rgbColor }}</span>
        <UiButton @click="copyRgb(rgbColor)">
          <SmartIcon v-if="!copiedRgb" name="lucide:copy" />
          <SmartIcon v-else name="lucide:check" />
        </UiButton>
      </div>
      <div class="flex items-center gap-2">
        <span>HSL:</span>
        <span>{{ hslColor }}</span>
        <UiButton @click="copyHsl(hslColor)">
          <SmartIcon v-if="!copiedHsl" name="lucide:copy" />
          <SmartIcon v-else name="lucide:check" />
        </UiButton>
      </div>
      <div class="flex items-center gap-2">
        <span>HEX:</span>
        <span>{{ hexColor }}</span>
        <UiButton @click="copyHex(hexColor)">
          <SmartIcon v-if="!copiedHex" name="lucide:copy" />
          <SmartIcon v-else name="lucide:check" />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToast } from '@/components/ui/toast/use-toast';
import { getColors } from '~/lib/utils/generate-color';

const { toast } = useToast();
const color = ref('#000000');

const { copy: copyRgb, copied: copiedRgb } = useClipboard();
const { copy: copyHsl, copied: copiedHsl } = useClipboard();
const { copy: copyHex, copied: copiedHex } = useClipboard();
watch([copiedRgb, copiedHsl, copiedHex], (val) => {
  if (val.includes(true)) {
    toast({
      description: useConfig().value.main.codeCopyToastText,
    });
  }
});

function hexToRgb(hex: string) {
  const r = Number.parseInt(hex.substring(1, 3), 16);
  const g = Number.parseInt(hex.substring(3, 5), 16);
  const b = Number.parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function rgbToHsl(r: number, g: number, b: number) {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const max = Math.max(r, g, b); const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h, s, l };
}

const rgbColor = computed(() => {
  if (!color.value)
    return '';
  const { r, g, b } = hexToRgb(color.value);
  return `rgb(${r},${g},${b})`;
});

const hslColor = computed(() => {
  if (!color.value)
    return '';
  const { r, g, b } = hexToRgb(color.value);
  const { h, s, l } = rgbToHsl(r, g, b);
  return `hsl(${Math.round(h * 360)}deg ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;
});

const hexColor = computed(() => {
  if (!color.value)
    return '';
  return color.value;
});
</script>

<style>

</style>
