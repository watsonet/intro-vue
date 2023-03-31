<script setup>
import Button from './components/Button.vue';
import TitleBar from './components/TitleBar.vue';
</script>

<template>
  <TitleBar></TitleBar>
  <Button></Button>
</template>

<style scoped>
  .titlebar {
    place-items: top;
  }
</style>
