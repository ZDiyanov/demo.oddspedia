<script>
  import { useUserStore } from '@/stores/user';

  import WidgetRow from '@/components/base/WidgetRow';
  import Btn from '@/components/base/Button';

  // eslint-disable-next-line import/no-unresolved
  import SvgStadium from '@/assets/svg/stadium.svg?component';

  export default {
    components: {
      WidgetRow,
      Btn,
      SvgStadium,
    },
    props: {
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
    },
    emits: ['list:mouseover', 'list:mouseleave'],
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    computed: {
      followedIds() {
        return this.userStore.getFollowed;
      },
    },
    methods: {
      toggleTeamFollow(id) {
        this.userStore.toggleTeamFollow(id);
      },
    },
  };
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
        <span class="team-details__label--divider">|</span>
        <span class="team-details__label--stadium"><SvgStadium /> <span v-html="$filters.highlight(team.stadium, marker)" /></span>
      </div>

      <template #actions>
        <Btn :is-selected="followedIds.includes(team.id)" @click.prevent="toggleTeamFollow(team.id)">
          {{ followedIds.includes(team.id) ? 'Following' : 'Follow' }}
        </Btn>
      </template>
    </WidgetRow>
  </div>
</template>

<style lang="scss" scoped>
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

      &--stadium {
        font-size: 12px;

        svg { margin: 0 2px; vertical-align: text-top; }
      }

      &--divider {
        margin: 0 5px;
        font-size: 11px;
        font-weight: bold;
        color: $text-grey;
      }
    }

    &__icon {
      width: 28px;
      height: 28px;
    }

    ::v-deep span.substr--highlighted {
      color: $text-highlight;
    }
  }
</style>
