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
        
        sessionStorage.setItem(payload.productID, payload.productID );
        sessionStorage.setItem(payload.productName, payload.productName );
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
        state.reviews.push(obj);
        
    },

    ////////////////// Axios /////////////////////////
    SET_PRODUCT(state, data) {
        state.products = data;
    },

}
