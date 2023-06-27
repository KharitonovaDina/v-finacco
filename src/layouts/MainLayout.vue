<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: green;
  }
</style>
