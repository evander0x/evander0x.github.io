<script setup>
import CopyPageButton from './CopyPageButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <header class="page-header">
    <div class="page-header__copy">
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="description" class="page-header__description">
        {{ description }}
      </p>
    </div>

    <CopyPageButton />
  </header>
</template>
