import axios from "axios";
const API_URL_PROFESSOR = 'http://localhost:5001/professors';

const professorModule = {
    namespaced: true,


    state: {
        professors: [],
    },
    getters: {
        numberOfProfessors(state) {
          return state.professors.length;
        },
      },


    mutations: {
        GET_PROFESSOR(state, info){
            state.professors = info;
        },

        ADD_PROFESSOR(state, info){
            state.professors.push(info);
        },

        UPDATE_PROFESSOR(state, info){
            const index = state.professors.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.professors.splice(index, 1, info);
            }
        },

        DELETE_PROFESSOR(state, infoId){
            state.professors = state.professors.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getProfessors( { commit } ){
            const response = await axios.get(API_URL_PROFESSOR);

            commit('GET_PROFESSOR', response.data);
        },

        async addProfessors( { commit }, info){
            const response = await axios.post(API_URL_PROFESSOR, info);

            commit('ADD_PROFESSOR', response)
        },

        async updateProfessors( { commit }, info){
            const response = await axios.put(`${API_URL_PROFESSOR}/${info._id}`, info);

            commit('UPDATE_PROFESSOR', response.data);
        },

        async deleteProfessors( { commit }, infoId){
            await axios.delete(`${API_URL_PROFESSOR}/${infoId}`);

            commit('DELETE_PROFESSOR', infoId);
        },

    }
}


export default professorModule;