import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView';
import Address from '../views/Address';

Vue.use(VueRouter);
let routes = [
    { path: '/', component: MainView},
    { path: '/address', component: Address }
];

export const router = new VueRouter({
    routes
}); 
