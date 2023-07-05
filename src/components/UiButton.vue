<template>
  <button class="btn" @click.prevent="$emit('event')">
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
    padding: 6px 0;
    border: none;
  }
</style>
