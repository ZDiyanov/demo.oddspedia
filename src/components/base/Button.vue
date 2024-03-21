<script setup>
  defineProps({
    isSelected: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <a href="#" :class="['btn', { 'btn--selected': isSelected }]">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
  .btn {
    display: block;
    height: 32px;
    padding: 0 20px;
    background: $bg-lightblue;
    line-height: 32px;
    font-weight: 500;
    font-size: 12px;
    color: $text-white;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 16px;

    &--selected {
      background: $bg-white;
      color: $text-highlight;
      border: 1px solid $border-lightblue;
    }
  }
</style>
