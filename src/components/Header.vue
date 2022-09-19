<script setup lang='ts'>
import ChevronDownIcon from 'icons/ChevronDown.vue'
import PlusIcon from 'icons/Plus.vue'
</script>

<template lang='pug'>
div.header
  div.header-content-left
    div.logo Quizlet
    div.content-tabs
      div.item
        div Your library
        chevron-down-icon(class="your-library")
      div.item
        plus-icon(class='add-content')
  div.header-content-right
    div.search.item Search
    div.notifications.item Notifications
    div.avatar.item Profile
</template>

<style scoped lang='sass'>
@use '/src/assets/sass/components' as components
@use '/src/assets/sass/theme' as theme

.header
  @include components.flex-center
  background-color: theme.$primary
  width: 100%
  justify-content: space-between
  position: fixed
  top: 0
  margin: 0 -9999rem 0 -9999rem
  padding: .25rem 9999rem
  color: white
  border-bottom: .1rem solid #282e3e

.header-content-left
  @include components.flex-center

.logo
  @include components.use-pointer
  padding: .5rem
  font-size: 1.8rem
  font-weight: bold

.content-tabs
  @include components.flex
  @include components.use-pointer

.material-design-icon.add-content
  margin-top: .5rem

.material-design-icon.your-library
  margin-left: .3rem

.header-content-right
  @include components.flex

.item
  @include components.flex-center
  @include components.use-pointer
  margin: .8rem
  font-weight: bold
</style>