<script setup>
  import UsernameLabel from '@/components/base/UsernameLabel';
  import TeamsSearch from '@/components/TeamsSearch';
  import SubscriptionList from '@/components/lists/SubscriptionsList';

  // DEV Note: we prep the tabs array cause we can directly use it if we want to extract the tabs as a reusable component later
  const tabList = [
    {
      id: 1,
      label: 'My Teams',
      isActive: true,
    },
    {
      id: 2,
      label: 'About',
      isActive: false,
    },
  ];
</script>

<template>
  <div class="user-profile">
    <div class="user-profile__header">
      <div class="user-profile__avatar">
        <UsernameLabel class="user-profile__username-label" />
      </div>
      <div class="user-profile__tabnav">
        <a
          v-for="tab in tabList" :key="tab.id"
          href="#" :class="['user-profile__tab-btn', { 'user-profile__tab-btn--selected': tab.isActive }]"
        >
          {{ tab.label }}
        </a>
      </div>
    </div>
    <div class="widget-teams">
      <TeamsSearch class="widget-teams__block widget-teams__block" />
      <SubscriptionList class="widget-teams__block" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .user-profile {
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

    &__header {
      display: grid;
      flex-direction: column;
      width: 100%;
      height: 190px;
      margin-bottom: 8px;
      background: $bg-blue;

      @include sm { margin-bottom: 0; }
    }

    &__avatar {
      display: flex;
      justify-self: flex-start;
      align-self: center;
      // background: red;
    }

    &__username-label {
      font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-style: italic;
      color: $text-white;

      // @include lg {
      //   display: none;
      // }
    }

    &__tabnav {
      display: flex;
      justify-self: center;
      align-self: flex-end;
    }

    &__tab-btn {
      position: relative;
      display: block;
      height: 34px;
      line-height: 32px;
      margin: 0 5px;
      padding: 0 5px;
      font-size: 11px;
      font-weight: 500;
      color: $text-secondary;
      text-decoration: none;
      text-transform: uppercase;

      &::before {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        width: 100%;
        height: 3px;
        background: $bg-lightblue;
        border-radius: 3px 3px 0 0;
        content: '';
      }

      &--selected {
        color: $text-white;

        &::before { display: block; }
      }
    }

    .widget-teams {
      &__block {
        padding-bottom: 8px;
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
