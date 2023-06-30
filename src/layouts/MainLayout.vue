<template>
  <div class="main">
    <UiButton
      class="main__btn"
      title="Log out"
      @event="signout"
    />
    <router-view/>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'MainLayout',
  components: { UiButton },

  methods: {
    signout() {
      this.$store.dispatch('signout');
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: green;
  }

  .main__btn {
    width: 100px;
  }
</style>
