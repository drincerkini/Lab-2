import { createStore } from "vuex";
import userModule from "./modules/userModule";
import newsModule from "./modules/newsModule";
import departmentModule from "./modules/departmentModule";
import branchModule from "./modules/branchModule";
import professorModule  from "./modules/professorModule";
import applicationModule from "./modules/applicationModule";

const store = createStore({
  modules: {
    userModule,
    newsModule,
    departmentModule,
    branchModule,
    professorModule,
    applicationModule

  },
});

export default store;
