import axios from "axios";
const API_URL_REVIEWS = 'http://localhost:3000/reviews';

const reviewsModule = {
    namespaced: true,


    state: {
        reviews: [],
    },


    mutations: {
        GET_REVIEWS(state, info){
            state.reviews = info;
        },

        ADD_REVIEWS(state, info){
            state.reviews.push(info);
        },

        UPDATE_REVIEWS(state, info){
            const index = state.reviews.findIndex(i => i._id === info._id);
            if(index !== -1){
                state.reviews.splice(index, 1, info);
            }
        },

        DELETE_REVIEWS(state, infoId){
            state.reviews = state.reviews.filter(tm => tm._id !== infoId);
        },


    },



    actions: {
        async getReviews( { commit } ){
            const response = await axios.get(API_URL_REVIEWS);

            commit('GET_REVIEWS', response.data);
        },

        async addReviews( { commit }, info){
            const response = await axios.post(API_URL_REVIEWS, info);

            commit('ADD_REVIEWS', response)
        },

        async updateReviews( { commit }, info){
            const response = await axios.put(`${API_URL_REVIEWS}/${info._id}`, info);

            commit('UPDATE_REVIEWS', response.data);
        },

        async deleteReviews( { commit }, infoId){
            await axios.delete(`${API_URL_REVIEWS}/${infoId}`);

            commit('DELETE_REVIEWS', infoId);
        },

    }
}


export default reviewsModule;