<template>
  <div class="text-field">
    <label class="text-field__label" for="input">
      {{ value.label }}
      <input
        class="text-field__input"
        :type="value.type"
        id="input"
        :placeholder= "value.placeholder"
        :v-model="value.model"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .text-field__label {
    display: block;
    margin-bottom: 0.25rem;
    color: black;
  }

  .text-field__input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    margin: 0;
    font-family: $primary-f;
    font-weight: 400;
    line-height: 1.5;
    color: black;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid black;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    &:focus {
      color: rebeccapurple;
      background-color: #fff;
      border-color: rebeccapurple;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(256, 0, 158, 0.25);
    }

    &:disabled,
    &:read-only {
      background-color: rebeccapurple;
      opacity: 1;
    }
  }

</style>
