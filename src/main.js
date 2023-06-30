import Vue from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/index.scss';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBWbcy6aZOc1ODLpcVVbBwSrETwiqB9NII',
  authDomain: 'v-finacco.firebaseapp.com',
  projectId: 'v-finacco',
  storageBucket: 'v-finacco.appspot.com',
  messagingSenderId: '95687883004',
  appId: '1:95687883004:web:7d785ba385eeed5050bf79',
  measurementId: 'G-PY9LGV3BZ9',
};

initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      this.$store.dispatch('stateChanged', user);
    });
  },
}).$mount('#app');
