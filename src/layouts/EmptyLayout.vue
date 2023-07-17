<template>
  <div class="empty">
    <UiModal v-model="open">
      <template v-slot:header>{{ modalHeader }}</template>
      <template v-slot:main>
        <SignInForm v-show="clickSignin"/>
        <SignUpForm v-show="clickSignup"/>
      </template>
    </UiModal>
    <nav class="navbar">
      <router-link class="navbar__logo" to="/">
        Finacco
      </router-link>
      <UiButton
        v-if="this.$store.getters.isUserAuthenticated"
        class="navbar__btn"
        title="Выйти"
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
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'EmptyLayout',
  components: {
    SignUpForm,
    SignInForm,
    UiModal,
    UiButton,
  },
  data: () => ({
    open: false,
    clickSignin: false,
    clickSignup: false,
    modalHeader: null,
  }),

  methods: {
    openSignInDialog() {
      this.open = true;
      this.clickSignin = true;
      this.modalHeader = 'Вход';
    },
    openSignUpDialog() {
      this.open = true;
      this.clickSignup = true;
      this.modalHeader = 'Регистрация';
    },
    signout() {
      this.$store.dispatch('signout');
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
