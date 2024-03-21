<script>
  import { isNum } from '@/utils';

  import { useUserStore } from '@/stores/user';

  export default {
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    computed: {
      userId() {
        return this.userStore.getId;
      },
      firstname() {
        return this.userStore.getFirstname;
      },
      lastname() {
        return this.userStore.getLastname;
      },
      isUserSet() {
        return isNum(this.userId);
      },
    },
  };
</script>

<template>
  <span v-if="isUserSet">{{ firstname + lastname }}</span>
</template>
