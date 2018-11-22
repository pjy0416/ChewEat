import VueRouter from 'vue-router';
import Vue from 'vue';

import HomeView from '../views/HomeView.vue';
import CommodityView from '../views/CommodityView.vue';

///////////////////////////////////////////////////////////////////////////////////////////

import ProductView from '../views/ProductView.vue';

Vue.use(VueRouter);


export const router = new VueRouter({
    mode : 'history',

    routes : [
        {
            path : '/',
            redirect : '/home'
        },
        {
            path : '/home',
            name : 'home',
            component : HomeView
        },
        {
            path : '/commodity/:id',
            name : 'commodity',
            props : true,
            component : CommodityView
        },
        {
            path : '/commodity/product/:item',
            name : 'item',
            props : true,
            component : ProductView
        },
        {
            path : '/community',
            name : 'community',

        }
    ]
})