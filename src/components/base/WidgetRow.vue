<script>
  export default {
    props: {
      hasLeadIcon: {
        type: Boolean,
        default: false,
      },
      hasActions: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['list:mouseover', 'list:mouseleave'],
  };
</script>

<template>
  <div class="widget-row">
    <div v-if="hasLeadIcon" class="widget-row__icon">
      <slot name="icon" />
    </div>
    <div class="widget-row__details">
      <slot />
    </div>
    <div v-if="hasActions" class="widget-row__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .widget-row {
    display: flex;
    padding: 0 15px;
    margin-bottom: 2px;

    & > div {
      display: flex;
      justify-content: center;
    }

    &__icon { align-items: center; padding-right: 10px }

    &__details {
      flex-grow: 1;
      flex-direction: column;
      align-items: flex-start;
      min-height: 50px;
    }

    &__actions { align-items: center; padding-left: 10px; }
  }
</style>
