import {storage} from './storage.js';

export default{
    selected : [],
    options : [
        {text : 'ALL', value : 'ALL'},
        {text : 'Item1', value : 'item1'},
        {text : 'Item2', value : 'item2'},
        {text : 'Item3', value : 'item3'},
        {text : 'Item4', value : 'item4'}
    ],

    categories : [
        //'Snack', 'Noodle', 'Drink', 'Dairy', 'Instant','Community'
        {id : 'snack' , index : 1, value : 'Snack'},
        {id : 'noodle' , index : 2, value : 'Noodle'},
        {id : 'drink' , index : 3, value : 'Drink'},
        {id : 'dairy' , index : 4, value : 'Dairy '},
        {id : 'instant' , index : 5, value : 'Instant'}                
    ],

    products : [
        {id : 0, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title0', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item0'},
        {id : 1, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title1', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item1'},
        {id : 2, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title2', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item2'},
        {id : 3, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title3', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item3'},
        {id : 4, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title4', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item4'},
        {id : 5, src : 'https://picsum.photos/150/150/?image=25', 
            title : 'title5', text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit', item : 'item5'}
    ],
    
    value : {
        data1: 30, data2 : 35, data3: 40, data4: 38, data5: 45
    },

    reviews : storage.fetch(),
}