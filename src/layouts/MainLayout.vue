<template>
  <div class="main">
    <div class="main__navbar-wrap">
      <nav class="main__navbar">
        <router-link class="main__logo" to="/">
          Finacco
        </router-link>
        <ul class="main__menu">
          <li class="main__menu-item">
            <router-link class="main__menu-link" to="/plan">План</router-link>
          </li>
          <li class="main__menu-item">
            <router-link class="main__menu-link"  to="/credits">Кредиты</router-link>
          </li>
        </ul>
        <UiButton
          class="main__btn"
          title="Выйти"
          @event="signout"
        />
      </nav>
    </div>
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
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
  }

  .main__navbar-wrap {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 250px;
    height: 100vh;
    background-color: lightgray;
    padding: 28px;
  }

  .main__navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //align-items: center;
    width: 100%;
  }

  .main__logo {
    text-decoration: none;
    text-transform: uppercase;
    font-family: $primary-f;
    font-weight: 900;
    font-size: 36px;
    color: rebeccapurple;
  }

  .main__menu{
    display: flex;
    flex-direction: column;
  }

  .main__menu-item {
    margin-bottom: 16px;
  }

  .main__menu-link {
    font-family: $primary-f;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    color: black;
  }

  .main__btn {
    width: 100%;
  }
</style>
