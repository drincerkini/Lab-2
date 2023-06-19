import axios from "axios";
const API_URL_activity = 'http://localhost:5001/activities';

const activityModule = {
    namespaced: true,


    state: {
        activities: [],
    },
    getters: {
        numberOfActivities(state) {
          return state.activities.length;
        },
      },


    mutations: {
        GET_ACTIVITY(state, info){
            state.activities = info;
        },

        ADD_ACTIVITY(state, info){
            state.activities.push(info);
        },

        UPDATE_ACTIVITY(state, info){
            const index = state.activities.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.activities.splice(index, 1, info);
            }
        },

        DELETE_ACTIVITY(state, infoId){
            state.activities = state.activities.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getActivity( { commit } ){
            const response = await axios.get(API_URL_activity);

            commit('GET_ACTIVITY', response.data);
        },

        async addActivity( { commit }, info){
            const response = await axios.post(API_URL_activity, info);

            commit('ADD_ACTIVITY', response)
        },

        async updateActivity( { commit }, info){
            const response = await axios.put(`${API_URL_activity}/${info._id}`, info);

            commit('UPDATE_ACTIVITY', response.data);
        },

        async deleteActivity( { commit }, infoId){
            await axios.delete(`${API_URL_activity}/${infoId}`);

            commit('DELETE_ACTIVITY', infoId);
        },

    }
}


export default activityModule;