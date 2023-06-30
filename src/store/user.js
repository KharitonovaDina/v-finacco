import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';

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
    unsetUser(state) {
      state.user = {
        isAuth: false,
        userId: null,
      };
    },
  },
  actions: {
    signup({ commit }, payload) {
      commit('setProcessing', true);
      commit('clearError');
      createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then(() => {
          commit('setProcessing', false);
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
      commit('clearError');
      signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then(() => {
          commit('setProcessing', false);
        })
        .catch((error) => {
          commit('setProcessing', false);
          commit('setError', error.message);
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    },
    signout() {
      signOut(getAuth());
    },
    stateChanged({ commit }, payload) {
      if (payload) {
        commit('setUser', payload.userId);
      } else {
        commit('unsetUser');
      }
    },
  },
};
