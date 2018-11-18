import {fetchProduct} from '../api/index.js';
export default{
    FETCH_PRODUCT(context) {
        return fetchProduct()
            .then(response => {
                context('SET_PRODUCT', response.data);
                return response;
            })
            .catch()
    }
}   