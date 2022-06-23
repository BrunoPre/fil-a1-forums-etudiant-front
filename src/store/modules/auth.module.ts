import { Commit } from "vuex";
import AuthService from "@/services/auth.service";
import store from "@/store";

const user = JSON.parse(localStorage.getItem("user") || "{}");

export interface State {
  status: { loggedIn: boolean };
  user: any;
}
const initialState: State = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const actions = {
  async login({ commit }: { commit: Commit }, user: any) {
    return AuthService.login(user).then(
      (user) => {
        commit("loginSuccess", user);
        console.log(store.state.user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },

  async register({ commit }: { commit: Commit }, user: any) {
    return AuthService.register(user).then(
      (response) => {
        commit("registerSuccess");
        return Promise.resolve(response.data);
      },
      (error) => {
        commit("registerFailure");
        return Promise.reject(error);
      }
    );
  },
};

const mutations = {
  loginSuccess(state: State, user: any) {
    state.status.loggedIn = true;
    state.user = user;
  },
  loginFailure(state: State) {
    state.status.loggedIn = false;
    state.user = null;
  },
  registerSuccess(state: State) {
    state.status.loggedIn = false;
  },
  registerFailure(state: State) {
    state.status.loggedIn = false;
  },
};

const getters = {
  getState(state: State): State {
    return state;
  },
};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: actions,
  mutations: mutations,
  getters: getters,
};
