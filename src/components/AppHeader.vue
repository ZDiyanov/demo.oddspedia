<script setup>
  import UsernameLabel from '@/components/base/UsernameLabel';
</script>

<template>
  <div class="header">
    <div class="header__left">
      left nav
    </div>
    <div class="header__center">
      <UsernameLabel class="header__username-label" />
    </div>
    <div class="header__right">
      right nav
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 0 15px;
    background: $bg-softblue;

    @include lg {
      height: 80px;
      padding: 0 25px;

      &__username-label {
        display: none;
      }
    }
  }
</style>
