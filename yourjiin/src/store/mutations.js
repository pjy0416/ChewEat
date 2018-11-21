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
    addOneItem(state, payload) {
        const obj = {
            reviewID : payload.reviewID,
            review : payload.review,
            likeCount : payload.like,
            productID : payload.product,
            completed : false,
        };
        localStorage.setItem(payload.review, JSON.stringify(obj));
        state.reviewTest.push(obj);
        
    },
    // addOneItem(state, getreview){
    //     var obj = {
    //         completed : false,
    //         item : getreview,
    //         count : 0,
    //     };
    //     //추가 요청 보내기
    //     localStorage.setItem(getreview, JSON.stringify(obj));
    //     state.reviews.push(obj);
    // },


///////////////////////////////////////////////////////////////////////


    ClickOneItem(state, payload) {
        state.reviews[payload.index].completed = !state.reviews[payload.index].completed;
        state.reviews[payload.index].count += 1;
    },
    ReturnOneItem(state, payload) {
        state.reviews[payload.index].completed = !state.reviews[payload.index].completed;
        state.reviews[payload.index].count -= 1;   
    },


    ////////////////// Axios /////////////////////////
    SET_PRODUCT(state, data) {
        state.products = data;
    }

}
