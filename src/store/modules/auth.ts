import axios, { AxiosResponse } from "axios";
import { ActionContext } from "vuex";

const API_PORT = "8080";
const BASE_URL = "http://localhost:" + API_PORT + "/api/auth";
const LOGIN_ROUTE = "/login";
const REGSITER_ROUTE = "/register";

export interface State {
  loginApiStatus: string;
  registerApiStatus: string;
}

const state: State = {
  loginApiStatus: "",
  registerApiStatus: "",
};

const getters = {
  getLoginApiStatus(state: State) {
    return state.loginApiStatus;
  },
  getRegisterApiStatus(state: State) {
    return state.registerApiStatus;
  },
};

const actions = {
  async loginApi(
    context: ActionContext<any, any>,
    payload: { username: string; password: string }
  ) {
    const response: AxiosResponse<any> | void = await axios
      .post(BASE_URL + LOGIN_ROUTE, null, {
        params: { username: payload.username, password: payload.password },
      })
      .then((response) => {
        const statusCode = response?.status;
        const cookie = "";
        console.log(statusCode);
        if (statusCode === 200) {
          context.commit("setLoginApiStatus", "success");
        } else {
          // just in case
          context.commit("setLoginApiStatus", "failed");
        }
      })
      .catch((err) => {
        console.log(err);
        const errorMessage = err.response?.data.message;
        console.log(errorMessage);
        if (errorMessage === "Invalid credentials") {
          context.commit("setLoginApiStatus", "invalidPassword");
        } else {
          context.commit("setLoginApiStatus", "mismatchedUsername");
        }
      });
  },
  async registerApi(
    context: ActionContext<any, any>,
    payload: { username: string; password: string }
  ) {
    const response: AxiosResponse<any> | void = await axios
      .post(BASE_URL + REGSITER_ROUTE, payload, {})
      .then((response) => {
        const statusCode = response?.status;
        const cookie = "";
        console.log(statusCode);
        if (statusCode === 201) {
          context.commit("setRegisterApiStatus", "success");
        } else {
          // just in case
          context.commit("setRegisterApiStatus", "failed");
        }
      })
      .catch((err) => {
        console.log(err);
        const statusCode = err.response?.status;
        console.log(statusCode);
        if (statusCode === 400) {
          context.commit("setRegisterApiStatus", "usernameAlreadyTaken");
        } else if (statusCode === 500) {
          context.commit("setRegisterApiStatus", "internalServerError");
        } else {
          // just in case
          context.commit("setRegisterApiStatus", "failed");
        }
      });
  },
};

const mutations = {
  setLoginApiStatus(state: State, payload: string) {
    state.loginApiStatus = payload;
  },
  setRegisterApiStatus(state: State, payload: string) {
    state.registerApiStatus = payload;
  },
};

export default {
  namespaced: true,
  state: (): State => state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
