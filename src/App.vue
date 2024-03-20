<script setup>
  import { onMounted } from 'vue';
  import { useHead } from '@unhead/vue';
  import { isNull } from '@/utils';

  import { useUserStore } from '@/stores/user';

  import BaseLayout from '@/components/layouts/Basic';
  import HomeView from '@/views/Home';

  useHead({ titleTemplate: (title) => (title ? `Oddspedia - ${title}` : 'Oddspedia'), });

  const { getId, setUser } = useUserStore();

  onMounted(() => { if (isNull(getId)) setUser(); });
</script>

<template>
  <BaseLayout>
    <HomeView />
  </BaseLayout>
</template>
