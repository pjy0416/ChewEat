// import { fetchProduct } from '../api/index.js';
import axios from 'axios';

export default{
    FETCH_CHARTDATA({commit}){
        axios.get().
        setTimeout(() => {
            commit('Set_ChartData', this.$store.state.chartTest)
        }, 500)
    }
}   

