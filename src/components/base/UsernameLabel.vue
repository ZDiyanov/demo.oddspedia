<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { isNum } from '@/utils';

  import { useUserStore } from '@/stores/user';

  const { getId, getFirstname, getLastname } = storeToRefs(useUserStore());

  const isUserSet = computed(() => isNum(getId.value));
</script>

<template>
  <span v-if="isUserSet">{{ getFirstname }} {{ getLastname }}</span>
</template>
