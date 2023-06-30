<template>
  <div class="signin">
    <h1 class="signin__ttl">Войти</h1>
    <span class="signin__warning">
      {{error}}
    </span>
    <form class="signin__form">
      <UiInput
        class="signin__input"
        label="Логин"
        type="email"
        placeholder="Введите логин"
        v-model="email"
      />

      <UiInput
        class="signin__input"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        v-model="password"
      />

      <UiButton
        class="signin__btn"
        title="Войти"
        @event="signin"
        :disabled="processing"
      />
    </form>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';
import UiInput from '@/components/UiInput.vue';

export default {
  name: 'SignInForm',
  components: { UiButton, UiInput },
  data: () => ({
    email: null,
    password: null,
  }),
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push('/');
    },
  },
  methods: {
    signin() {
      this.$store.dispatch('signin', { email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" scoped>
  .signin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: white;
    width: 400px;
    //height: 200px;
    box-shadow: 1px 1px 1px 1px black;
  }

  .signin__ttl {
    font-family: $primary-f;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 28px;
  }

  .signin__input {
    margin-bottom: 28px;
  }

  .signin__btn {
    width: 100%;
  }
</style>
