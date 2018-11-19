
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
    
    SET_CHART(state, data){
        state.charts = data;
    },
    SET_ROOT(state, data) {
        state.products = data;
    },
    SNACK_ALL(state, data){
        state.products = data;
    },
    SNACK_ITEM1(state, data){
        state.products = data;
    },
    SNACK_ITEM2(state, data){
        state.products = data;
    },
    SNACK_ITEM3(state, data){
        state.products = data;
    },
    SNACK_ITEM4(state, data){
        state.products = data;
    },
    //////////////////////////////////////////////////////////
    DRINK_ALL(state, data){
        state.products = data;
    },
    DRINK_ITEM1(state, data){
        state.products = data;
    },
    DRINK_ITEM2(state, data){
        state.products = data;
    },
    DRINK_ITEM3(state, data){
        state.products = data;
    },
    DRINK_ITEM4(state, data){
        state.products = data;
    },
    /////////////////////////////////////////////////////////////
    NOODLE_ALL(state, data){
        state.products = data;
    },
    NOODLE_ITEM1(state, data){
        state.products = data;
    },
    NOODLE_ITEM2(state, data){
        state.products = data;
    },
    NOODLE_ITEM3(state, data){
        state.products = data;
    },
    NOODLE_ITEM4(state, data){
        state.products = data;
    },
    ///////////////////////////////////////////////////////////////
    DAIRY_ALL(state, data){
        state.products = data;
    },
    DAIRY_ITEM1(state, data){
        state.products = data;
    },
    DAIRY_ITEM2(state, data){
        state.products = data;
    },
    DAIRY_ITEM3(state, data){
        state.products = data;
    },
    DAIRY_ITEM4(state, data){
        state.products = data;
    },
    ////////////////////////////////////////////////////////////////
    INSTANT_ALL(state, data){
        state.products = data;
    },
    INSTANT_ITEM1(state, data){
        state.products = data;
    },
    INSTANT_ITEM2(state, data){
        state.products = data;
    },
    INSTANT_ITEM3(state, data){
        state.products = data;
    },
    INSTANT_ITEM4(state, data){
        state.products = data;
    },
    /////////////////////////////////////////////////////////////////
}
