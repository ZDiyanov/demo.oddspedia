<script setup>
  import { computed } from 'vue';

  defineProps({
    placeholder: {
      type: String,
      default: 'Type here ...'
    },
  });

  const model = defineModel({
    type: String,
    required: true,
  });

  defineEmits(['input:clear', 'input:focusout', 'input:key-up', 'input:key-down']);

  const hasInputVal = computed(() => model.value.length !== 0);
</script>

<template>
  <div class="input-basic">
    <input
      v-model="model"
      type="text" :placeholder="placeholder"
      class="input-basic__input"
      @focusout.prevent="$emit('input:focusout')"
      @keydown.up.prevent="$emit('input:key-up')"
      @keydown.down.prevent="$emit('input:key-down')"
    />
    <a
      v-if="hasInputVal"
      class="input-basic__clear" @click.prevent="$emit('input:clear')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"
        width="12" height="12"
      >
        <path
          id="close"
          d="M7.1,6.136l4.673-4.673a.777.777,0,0,0-1.1-1.1L6,5.037,1.327.364a.777.777,0,0,0-1.1,1.1L4.9,6.136.228,10.809a.777.777,0,1,0,1.1,1.1L6,7.235l4.673,4.673a.777.777,0,1,0,1.1-1.1Zm0,0"
          transform="translate(0 -0.136)" fill="#98acc1"
        />
      </svg>
    </a>
  </div>
</template>

<style lang="scss">
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
    }

    &__clear {
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      margin: auto;
      cursor: pointer;
    }
  }
</style>
