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
      .catch((err) => {
        console.log(err);
        const errorMessage = err.response?.data.message;
        if (errorMessage === "Invalid credentials") {
          context.commit("setLoginApiStatus", "invalidPassword");
        } else {
          context.commit("setLoginApiStatus", "mismatchedUsername");
        }
      });
    const statusCode = response?.status;
    const errorMessage = response?.data.message;
    const cookie = "";
    console.log(statusCode, errorMessage);
    if (statusCode === 200) {
      context.commit("setLoginApiStatus", "success");
    } else {
      context.commit("setLoginApiStatus", "failed");
    }
  },
  async registerApi(
    context: ActionContext<any, any>,
    payload: { username: string; password: string }
  ) {
    const response: AxiosResponse<any> | void = await axios
      .post(BASE_URL + REGSITER_ROUTE, payload, {})
      .catch((err: Error) => {
        console.log(err);
        window.alert(err);
      });
    const statusCode = response?.status;
    const cookie = "";
    console.log(statusCode);
    if (statusCode === 201) {
      context.commit("setRegisterApiStatus", "success");
    } else if (statusCode === 400) {
      context.commit("setRegisterApiStatus", "usernameAlreadyTaken");
    } else if (statusCode === 500) {
      context.commit("setRegisterApiStatus", "internalServerError");
    } else {
      context.commit("setRegisterApiStatus", "failed");
    }
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
