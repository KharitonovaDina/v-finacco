<template>
  <button class="btn">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
    background-color: rebeccapurple;
  }
</style>
