const state = {
    selected : [],
    options : [
        {text : 'ALL', value : 'item0'},
        {text : 'item1', value : 'item1'},
        {text : 'item2', value : 'item2'},
        {text : 'item3', value : 'item3'},
        {text : 'item4', value : 'item4'}
    ],
};

const getters = {

};

const mutations = {
    push_data(state, data){
        state.selected = data;
    }
};

const actions = {

};

export default {state, getters, mutations, actions} 