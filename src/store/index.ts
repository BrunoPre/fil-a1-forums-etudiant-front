import { createStore } from "vuex";
import authModule, { State } from "./modules/auth";

const store = createStore<State>({
  modules: {
    auth: authModule,
  },
  state: authModule.state() as State,
});

export default store;
