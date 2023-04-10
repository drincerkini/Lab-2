
import signupUser from "../../../firebase/user/signupUser";
import loginUser from "../../../firebase/user/loginUser";


const userModule = {
  namespaced: true,

  state: {
    user: null,
    claims:null,
  },
  getters: {
    username(state) {
      return state.user.email;
    },
    claims(state){
      return state.claims;
    }
  },

  mutations: {
    //Mutation for setting an actual user
    setUser(state, user) {
      state.user = user;
    },
    setUserClaims(state,userClaims){
      state.claims=userClaims;
    }
  },

  actions: {
    //REGISTER USER METHOD WHICH CALLS SIGNUPUSER METHOD
    async register(_, payload) {
      await signupUser(payload);
      payload.navigate();
    },

    async login({ commit }, payload) {
      const { user } = await loginUser(payload);
      commit("setUser", user);
      payload.navigate();
    },

    async fetchUser(context, {user, claims}) {
      if (user) {
        context.commit("setUser", {
          email: user.email,
        },
        context.commit("setUserClaims", claims)
        );
      } 
      else {
        context.commit("setUser", null);
      }
    },
  },
};

export default userModule;
