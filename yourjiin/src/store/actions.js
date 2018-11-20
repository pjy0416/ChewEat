import { fetchProduct } from '../api/index.js';

export default{
    FETCH_PRODUCT({commit}){
        return fetchProduct()
            .then( response => {
                commit('SET_PRODUCT', response.data);
                return response;
            })
            .catch()
    },    
}   

