<script setup>
  import { onMounted } from 'vue';
  import { useHead } from '@unhead/vue';

  import { useTeamsStore } from '@/stores/teams';

  import TeamsSearch from '@/components/TeamsSearch';
  import SubscriptionList from '@/components/SubscriptionsList';

  useHead({ title: 'Team Search Widget Demo' });

  const { getTeams } = useTeamsStore();

  onMounted(() => getTeams());
</script>

<template>
  <div class="view-home">
    <div class="widget-teams">
      <TeamsSearch class="widget-teams__block widget-teams__block" />
      <SubscriptionList class="widget-teams__block" />
    </div>
  </div>
</template>

<style lang="scss">
  .view-home {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 2px;

    @include sm {
      padding: 12px 0 0;
    }
  }

  .widget-teams {
    width: 100%;
    height: 100vh;
    max-width: $screen-sm-min;
    background: $bg-grey;

    @include sm {
      height: auto;
      overflow: hidden;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0 0 10px $shadow-grey;
    }

    &__block {
      padding-bottom: 8px;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
