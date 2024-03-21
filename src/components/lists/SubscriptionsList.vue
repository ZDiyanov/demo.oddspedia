<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';

  import { useUserStore } from '@/stores/user';
  import { useTeamsStore } from '@/stores/teams';

  import WidgetBlock from '@/components/base/WidgetBlock';
  import WidgetRow from '@/components/base/WidgetRow';

  const { getFollowed: followedIds } = storeToRefs(useUserStore());
  const { getTeamsList: teamsList } = storeToRefs(useTeamsStore());

  const followedTeams = computed(() => (
    teamsList.value
      .filter((item) => followedIds.value.includes(item.id))
      .map(({ id, name }) => ({ id, name }))
  ));
</script>

<template>
  <WidgetBlock class="team-details" title="My Teams">
    <template v-if="followedTeams.length > 0">
      <WidgetRow
        v-for="team in followedTeams" :key="team.id"
        class="team-details__item" has-lead-icon
      >
        <template #icon>
          <img class="team-details__icon" src="/img/team-placeholder.png">
        </template>

        <div class="team-details__row">
          <span class="team-details__label">{{ team.name }}</span>
        </div>
      </WidgetRow>
    </template>
    <div v-else class="team-details__empty">
      <span>You aren't following any teams yet.</span>
    </div>
  </WidgetBlock>
</template>

<style lang="scss" scoped>
  .team-details {
    &__row {
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__label {
      font-size: 14px;
      font-weight: 500;
      color: $text-primary;
    }

    &__icon {
      width: 28px;
      height: 28px;
    }

    &__empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
      margin: 0 8px;
      background: $bg-softgrey;
      border-radius: 8px;

      span {
        font-size: 12px;
        color: $text-secondary;
      }
    }
  }
</style>
