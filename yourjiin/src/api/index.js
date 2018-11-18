import axios from 'axios';

const api = {
    product : '/product/information',
};

function fetchProduct(){
    return axios.get(api.product);
}


export {
    fetchProduct
}