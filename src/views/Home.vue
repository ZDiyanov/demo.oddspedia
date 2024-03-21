<script setup>
  import { onMounted } from 'vue';
  import { useHead } from '@unhead/vue';

  import { useTeamsStore } from '@/stores/teams';

  import UserProfile from '@/components/UserProfile';

  useHead({ title: 'Team Search Widget Demo' });

  const { getTeams } = useTeamsStore();

  onMounted(() => getTeams());
</script>

<template>
  <div class="view-home">
    <UserProfile />
  </div>
</template>

<style lang="scss" scoped>
  .view-home {
    display: flex;
    justify-content: center;
    width: 100%;

    @include sm {
      padding: 12px 0 0;
    }
  }
</style>
