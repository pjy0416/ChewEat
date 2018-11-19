import {fetchChart, fetchRoot,
    fetchSnack, fetchSnackItem1, fetchSnackItem2, fetchSnackItem3, fetchSnackItem4,
    fetchDrink, fetchDrinkItem1, fetchDrinkItem2, fetchDrinkItem3, fetchDrinkItem4,
    fetchNoodle, fetchNoodleItem1, fetchNoodleItem2, fetchNoodleItem3, fetchNoodleItem4,
    fetchDairy, fetchDairyItem1, fetchDairyItem2, fetchDairyItem3, fetchDairyItem4,
    fetchInstant, fetchInstantItem1, fetchInstantItem2, fetchInstantItem3, fetchInstantItem4,
} from '../api/index.js';

export default{
    FETCH_CHART({commit}) {
        return fetchChart()
            .then(response => {
                commit('SET_CHART',response.data);
                return response;
            })
            .catch()
    },
    FETCH_ROOT({commit}){
        return fetchRoot()
            .then(response => {
                commit('SET_ROOT', response.data);
                return response;
            })
            .catch()
    },
//////////////////////////////////////////////////////////////////
    FETCH_SNACKALL({commit}) {
        return fetchSnack()
            .then(response => {
                commit('SNACK_ALL', response.data);
                return response;
            })
            .catch()
    },
    FETCH_SNACKITEM1({commit}) {
        return fetchSnackItem1()
            .then(response => {
                commit('SNACK_ITEM1', response.data);
                return response;
            })
            .catch()
    },
    FETCH_SNACKITEM2({commit}) {
        return fetchSnackItem2()
            .then(response => {
                commit('SNACK_ITEM2', response.data);
                return response;
            })
            .catch()
    },
    FETCH_SNACKITEM3({commit}) {
        return fetchSnackItem3()
            .then(response => {
                commit('SNACK_ITEM3', response.data);
                return response;
            })
            .catch()
    },
    FETCH_SNACKITEM4({commit}) {
        return fetchSnackItem4()
            .then(response => {
                commit('SNACK_ITEM4', response.data);
                return response;
            })
            .catch()
    },
    ////////////////////////////////////////////////////////////////
    FETCH_DRINKALL({commit}) {
        return fetchDrink()
            .then(response => {
                commit('DRINK_ALL', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DRINKITEM1({commit}) {
        return fetchDrinkItem1()
            .then(response => {
                commit('DRINK_ITEM1', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DRINKITEM2({commit}) {
        return fetchDrinkItem2()
            .then(response => {
                commit('DRINK_ITEM2', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DRINKITEM3({commit}) {
        return fetchDrinkItem3()
            .then(response => {
                commit('DRINK_ITEM3', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DRINKITEM4({commit}) {
        return fetchDrinkItem4()
            .then(response => {
                commit('DRINK_ITEM4', response.data);
                return response;
            })
            .catch()
    },
    ///////////////////////////////////////////////////////
    FETCH_NOODLEALL({commit}) {
        return fetchNoodle()
            .then(response => {
                commit('NOODLE_ALL', response.data);
                return response;
            })
            .catch()
    },
    FETCH_NOODLEITEM1({commit}) {
        return fetchNoodleItem1()
            .then(response => {
                commit('NOODLE_ITEM1', response.data);
                return response;
            })
            .catch()
    },
    FETCH_NOODLEITEM2({commit}) {
        return fetchNoodleItem2()
            .then(response => {
                commit('NOODLE_ITEM2', response.data);
                return response;
            })
            .catch()
    },
    FETCH_NOODLEITEM3({commit}) {
        return fetchNoodleItem3()
            .then(response => {
                commit('NOODLE_ITEM3', response.data);
                return response;
            })
            .catch()
    },
    FETCH_NOODLEITEM4({commit}) {
        return fetchNoodleItem4()
            .then(response => {
                commit('NOODLE_ITEM4', response.data);
                return response;
            })
            .catch()
    },
    //////////////////////////////////////////////////////////
    FETCH_DAIRYALL({commit}) {
        return fetchDairy()
            .then(response => {
                commit('DAIRY_ALL', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DAIRYITEM1({commit}) {
        return fetchDairyItem1()
            .then(response => {
                commit('DAIRY_ITEM1', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DAIRYITEM2({commit}) {
        return fetchDairyItem2()
            .then(response => {
                commit('DAIRY_ITEM2', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DAIRYITEM3({commit}) {
        return fetchDairyItem3()
            .then(response => {
                commit('DAIRY_ITEM3', response.data);
                return response;
            })
            .catch()
    },
    FETCH_DAIRYITEM4({commit}) {
        return fetchDairyItem4()
            .then(response => {
                commit('DAIRY_ITEM4', response.data);
                return response;
            })
            .catch()
    },
    /////////////////////////////////////////////////////////////
    FETCH_INSTANTALL({commit}) {
        return fetchInstant()
            .then(response => {
                commit('INSTANT_ALL', response.data);
                return response;
            })
            .catch()
    },
    FETCH_INSTANTITEM1({commit}) {
        return fetchInstantItem1()
            .then(response => {
                commit('INSTANT_ITEM1', response.data);
                return response;
            })
            .catch()
    },
    FETCH_INSTANTITEM2({commit}) {
        return fetchInstantItem2()
            .then(response => {
                commit('INSTANT_ITEM2', response.data);
                return response;
            })
            .catch()
    },
    FETCH_INSTANTITEM3({commit}) {
        return fetchInstantItem3()
            .then(response => {
                commit('INSTANT_ITEM3', response.data);
                return response;
            })
            .catch()
    },
    FETCH_INSTANTITEM4({commit}) {
        return fetchInstantItem4()
            .then(response => {
                commit('INSTANT_ITEM4', response.data);
                return response;
            })
            .catch()
    },
}   

