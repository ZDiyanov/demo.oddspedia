<script setup>
  import { storeToRefs } from 'pinia';

  import { useUserStore } from '@/stores/user';

  import WidgetRow from '@/components/base/WidgetRow';

  const { getFollowed: followedIds } = storeToRefs(useUserStore());

  const { toggleTeamFollow } = useUserStore();

  defineProps({
    teams: {
      type: Array,
      required: true,
    },
    marker: {
      type: String,
      default: '',
    },
    focusedIndex: {
      type: Number,
      default: -1,
    },
  });

  defineEmits(['list:mouseover', 'list:mouseleave']);
</script>

<template>
  <div class="team-details" @mouseleave="$emit('list:mouseleave')">
    <WidgetRow
      v-for="(team, index) in teams" :key="team.id"
      :class="[
        'team-details__item',
        { 'team-details__item--focused': index === focusedIndex }
      ]"
      has-lead-icon has-actions
      @mouseover="$emit('list:mouseover', index)"
    >
      <template #icon>
        <img class="team-details__icon" src="/img/team-placeholder.png">
      </template>

      <div class="team-details__row">
        <span class="team-details__label--leagues" v-html="$filters.highlight(team.leagues.join(', '), marker)" />
      </div>
      <div class="team-details__row">
        <span class="team-details__label--name" v-html="$filters.highlight(team.name, marker)" />
        <span class="team-details__label--stadium"> | <span v-html="$filters.highlight(team.stadium, marker)" /></span>
      </div>

      <template #actions>
        <button @click.prevent="toggleTeamFollow(team.id)">
          {{ followedIds.includes(team.id) ? 'Unfollow' : 'Follow' }}
        </button>
      </template>
    </WidgetRow>
  </div>
</template>

<style lang="scss">
  .team-details {
    &__item {
      &--focused { background: $bg-softgrey; }
    }

    &__row {
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__label {
      color: $text-secondary;

      &--leagues { font-size: 11px; }
      &--name {
        font-size: 14px;
        font-weight: 500;
        color: $text-primary;
      }
      &--stadium { font-size: 12px; }
    }

    &__icon {
      width: 28px;
      height: 28px;
    }

    span.substr--highlighted {
      color: $text-highlight;
    }
  }
</style>
