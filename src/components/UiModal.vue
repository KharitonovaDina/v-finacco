<template>
  <div class="modal"
       v-show="modal"
       @click="close"
       @keyup.esc="close"
  >
    <div class="modal-wrap" @click.stop>
      <div class="modal__header">
        <slot name="header"></slot>
        <button class="modal__close-btn" @click="close">
          <img :src="require('@/assets/img/svg/close.svg')" alt="">
<!--          <svg class="modal__btn-icon">-->
<!--            <use xlink:href="require('@/assets/img/sprite.svg#close')"/>-->
<!--          </svg>-->
        </button>
      </div>
      <div class="modal__main">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiModal',
  props: ['modal'],

  mounted() {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },

  methods: {
    close() {
      this.$props.modal = false;
      // this.$emit('closeModal');
    },
  },

  watch: {
    modal(val) {
      console.log(val);
    },
  },
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
    background-color: rgb(000,000,000,0.4);
    z-index: 1000;
  }

  .modal-wrap {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 8px;
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    width: 100%;
    padding: 28px 28px;
    color: rebeccapurple;
    font-family: $primary-f;
    font-weight: 700;
    font-size: 28px;
    text-transform: uppercase;
    border-radius: 8px 8px 0 0;
  }

  .modal__main {
    padding: 28px 28px;
  }

  .modal__close-btn {
    border: none;
    background-color: transparent;
    width: 28px;
    height: 28px;
    padding: 0;
  }

  .modal__btn-icon {
    width: 100%;
    height: 100%;
    color: #663399;
  }
</style>
