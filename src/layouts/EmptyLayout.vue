<template>
  <div class="empty">
    <nav class="navbar">
      <div>
        <span class="navbar__logo">Finacco</span>
      </div>
      <div class="navbar__btn-wrap">
        <UiButton
          class="navbar__btn"
          title="Войти"
          @event="openSignInDialog"
        />
        <UiButton
          class="navbar__btn"
          title="Зарегистрироваться"
          @event="openSignUpDialog"
        />
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'EmptyLayout',
  components: { UiButton },

  methods: {
    openSignInDialog() {
      console.log('In');
    },
    openSignUpDialog() {
      console.log('Up');
    },
  },
};
</script>

<style lang="scss" scoped>
  .empty {
    display: flex;
    flex-direction: column;
    background-color: gray;
    height: 100vh;
    width: 100%;
  }

  .navbar{
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
  }

  .navbar__logo {
    text-transform: uppercase;
    font-family: $primary-f;
    font-weight: 900;
    font-size: 36px;
    color: white;
  }

  .navbar__btn-wrap {
    display: flex;
    column-gap: 12px;
  }

  .navbar__btn {
    width: 200px;
  }
</style>
