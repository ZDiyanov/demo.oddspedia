<script setup>
  import { computed } from 'vue';
  import { isNonEmptyStr } from '@/utils';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });

  const hasTitle = computed(() => isNonEmptyStr(props.title));
</script>

<template>
  <div class="block">
    <div v-if="hasTitle" class="block__title">
      {{ title.toUpperCase() }}
    </div>
    <div class="block__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .block {
    background: $bg-white;

    &__title {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 15px;
      font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
      font-weight: bold;
      font-style: italic;
      color: $text-primary;
    }

    // &__content {
    //   padding: 0 15px;
    // }
  }
</style>
