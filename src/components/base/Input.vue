<script>
  // eslint-disable-next-line import/no-unresolved
  import SvgClose from '@/assets/svg/close.svg?component';

  export default {
    components: { SvgClose },
    props: {
      modelValue: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: 'Type here ...'
      },
      hasLeadIcon: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue', 'input:clear', 'input:focusout', 'input:key-up', 'input:key-down'],
    computed: {
      hasInputVal() {
        return this.modelValue.length !== 0;
      },
    },
  };
</script>

<template>
  <div class="input-basic">
    <div
      v-if="hasLeadIcon"
      class="input-basic__icon input-basic__icon--lead" @click.prevent="$emit('input:clear')"
    >
      <slot />
    </div>
    <input
      :value="modelValue"
      type="text" :placeholder="placeholder"
      :class="['input-basic__input', { 'input-basic__input--with-lead': hasLeadIcon }]"
      @input="$emit('update:modelValue', $event.target.value)"
      @focusout.prevent="$emit('input:focusout')"
      @keydown.up.prevent="$emit('input:key-up')"
      @keydown.down.prevent="$emit('input:key-down')"
    />
    <a
      v-if="hasInputVal"
      class="input-basic__icon input-basic__icon--clear" @click.prevent="$emit('input:clear')"
    >
      <SvgClose />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .input-basic {
    position: relative;
    width: 100%;

    &__input {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      color: $text-primary;
      background: $bg-softgrey;
      border: 0;
      border-radius: 18px;
      outline-color: $lightblue;

      &--with-lead { padding-left: 36px; }
    }

    &__icon {
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      margin: auto;

      &--lead { left: 10px; pointer-events: none; }
      &--clear { right: 10px; cursor: pointer; }
    }
  }
</style>
