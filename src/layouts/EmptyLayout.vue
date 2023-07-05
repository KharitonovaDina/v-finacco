<template>
  <div class="empty">
    <UiModal v-show="dialog">
      <SignInForm/>
    </UiModal>
    <nav class="navbar">
      <router-link class="navbar__logo" to="/">
        Finacco
      </router-link>
      <UiButton
        v-if="this.$store.getters.isUserAuthenticated"
        class="navbar__btn"
        title="Log out"
        @event="signout"
      />
      <div
        v-else
        class="navbar__btn-wrap"
      >
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
import UiModal from '@/components/UiModal.vue';
import SignInForm from '@/components/SignInForm.vue';

export default {
  name: 'EmptyLayout',
  components: { SignInForm, UiModal, UiButton },
  data: () => ({
    dialog: false,
  }),

  methods: {
    openSignInDialog() {
      this.dialog = true;
    },
    openSignUpDialog() {
      this.dialog = true;
    },
    signout() {
      this.$store.dispatch('signout');
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .empty {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100vh;
    width: 100%;
  }

  .navbar{
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    background-color: lightgray;
  }

  .navbar__logo {
    text-decoration: none;
    text-transform: uppercase;
    font-family: $primary-f;
    font-weight: 900;
    font-size: 36px;
    color: rebeccapurple;
  }

  .navbar__btn-wrap {
    display: flex;
    column-gap: 12px;
  }

  .navbar__btn {
    width: 200px;
  }
</style>
