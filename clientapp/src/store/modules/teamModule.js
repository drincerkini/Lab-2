import axios from "axios";
const API_URL_TEAM = 'http://localhost:3000/teams';

const teamModule = {
    namespaced: true,


    state: {
        teams: [],
    },


    mutations: {
        GET_TEAM(state, team){
            state.teams = team;
        },

        ADD_TEAM(state, team){
            state.teams.push(team);
        },

        UPDATE_TEAM(state, team){
            const index = state.teams.findIndex(i => i._id === team._id);
            if(index !== -1){
                state.teams.splice(index, 1, team);
            }
        },

        DELETE_TEAM(state, teamId){
            state.teams = state.teams.filter(tm => tm._id !== teamId);
        },


    },



    actions: {
        async getTeams( { commit } ){
            const response = await axios.get(API_URL_TEAM);

            commit('GET_TEAM', response.data);
        },

        async addTeam( { commit }, team){
            const response = await axios.post(API_URL_TEAM, team);

            commit('ADD_TEAM', response)
        },

        async updateTeam( { commit }, team){
            const response = await axios.put(`${API_URL_TEAM}/${team._id}`, team);

            commit('UPDATE_TEAM', response.data);
        },

        async deleteTeam( { commit }, teamId){
            await axios.delete(`${API_URL_TEAM}/${teamId}`);

            commit('DELETE_TEAM', teamId);
        },

    }
}


export default teamModule;