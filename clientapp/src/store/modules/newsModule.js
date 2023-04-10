import axios from "axios";
const API_URL_NEWS = 'http://localhost:3000/news';

const newsModule = {
    namespaced: true,


    state: {
        news: [],
    },
    getters: {
        numberOfNews(state) {
          return state.news.length;
        },
      },


    mutations: {
        GET_NEWS(state, info){
            state.news = info;
        },

        ADD_NEWS(state, info){
            state.news.push(info);
        },

        UPDATE_NEWS(state, info){
            const index = state.news.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.news.splice(index, 1, info);
            }
        },

        DELETE_NEWS(state, infoId){
            state.news = state.news.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getNews( { commit } ){
            const response = await axios.get(API_URL_NEWS);

            commit('GET_NEWS', response.data);
        },

        async addNews( { commit }, info){
            const response = await axios.post(API_URL_NEWS, info);

            commit('ADD_NEWS', response)
        },

        async updateNews( { commit }, info){
            const response = await axios.put(`${API_URL_NEWS}/${info._id}`, info);

            commit('UPDATE_NEWS', response.data);
        },

        async deleteNews( { commit }, infoId){
            await axios.delete(`${API_URL_NEWS}/${infoId}`);

            commit('DELETE_NEWS', infoId);
        },

    }
}


export default newsModule;