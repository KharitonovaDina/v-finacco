import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  state: {
    user: {
      isAuth: false,
      userId: null,
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuth,
  },
  mutations: {
    setUser(state, payload) {
      state.user.isAuth = true;
      state.user.userId = payload;
    },
  },
  actions: {
    signup({ commit }, payload) {
      commit('setProcessing', true);
      // const auth = getAuth();
      createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((userCredential) => {
          commit('setUser', userCredential.user);
          commit('setProcessing', false);
          console.log(userCredential.user);
          // const user = userCredential.user;
        })
        .catch((error) => {
          commit('setProcessing', false);
          commit('setError', error.message);
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    },
    signin({ commit }, payload) {
      commit('setProcessing', true);
      // const auth = getAuth();
      signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((userCredential) => {
          commit('setUser', userCredential.user);
          commit('setProcessing', false);
          // console.log(userCredential.user);
          // const user = userCredential.user;
        })
        .catch((error) => {
          commit('setProcessing', false);
          commit('setError', error.message);
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    },
  },
};
