import axios from 'axios';
// import state from '../store/state.js';

const root = 'product/information';
//         axios.get(`${root}/${this.param}/${this.item}`)
//             .then(response =>
//                 (this.$store.state.products = response.data))
//             .catch()

    const api = {
        product : `${root}/snack/item1`,
    }
function fetchProduct(){
    return axios.get(api.product);
}
export {
   fetchProduct
}