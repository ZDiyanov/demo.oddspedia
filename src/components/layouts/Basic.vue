<script setup>
  import AppHeader from '@/components/AppHeader';
</script>

<template>
  <div class="layout-basic">
    <AppHeader class="layout-basic__header" />
    <div class="layout-basic__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  .layout-basic {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;

    &__content {
      display: flex;
      width: 100;
      justify-content: center;
    }
  }
</style>
