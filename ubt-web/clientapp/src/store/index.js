import { createStore } from "vuex";
import userModule from "./modules/userModule";
import newsModule from "./modules/newsModule";

const store = createStore({
  modules: {
    userModule,
    newsModule
  },
});

export default store;
