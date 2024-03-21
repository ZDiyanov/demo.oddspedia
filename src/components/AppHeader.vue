<script>
  import UsernameLabel from '@/components/base/UsernameLabel';

  // eslint-disable-next-line import/no-unresolved
  import SvgArrowLeft from '@/assets/svg/arrowLeft.svg?component';
  // eslint-disable-next-line import/no-unresolved
  import SvgNotification from '@/assets/svg/notification.svg?component';
  // eslint-disable-next-line import/no-unresolved
  import SvgLogo from '@/assets/svg/logo.svg?component';
  // eslint-disable-next-line import/no-unresolved
  import SvgLogoLarge from '@/assets/svg/logoLarge.svg?component';

  export default {
    components: {
      UsernameLabel,
      SvgArrowLeft,
      SvgNotification,
      SvgLogo,
      SvgLogoLarge,
    },
  };
</script>

<template>
  <div class="header">
    <div class="header__side">
      <a
        href="#" class="header__btn"
        @click.prevent
      >
        <SvgArrowLeft />
      </a>

      <div class="header__logo">
        <SvgLogo class="header__logo-small" />
        <SvgLogoLarge class="header__logo-large" />
      </div>
    </div>
    <div class="header__center">
      <UsernameLabel class="header__username-label" />
    </div>
    <div class="header__side">
      <a
        href="#" class="header__btn"
        @click.prevent
      >
        <SvgNotification />
        <div class="header__btn-counter">2</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 0 15px;
    background: $bg-softblue;

    @include lg {
      height: 80px;
      padding: 0 25px;
    }

    &__center { position: absolute; justify-self: center; }

    &__side {
      display: flex;
      align-items: center;

      &:first-child { justify-self: start; }
      &:last-child { justify-self: end; }
    }

    &__logo {
      margin-left: 10px;

      &-large  { display: none; }

      @include sm {
        &-small { display: none; }
        &-large  { display: block; }
      }
    }

    &__btn {
      display: block;
      position: relative;

      &-counter {
        position: absolute;
        bottom: -6px;
        right: -10px;
        min-width: 18px;
        height: 18px;
        line-height: 14px;
        text-align: center;
        background: $bg-lightblue;
        border: 2px solid $border-softblue;
        border-radius: 9px;
        font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
        font-size: 9px;
        font-weight: bold;
        font-style: italic;
        color: $text-white;
      }
    }

    &__username-label {
      font-family: 'Montserrat', 'Roboto', 'Arial', -apple-system, sans-serif;
      font-size: 15px;
      font-weight: bold;
      font-style: italic;
      color: $text-white;

      @include sm {
        display: none;
      }
    }
  }
</style>
