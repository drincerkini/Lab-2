import axios from "axios";
const API_URL_SERVICE = 'http://localhost:3000/services';

const serviceModule = {
    namespaced: true,


    state: {
        services: [],
    },

    getters: {
        numberOfServices(state){
            return state.services.length;
        }
    },


    mutations: {
        GET_SERVICE(state, service){
            state.services = service;
        },

        ADD_SERVICE(state, service){
            state.services.push(service);
        },

        UPDATE_SERVICE(state, service){
            const index = state.services.findIndex(i => i._id === service._id);
            if(index !== -1){
                state.services.splice(index, 1, service);
            }
        },

        DELETE_SERVICE(state, serviceId){
            state.services = state.services.filter(ser => ser._id !== serviceId);
        },


    },



    actions: {
        async getServices( { commit } ){
            const response = await axios.get(API_URL_SERVICE);

            commit('GET_SERVICE', response.data);
        },

        async addService( { commit }, service){
            const response = await axios.post(API_URL_SERVICE, service);

            commit('ADD_SERVICE', response)
        },

        async updateService( { commit }, service){
            const response = await axios.put(`${API_URL_SERVICE}/${service._id}`, service);

            commit('UPDATE_SERVICE', response.data);
        },

        async deleteService( { commit }, serviceId){
            await axios.delete(`${API_URL_SERVICE}/${serviceId}`);

            commit('DELETE_SERVICE', serviceId);
        },

    }
}


export default serviceModule;