<template>
  <form class="login-form">
    <UiInput
      v-for="(item, i) in inputs"
      :key="i"
      :value="item"
    />
    <UiButton title="Login"/>
  </form>
</template>

<script>
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'LoginForm',
  components: { UiButton, UiInput },
  data: () => ({
    inputs: [
      {
        type: 'text',
        label: 'Name',
        placeholder: 'Введите имя',
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Введите пароль',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #DCDCDC;
    width: 400px;
    height: 200px;
    box-shadow: 1px 1px 1px 1px black;
  }
</style>
