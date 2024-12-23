<template>
  <CardGroup>
    <Card
      v-for="card in cards" :key="card.to"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
      :to="card.to"
    />
  </CardGroup>
</template>

<script lang="ts" setup>
const cards = useUtils();
</script>

<style>

</style>
