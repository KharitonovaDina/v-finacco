import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
          commit('setUser', userCredential.user.uid);
          commit('setProcessing', false);
          // console.log(userCredential.user.uid);
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
