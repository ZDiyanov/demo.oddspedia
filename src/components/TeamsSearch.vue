<script setup>
  import { ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { isNum, isNonEmptyStr, isNonEmptyArr } from '@/utils';

  import { useTeamsStore } from '@/stores/teams';

  import SearchInput from '@/components/base/Input';
  import WidgetBlock from '@/components/base/WidgetBlock';
  import TeamsList from '@/components/TeamsList';

  const { teamList } = storeToRefs(useTeamsStore());
  const searchQuery = ref('');
  const resFocusIndex = ref(-1);
  const requiredQueryLenght = 1;

  const areTeamsSet = computed(() => isNonEmptyArr(teamList.value));
  const searchResults = computed(() => (
    teamList.value.filter((item) => [item.name, item.stadium, ...item.leagues]
      .map((term) => term.toLowerCase())
      .some((term) => term.includes(searchQuery.value.toLowerCase()))
    )
  ));
  const hasSearchResults = computed(() => (
    isNonEmptyStr(searchQuery.value)
    && searchQuery.value.length >= requiredQueryLenght
    && isNonEmptyArr(searchResults.value))
  );

  const onSearchClear = () => {
    searchQuery.value = '';
  };
  const setFocusIndex = (index) => {
    resFocusIndex.value = isNum(index) ? index : -1;
  };
  const decrementFocusIndex = () => {
    if (resFocusIndex.value > 0) {
      resFocusIndex.value -= 1;
    }
  };
  const incrementFocusIndex = () => {
    if (resFocusIndex.value < searchResults.value.length - 1) {
      resFocusIndex.value += 1;
    }
  };
</script>

<template>
  <WidgetBlock title="Search Teams" class="teams-search">
    <div class="teams-search__input-wrap">
      <SearchInput
        v-if="areTeamsSet"
        v-model="searchQuery" class="teams-search__input"
        placeholder="Search for a team"
        @input:clear="onSearchClear" @input:focusout="setFocusIndex"
        @input:key-up="decrementFocusIndex" @input:key-down="incrementFocusIndex"
      />
    </div>

    <TeamsList
      v-if="hasSearchResults" :teams="searchResults"
      :marker="searchQuery" :focused-index="resFocusIndex"
      @list:mouseover="setFocusIndex" @list:mouseleave="setFocusIndex"
    />

    <div v-if="searchQuery.length >= requiredQueryLenght && !hasSearchResults" class="teams-search__empty">
      <img src="/img/no-results.png">
      <span>No Teams Found</span>
    </div>
  </WidgetBlock>
</template>

<style lang="scss">
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

      img {
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
