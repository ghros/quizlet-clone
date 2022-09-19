<script setup lang='ts'>
import Header from './components/Header.vue'
</script>

<template lang='pug'>
div.app-container
  Header
  router-view.router
</template>

<style scoped lang='sass'>
@use '/src/assets/sass/components' as components

.app-container
  @include components.flex
  flex-direction: column

.router
  margin-top: 3rem
</style>
