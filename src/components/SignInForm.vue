<template>
  <div class="signin">
    <h1 class="signin__ttl">Войти</h1>
    <span class="signin__warning">
      {{error}}
    </span>
    <form class="signin__form">
      <div class="signin__input-wrap">
        <label class="signin__label" for="input">
          Login
          <input
            class="signin__input"
            type="email"
            id="input"
            placeholder= "Введите логин"
            v-model="email"
          >
        </label>
      </div>
      <div class="signin__input-wrap">
        <label class="signin__label" for="input">
          Password
          <input
            class="signin__input"
            type="password"
            id="input"
            placeholder="Введите пароль"
            v-model="password"
          >
        </label>
      </div>
      <UiButton
        class="signin__btn"
        title="Sign in"
        @event="signin"
        :disabled="processing"
      />
    </form>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'SignInForm',
  components: { UiButton },
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
.signin__form {
}

.signin__input-wrap {
  margin-bottom: 28px;
}

.signin__label {
  display: block;
  margin-bottom: 0.25rem;
  color: black;
}

.signin__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  margin: 0;
  font-family: $primary-f;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid black;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }

  &:focus {
    color: rebeccapurple;
    background-color: #fff;
    border-color: rebeccapurple;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(256, 0, 158, 0.25);
  }

  &:disabled,
  &:read-only {
    background-color: rebeccapurple;
    opacity: 1;
  }
}

.signin__btn {
  width: 100px;
}
</style>
