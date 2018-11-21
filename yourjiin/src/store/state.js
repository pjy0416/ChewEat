import {storage} from './storage.js';

export default{
    selected : [],
    params : [],

    snack : [
        {id : 0, text : 'ALL', value : 'ALL'},
        {id : 1, text : 'Sweet', value : 'item1'},
        {id : 2, text : 'Chocolate', value : 'item2'},
        {id : 3, text : 'Cheese&Butter', value : 'item3'},
        {id : 4, text : 'Potato', value : 'item4'}
    ],
    noodle : [
        {id : 0, text : 'ALL', value : 'ALL'},
        {id : 1, text : 'Ramyun', value : 'item1'},
        {id : 2, text : 'Cold Noodle', value : 'item2'},
        {id : 3, text : 'Soba & Udon', value : 'item3'},
        {id : 4, text : 'Traditional', value : 'item4'}
    ],
    drink : [
        {id : 0, text : 'ALL', value : 'ALL'},
        {id : 1, text : 'Fruits', value : 'item1'},
        {id : 2, text : 'Sparkling', value : 'item2'},
        {id : 3, text : 'Ion', value : 'item3'},
        {id : 4, text : 'Traditional', value : 'item4'}
    ],
    dairy : [
        {id : 0, text : 'ALL', value : 'ALL'},
        {id : 1, text : 'Milk', value : 'item1'},
        {id : 2, text : 'Yogurt', value : 'item2'},
        {id : 3, text : 'Cheese', value : 'item3'},
    ],
    instant : [
        {id : 0, text : 'ALL', value : 'ALL'},
        {id : 1, text : 'Curry', value : 'item1'},
        {id : 2, text : 'Frozen Food', value : 'item2'},
        {id : 3, text : 'Canned', value : 'item3'},
        {id : 4, text : 'Soup', value : 'item4'}
    ],

    //navigation bar에 들어가는 내용들
    categories : [
        //'Snack', 'Noodle', 'Drink', 'Dairy', 'Instant','Community'
        {id : 'snack' , index : 1, value : 'Snack', url : 'https://i.postimg.cc/gcCHJjk3/Chew-Eat-snack-icon.png'},
        {id : 'noodle' , index : 2, value : 'Noodle', url : 'https://i.postimg.cc/mkHD1dDy/Chew-Eat-noodle-icon.png' },
        {id : 'drink' , index : 3, value : 'Drink', url : 'https://i.postimg.cc/ZqtLWg5V/Chew-Eat-drink-icon.png'},
        {id : 'dairy' , index : 4, value : 'Dairy ', url : ' https://i.postimg.cc/Z59fBpFK/Chew-Eat-dairy-icon.png' },
        {id : 'instant' , index : 5, value : 'Instant', url : 'https://i.postimg.cc/pX58KZ77/Chew-Eat-instant-icon.png' }                
    ],

    products : [],
    
    charts : [10, 20, 10, 20, 19, 29],

    information : [],

    reviews : storage.fetch(),
    //새로 입력하는 리뷰 데이터
    
    reviewTest : []
    //DB에서 불러오는 리뷰 정보

}