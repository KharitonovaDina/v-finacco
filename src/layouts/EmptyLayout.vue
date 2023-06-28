<template>
  <div class="empty">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
};
</script>

<style lang="scss" scoped>
  .empty {
    background-color: gray;
    height: 100vh;
    width: 100%;
  }
</style>
