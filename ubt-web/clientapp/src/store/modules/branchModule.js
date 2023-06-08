import axios from "axios";
const API_URL_BRANCH = 'http://localhost:5001/branches';

const branchModule = {
    namespaced: true,


    state: {
        branches: [],
    },
    getters: {
        numberOfBranches(state) {
          return state.branches.length;
        },
      },


    mutations: {
        GET_BRANCH(state, info){
            state.branches = info;
        },

        ADD_BRANCH(state, info){
            state.branches.push(info);
        },

        UPDATE_BRANCH(state, info){
            const index = state.branches.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.branches.splice(index, 1, info);
            }
        },

        DELETE_BRANCH(state, infoId){
            state.branches = state.branches.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getBranches( { commit } ){
            const response = await axios.get(API_URL_BRANCH);

            commit('GET_BRANCH', response.data);
        },

        async addBranches( { commit }, info){
            const response = await axios.post(API_URL_BRANCH, info);

            commit('ADD_BRANCH', response)
        },

        async updateBranches( { commit }, info){
            const response = await axios.put(`${API_URL_BRANCH}/${info._id}`, info);

            commit('UPDATE_BRANCH', response.data);
        },

        async deleteBranches( { commit }, infoId){
            await axios.delete(`${API_URL_BRANCH}/${infoId}`);

            commit('DELETE_BRANCH', infoId);
        },

    }
}


export default branchModule;