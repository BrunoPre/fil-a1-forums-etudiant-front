import { Commit } from "vuex";
import AuthService from "@/services/auth.service";
import store from "@/store";
import { IUser } from "@/types/IUser";

const user = JSON.parse(localStorage.getItem("user") || "{}");

export interface State {
  status: { loggedIn: boolean };
  user: any;
}
const initialState: State =
  user === {}
    ? { status: { loggedIn: false }, user: "" }
    : { status: { loggedIn: true }, user };

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

  async register({ commit }: { commit: Commit }, user: IUser): Promise<number> {
    return AuthService.register(user).then(
      (status_code) => {
        if (status_code >= 200 || status_code < 300) {
          commit("registerSuccess");
          return Promise.resolve(status_code);
        }
        commit("registerFailure");
        return Promise.reject(status_code);
      },
      (error) => {
        commit("registerFailure");
        return Promise.reject(error);
      }
    );
  },

  async logout({ commit }: { commit: Commit }) {
    AuthService.logout();
    commit("logout");
  },
};

const mutations = {
  loginSuccess(state: State, user: any) {
    state.status.loggedIn = true;
    state.user = user;
  },
  loginFailure(state: State) {
    state.status.loggedIn = false;
    state.user = "";
  },
  registerSuccess(state: State) {
    state.status.loggedIn = false;
  },
  registerFailure(state: State) {
    state.status.loggedIn = false;
  },
  logout(state: State) {
    state.status.loggedIn = false;
    state.user = "";
  },
};

const getters = {
  getState(state: State): State {
    return state;
  },
  isLoggedIn(state: State): boolean {
    console.log(state.status.loggedIn);
    return state.status.loggedIn;
  },
};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: actions,
  mutations: mutations,
  getters: getters,
};
