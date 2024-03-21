<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { isNum } from '@/utils';

  import { useUserStore } from '@/stores/user';

  const {
    getId: id,
    getFirstname: firstname,
    getLastname: lastname,
  } = storeToRefs(useUserStore());

  const isUserSet = computed(() => isNum(id.value));
</script>

<template>
  <span v-if="isUserSet">{{ firstname + lastname }}</span>
</template>
