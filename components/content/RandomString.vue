<template>
  <UiCard>
    <UiCardHeader>
      <div class="flex w-full max-w-sm items-center gap-1.5">
        <UiInput v-model="length" type="number" placeholder="random string length" />
        <UiButton @click="refresh">
          Generate
        </UiButton>
        <UiButton variant="outline" @click="refresh">
          Refresh
        </UiButton>
      </div>
    </UiCardHeader>

    <UiCardContent>
      <span class="break-all	rounded-md bg-muted/50 p-2">
        {{ data?.randomString }}
        <UiButton variant="ghost" @click="copy(data?.randomString)">
          <SmartIcon v-if="!copied" name="lucide:copy" />
          <SmartIcon v-else name="lucide:check" />
        </UiButton>
      </span>
    </UiCardContent>
  </UiCard>
</template>

<script lang="ts" setup>
const length = ref(64);
const { data, refresh } = useFetch('/api/randomString', {
  query: {
    length,
  },
  watch: [length],
});

const { copy, copied } = useClipboard({
  source: data.value?.randomString,
});
</script>

<style>

</style>
