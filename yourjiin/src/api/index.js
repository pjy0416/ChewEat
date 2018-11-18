import axios from 'axios';

const api = {
    product : '/api/test/query2',
};

function fetchProduct(){
    return axios.get(api.product);
}

function fetchAsk(){
    return axios.get(api.ask);
}

function fetchJobs(){
    return axios.get(api.jobs);
}
//axios에 대한 부분을 api 속에서 선언해주고 각 views에서 가져갈 수 있게끔 해준다
function fetchUser(){
    return axios.get(api.user);
}
function fetchItem(){
    return axios.get(api.item);
}

export {
    fetchProduct,
    fetchAsk,
    fetchJobs,
    fetchUser,
    fetchItem
}