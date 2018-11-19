import {storage} from './storage.js';

export default{
    selected : [],

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
        {id : 3, text : 'ion', value : 'item3'},
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

    products : [
        
    ],
    // {id : 1, url : "https://i.postimg.cc/mrgQqF8W/Chew-Eat-favor1.jpg", productName : "item", likeCount : "10", 
    //     review : "review", productTaste : "descript", productMatrials : "material", allergenic : "allergenic", createdTime : "create time"}    
    
    //chart data 6개 
    charts : [],

    information : [],

    reviews : storage.fetch(),

    // 리뷰에 들어갈 기본 요소
    // var obj = {
    //     completed : false,
    //     item : getreview,
            //item -- 리뷰 내용
    //     count : 0,
    // };
}