<template>
  <div class="auth">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'AuthView',
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
