import axios from 'axios';

const root = '/product/information';

const api = {
    chart : ''
};
const snack = {
    SnackAll : `${root}/snack`,
    Snackitem1 : `${root}/snack/item1`,
    Snackitem2 : `${root}/snack/item2`,
    Snackitem3 : `${root}/snack/item3`,
    Snackitem4 : `${root}/snack/item4`,
};
const noodle = {
    NoodleAll : `${root}/noodle`,
    Noodleitem1 : `${root}/noodle/item1`,
    Noodleitem2 : `${root}/noodle/item2`,
    Noodleitem3 : `${root}/noodle/item3`,
    Noodleitem4 : `${root}/noodle/item4`,
};
const drink = { 
    DrinkAll : `${root}/drink`,
    Drinkitem1 : `${root}/drink/item1`,
    Drinkitem2 : `${root}/drink/item2`,
    Drinkitem3 : `${root}/drink/item3`,
    Drinkitem4 : `${root}/drink/item4`,
};
const dairy = {
    DairyAll : `${root}/dairy`,
    Dairyitem1 : `${root}/dairy/item1`,
    Dairyitem2 : `${root}/dairy/item2`,
    Dairyitem3 : `${root}/dairy/item3`,
    Dairyitem4 : `${root}/dairy/item4`,
};
const instant = {
    InstantAll : `${root}/instant`,
    Instantitem1 : `${root}/instant/item1`,
    Instantitem2 : `${root}/instant/item2`,
    Instantitem3 : `${root}/instant/item3`,
    Instantitem4 : `${root}/instant/item4`,
};

function fetchChart(){
    return axios.get(api.chart);
}
function fetchSnack(){
    return axios.get(snack.SnackAll);
}
function fetchSnackItem1(){
    return axios.get(snack.Snackitem1);
}
function fetchSnackItem2(){
    return axios.get(snack.Snackitem2);
}
function fetchSnackItem3(){
    return axios.get(snack.Snackitem3);
}
function fetchSnackItem4(){
    return axios.get(snack.Snackitem4);
}
/////////////////////////////////////////////////////
function fetchDrink(){
    return axios.get(drink.DrinkAll);
}
function fetchDrinkItem1(){
    return axios.get(drink.Drinkitem1);
}
function fetchDrinkItem2(){
    return axios.get(drink.Drinkitem2);
}
function fetchDrinkItem3(){
    return axios.get(drink.Drinkitem3);
}
function fetchDrinkItem4(){
    return axios.get(drink.Drinkitem4);
}
//////////////////////////////////////////////////////
function fetchNoodle(){
    return axios.get(noodle.NoodleAll);
}
function fetchNoodleItem1(){
    return axios.get(noodle.Noodleitem1);
}
function fetchNoodleItem2(){
    return axios.get(noodle.Noodleitem2);
}
function fetchNoodleItem3(){
    return axios.get(noodle.Noodleitem3);
}
function fetchNoodleItem4(){
    return axios.get(noodle.Noodleitem4);
}
//////////////////////////////////////////////////////
function fetchDairy(){
    return axios.get(dairy.DairyAll);
}
function fetchDairyItem1(){
    return axios.get(dairy.Dairyitem1);
}
function fetchDairyItem2(){
    return axios.get(dairy.Dairyitem2);
}
function fetchDairyItem3(){
    return axios.get(dairy.Dairyitem3);
}
function fetchDairyItem4(){
    return axios.get(dairy.Dairyitem4);
}
/////////////////////////////////////////////////////////
function fetchInstant(){
    return axios.get(instant.InstantAll);
}
function fetchInstantItem1(){
    return axios.get(instant.Instantitem1);
}
function fetchInstantItem2(){
    return axios.get(instant.Instantitem2);
}
function fetchInstantItem3(){
    return axios.get(instant.Instantitem3);
}
function fetchInstantItem4(){
    return axios.get(instant.Instantitem4);
}
export {
    fetchChart, 
    fetchSnack, fetchSnackItem1, fetchSnackItem2, fetchSnackItem3, fetchSnackItem4,
    fetchDrink, fetchDrinkItem1, fetchDrinkItem2, fetchDrinkItem3, fetchDrinkItem4,
    fetchNoodle, fetchNoodleItem1, fetchNoodleItem2, fetchNoodleItem3, fetchNoodleItem4,
    fetchDairy, fetchDairyItem1, fetchDairyItem2, fetchDairyItem3, fetchDairyItem4,
    fetchInstant, fetchInstantItem1, fetchInstantItem2, fetchInstantItem3, fetchInstantItem4,
}