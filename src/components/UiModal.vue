<template>
  <div class="modal">
    <div class="modal-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiModal',
};
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(200,200,200,0.5);
    //opacity: 50%;
  }

  .modal-wrap {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    background-color: white;
    padding: 40px;
  }
</style>
