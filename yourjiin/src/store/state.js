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
        {id : 2, text : 'Spackling', value : 'item2'},
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

    categories : [
        //'Snack', 'Noodle', 'Drink', 'Dairy', 'Instant','Community'
        {id : 'snack' , index : 1, value : 'Snack', url : 'http://drive.google.com/uc?export=view&id=1qHj2-a0JhvAgeuz537U5TDTRHhvZdqPd'},
        {id : 'noodle' , index : 2, value : 'Noodle', url : 'http://drive.google.com/uc?export=view&id=11Hwpn1maS4RnaqupM3CHs1qBCnWScjQw' },
        {id : 'drink' , index : 3, value : 'Drink', url : 'http://drive.google.com/uc?export=view&id=1LU-BKYcDUge246A05hKDwXWpNuexeEtC'},
        {id : 'dairy' , index : 4, value : 'Dairy ', url : 'http://drive.google.com/uc?export=view&id=1pUxben8VZKfGWYfpC-8x96Y8ELQBlFZ4' },
        {id : 'instant' , index : 5, value : 'Instant', url : 'http://drive.google.com/uc?export=view&id=1KNGq-aD5etDdl4OgJhST0nz1DIWVrmjM' }                
    ],

    products : [
        {id : 0, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title0', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '123', item : 'item1',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'},
        {id : 1, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title1', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '500', item : 'item2',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'},
        {id : 2, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title2', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '451', item : 'item3',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'},
        {id : 3, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title3', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '200', item : 'item4',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'},
        {id : 4, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title4', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '300', item : 'item5',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'},
        {id : 5, src : 'http://drive.google.com/uc?export=view&id=1hYOu8XhP6qgzwpA8uOD-yLm3k6lAlwL6', 
            title : 'title5', dec : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', like : '400', item : 'item6',
            nutrient : 'Nutrient section' , allerginic : 'allerginic section', review : 10, comment : 'Comment Section'}
    ],
    
    value : {
        data1: 30, data2 : 35, data3: 40, data4: 38, data5: 45
    },

    information : [],

    reviews : storage.fetch(),
}