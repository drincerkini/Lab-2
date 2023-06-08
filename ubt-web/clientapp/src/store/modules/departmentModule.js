import axios from "axios";
const API_URL_Departments = 'http://localhost:5001/departments';

const departmentModule = {
    namespaced: true,


    state: {
        departments: [],
    },
    getters: {
        numberOfdepartments(state) {
          return state.departments.length;
        },
      },


    mutations: {
        GET_Departments(state, dep){
            state.departments = dep;
        },

        ADD_Departments(state, dep){
            state.departments.push(dep);
        },

        UPDATE_Departments(state, dep){
            const index = state.departments.findIndex(i => i._id === dep._id);
            if(index !== -1){
                state.departments.splice(index, 1, dep);
            }
        },

        DELETE_Departments(state, infoId){
            state.departments = state.departments.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getDepartments( { commit } ){
            const response = await axios.get(API_URL_Departments);

            commit('GET_Departments', response.data);
        },

        async addDepartments( { commit }, dep){
            const response = await axios.post(API_URL_Departments, dep);

            commit('ADD_Departments', response)
        },

        async upDateDepartments( { commit }, dep){
            const response = await axios.put(`${API_URL_Departments}/${dep._id}`, dep);

            commit('UPDATE_Departments', response.data);
        },

        async deleteDepartments( { commit }, depId){
            await axios.delete(`${API_URL_Departments}/${depId}`);

            commit('DELETE_Departments', depId);
        },

    }
}


export default departmentModule;