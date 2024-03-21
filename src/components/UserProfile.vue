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
        <div class="user-profile__user-img" style="background-image: url('/img/demo-avatar.png');">
          <div class="user-profile__level-pill">
            Level 5
          </div>
        </div>
        <UsernameLabel class="user-profile__username-label" />
      </div>
    </div>
    <div class="user-profile__tabnav">
      <a
        v-for="tab in tabList" :key="tab.id"
        href="#" :class="['user-profile__tab-btn', { 'user-profile__tab-btn--selected': tab.isActive }]"
      >
        {{ tab.label }}
      </a>
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 150px;
      background: $bg-blue;

      @include sm {
        align-items: flex-start;
      }
    }

    &__avatar {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      @include sm {
        margin-left: 42px;
      }
    }

    &__user-img {
      display: flex;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-position: top center;
    }

    &__level-pill {
      position: absolute;
      bottom: -20px;
      height: 16px;
      line-height: 16px;
      padding: 0 8px;
      background: $bg-softblue;
      font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
      font-size: 9px;
      font-weight: bold;
      color: $text-white;
      border-radius: 8px;
    }

    &__username-label {
      display: none;
      margin-left: 20px;
      font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-style: italic;
      color: $text-white;

      @include sm {
        display: block;
      }
    }

    &__tabnav {
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
      background: $bg-blue;

      @include sm { margin-bottom: 0; }
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
