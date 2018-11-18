
export default {
    push_data(state, data){
        state.selected = data;
    },
    remove_data(state){
        state.selected = [];
    },

    ////////////////////////////////

    Send_data(state, payload ){
        state.information = payload;
    },
    
    // SET_JOBS(state, data){
    //     state.products = data;
    // }
    addOneItem(state, getreview){
        var obj = {
            completed : false,
            item : getreview,
            count : 0,
        };
        localStorage.setItem(getreview, JSON.stringify(obj));
        state.reviews.push(obj);
    },
    
}
