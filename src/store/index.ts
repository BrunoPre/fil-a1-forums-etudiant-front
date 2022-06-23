import { createStore } from "vuex";
import { auth, State } from "./modules/auth.module";

const store = createStore<State>({
  modules: {
    auth,
  },
});

export default store;
