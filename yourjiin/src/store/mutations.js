
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
    ClickOneItem(state, payload) {
        state.reviews[payload.index].completed = !state.reviews[payload.index].completed;
        state.reviews[payload.index].count += 1;
    },
    ReturnOneItem(state, payload) {
        state.reviews[payload.index].completed = !state.reviews[payload.index].completed;
        state.reviews[payload.index].count -= 1;   
    },


    ////////////////// Axios /////////////////////////
    SET_PRODUCT(state, data){
        state.products = data;
    }
}
