<template>
  <div class="signup">
    <h1 class="signup__ttl">Зарегистрироваться</h1>
    <span class="signup__warning">
      {{error}}
    </span>
    <form class="signup__form">
      <UiInput
        class="signup__input"
        label="Логин"
        type="email"
        placeholder="Введите логин"
        v-model="email"
      />

      <UiInput
        class="signup__input"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        v-model="password"
      />

      <UiButton
        class="signup__btn"
        title="Зарегистрироваться"
        @event="signup"
        :disabled="processing"
      />
    </form>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';
import UiInput from '@/components/UiInput.vue';

export default {
  name: 'SignUpForm',
  components: { UiInput, UiButton },

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
    signup() {
      this.$store.dispatch('signup', { email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" scoped>
  .signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: white;
    width: 400px;
    box-shadow: 1px 1px 1px 1px black;
  }

  .signup__ttl {
    font-family: $primary-f;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 28px;
  }

  .signup__input {
    margin-bottom: 28px;
  }

  .signup__btn {
    width: 100%;
  }
</style>
