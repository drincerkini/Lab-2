import { createStore } from "vuex";
import userModule from "./modules/userModule";
import newsModule from "./modules/newsModule";
import departmentModule from "./modules/departmentModule";
import branchModule from "./modules/branchModule";

const store = createStore({
  modules: {
    userModule,
    newsModule,
    departmentModule,
    branchModule
  },
});

export default store;
