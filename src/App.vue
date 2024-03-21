<script>
  import { useHead } from '@unhead/vue';
  import { isNull } from '@/utils';

  import { useUserStore } from '@/stores/user';

  import BaseLayout from '@/components/layouts/Basic';
  import HomeView from '@/views/Home';

  export default {
    components: { BaseLayout, HomeView },
    setup() {
      const userStore = useUserStore();

      useHead({ titleTemplate: (title) => (title ? `Oddspedia - ${title}` : 'Oddspedia'), });

      return { userStore };
    },
    computed: {
      userId() {
        return this.userStore.getId;
      },
    },
    mounted() {
      if (isNull(this.userId)) {
        this.setUser();
      }
    },
    methods: {
      setUser() {
        this.userStore.setUser();
      },
    },
  };
</script>

<template>
  <BaseLayout>
    <HomeView />
  </BaseLayout>
</template>
