<template>
  <div class="signin">
    <form
      class="signin__form"
      id="signin"
      novalidate
    >
      <div class="signin__err-wrap" v-show="error">
        <span>{{ error }}</span>
      </div>

      <div class="signin__input-wrap">
        <UiInput
          class="signin__input"
          label="Логин"
          type="email"
          placeholder="Введите логин"
          v-model="email"
          @blur="checkEmail"
        />
        <ul class="signin__list" v-show="emailError.length">
          <li class="signin__list-item" v-for="(err, i) in emailError" :key="i">{{ err }}</li>
        </ul>
      </div>

      <div class="signin__input-wrap">
        <UiInput
          class="signin__input"
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          v-model="password"
          @blur="checkPassword"
        />
        <ul class="signin__list" v-show="passError.length">
          <li class="signin__list-item" v-for="(err, i) in passError" :key="i">{{ err }}</li>
        </ul>
      </div>

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
    errors: [],
    emailError: [],
    passError: [],
  }),
  // TODO обработка ошибок с сервера (auth/user-not-found), auth/wrong-password
  // TODO обработка закрытия попапа
  computed: {
    error() {
      return this.$store.getters.getError.includes('user-not-found');
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
      if (val === true) console.log('Yes');
    },
  },
  methods: {
    signin() {
      this.$store.dispatch('signin', { email: this.email, password: this.password });
    },

    checkEmail() {
      this.emailError = [];
      if (!this.email) {
        this.emailError.push('Укажите электронную почту');
      } else if (!this.validEmail(this.email)) {
        this.emailError.push('Укажите корректный адрес электронной почты');
      }

      if (!this.emailError.length) {
        return true;
      }
      // e.preventDefault();
      return this.emailError;
    },

    checkPassword() {
      this.passError = [];
      if (!this.password) {
        this.passError.push('Укажите пароль');
      } else if (this.password.length < 6) {
        this.passError.push('Пароль слишком короткий - минимум 6 символов');
      }
      if (!this.passError.length) {
        return true;
      }
      // e.preventDefault();
      return this.passError;
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
  .signin {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .signin__ttl {
    font-family: $primary-f;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 28px;
  }

  .signin__err-wrap {
    background-color: lightpink;
    margin-bottom: 24px;
    padding: 24px;
    color: darkred;
  }

  .signin__list {
  }
  .signin__list-item {
    color: darkred;
    font-family: $primary-f;
    font-weight: 400;
    font-size: 12px;
  }

  .signin__input-wrap {
    margin-bottom: 28px;
  }

  .signin__btn {
    width: 100%;
  }
</style>
