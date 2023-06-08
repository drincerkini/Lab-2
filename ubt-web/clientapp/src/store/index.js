import { createStore } from "vuex";
import userModule from "./modules/userModule";
import newsModule from "./modules/newsModule";
import departmentModule from "./modules/departmentModule";

const store = createStore({
  modules: {
    userModule,
    newsModule,
    departmentModule
  },
});

export default store;
