require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import {BootstrapVue} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(BootstrapVue);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Dashboard from './components/Dashboard.vue'

import { routes } from './Route/routes'

const router = new VueRouter({
    routes, 
    mode: 'history',

})

const app = new Vue({
    el: '#app',
    router,
    components: { Dashboard }
});