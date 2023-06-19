import { createStore } from "vuex";
import userModule from "./modules/userModule";
import newsModule from "./modules/newsModule";
import applicationModule from "./modules/applicationModule";
import contactModule from "./modules/contactModule";
import activityModule from "./modules/activityModule";


const store = createStore({
  modules: {
    userModule,
    newsModule,
    applicationModule,
    contactModule,
    activityModule
  },
});

export default store;
