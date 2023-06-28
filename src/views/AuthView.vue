<template>
  <div class="auth">
    <SignUpForm/>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'AuthView',
  components: { SignUpForm },
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
