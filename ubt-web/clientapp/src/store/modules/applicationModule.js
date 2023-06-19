import axios from "axios";
const API_URL_APPLICATION = 'http://localhost:5001/application';

const applicationModule = {
    namespaced: true,


    state: {
        applications: [],
    },
    getters: {
        numberOfApplications(state) {
          return state.applications.length;
        },
      },


    mutations: {
        GET_APPLICATION(state, info){
            state.applications = info;
        },

        ADD_APPLICATION(state, info){
            state.applications.push(info);
        },

        UPDATE_APPLICATION(state, info){
            const index = state.applications.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.applications.splice(index, 1, info);
            }
        },

        DELETE_APPLICATION(state, infoId){
            state.applications = state.applications.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getApplication( { commit } ){
            const response = await axios.get(API_URL_APPLICATION);

            commit('GET_APPLICATION', response.data);
        },

        async addApplication( { commit }, info){
            const response = await axios.post(API_URL_APPLICATION, info);

            commit('ADD_APPLICATION', response)
        },

        async updateApplication( { commit }, info){
            const response = await axios.put(`${API_URL_APPLICATION}/${info._id}`, info);

            commit('UPDATE_APPLICATION', response.data);
        },

        async deleteApplication( { commit }, infoId){
            await axios.delete(`${API_URL_APPLICATION}/${infoId}`);

            commit('DELETE_APPLICATION', infoId);
        },

    }
}


export default applicationModule;