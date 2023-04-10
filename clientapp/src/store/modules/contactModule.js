import axios from "axios";
const API_URL_CONTACT = 'http://localhost:3000/contact';

const contactModule = {
    namespaced: true,


    state: {
        contacts: [],
    },
    getters: {
        numberOfContacts(state){
            return state.contacts.length;
        }
    },


    mutations: {
        GET_CONTACT(state, info){
            state.contacts = info;
        },

        ADD_CONTACT(state, info){
            state.contacts.push(info);
        },

        UPDATE_CONTACT(state, info){
            const index = state.contacts.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.contacts.splice(index, 1, info);
            }
        },

        DELETE_CONTACT(state, infoId){
            state.contacts = state.contacts.filter(tm => tm._id !== infoId);
        },


    },


    actions: {
        async getContact( { commit } ){
            const response = await axios.get(API_URL_CONTACT);

            commit('GET_CONTACT', response.data);
        },

        async addContact( { commit }, info){
            const response = await axios.post(API_URL_CONTACT, info);

            commit('ADD_CONTACT', response)
        },

        async updateContact( { commit }, info){
            const response = await axios.put(`${API_URL_CONTACT}/${info._id}`, info);

            commit('UPDATE_CONTACT', response.data);
        },

        async deleteContact( { commit }, infoId){
            await axios.delete(`${API_URL_CONTACT}/${infoId}`);

            commit('DELETE_CONTACT', infoId);
        },

    }
}


export default contactModule;