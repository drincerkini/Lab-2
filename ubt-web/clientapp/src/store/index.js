import { createStore } from "vuex";
import userModule from "./modules/userModule";

const store = createStore({
  modules: {
    userModule
  },
});

export default store;
