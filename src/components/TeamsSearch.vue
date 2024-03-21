<script>
  import { inject } from 'vue';
  import { isNum, isNonEmptyStr, isNonEmptyArr } from '@/utils';

  import { useTeamsStore } from '@/stores/teams';

  import SearchInput from '@/components/base/Input';
  import WidgetBlock from '@/components/base/WidgetBlock';
  import TeamsList from '@/components/lists/TeamsList';

  // eslint-disable-next-line import/no-unresolved
  import SvgSearch from '@/assets/svg/search.svg?component';
  // eslint-disable-next-line import/no-unresolved
  import SvgNoResults from '@/assets/svg/noResults.svg?component';

  export default {
    components: {
      SearchInput,
      WidgetBlock,
      TeamsList,
      SvgSearch,
      SvgNoResults,
    },
    setup() {
      const teamsStore = useTeamsStore();
      const requiredQueryLenght = inject(['$config']).minQueryLength;
      return { teamsStore, requiredQueryLenght };
    },
    data() {
      return {
        searchQuery: '',
        resFocusIndex: -1,
      };
    },
    computed: {
      teamsList() {
        return this.teamsStore.getTeamsList;
      },
      areTeamsSet() {
        return isNonEmptyArr(this.teamsList);
      },
      searchResults() {
        return this.teamsList.filter((item) => [item.name, item.stadium, ...item.leagues]
          .map((term) => term.toLowerCase())
          .some((term) => term.includes(this.searchQuery.toLowerCase())));
      },
      hasSearchResults() {
        return isNonEmptyStr(this.searchQuery)
          && this.searchQuery.length >= this.requiredQueryLenght
          && isNonEmptyArr(this.searchResults);
      },
    },
    methods: {
      onSearchClear() {
        this.searchQuery = '';
      },
      setFocusIndex(index) {
        this.resFocusIndex = isNum(index) ? index : -1;
      },
      decrementFocusIndex() {
        if (this.resFocusIndex > 0) {
          this.resFocusIndex -= 1;
        }
      },
      incrementFocusIndex() {
        if (this.resFocusIndex < this.searchResults.length - 1) {
          this.resFocusIndex += 1;
        }
      },
    },
  };
</script>

<template>
  <WidgetBlock title="Search Teams" class="teams-search">
    <div class="teams-search__input-wrap">
      <SearchInput
        v-if="areTeamsSet"
        v-model="searchQuery" class="teams-search__input"
        placeholder="Search for a team" has-lead-icon
        @input:clear="onSearchClear" @input:focusout="setFocusIndex"
        @input:key-up="decrementFocusIndex" @input:key-down="incrementFocusIndex"
      >
        <SvgSearch />
      </SearchInput>
    </div>

    <TeamsList
      v-if="hasSearchResults" :teams="searchResults"
      :marker="searchQuery" :focused-index="resFocusIndex"
      @list:mouseover="setFocusIndex" @list:mouseleave="setFocusIndex"
    />

    <div v-if="searchQuery.length >= requiredQueryLenght && !hasSearchResults" class="teams-search__empty">
      <SvgNoResults />
      <span>No Teams Found</span>
    </div>
  </WidgetBlock>
</template>

<style lang="scss" scoped>
  .teams-search {
    &__input-wrap {
      padding: 0 15px;
    }

    &__input {
      margin-bottom: 8px;
    }

    &__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;

      svg {
        width: 144px;
        height: 78px;
        margin-bottom: 10px;
      }

      span {
        font-size: 12px;
        color: $text-secondary;
      }
    }
  }
</style>
