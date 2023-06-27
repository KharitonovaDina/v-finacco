import Vue from 'vue';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/compat/app';
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

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
