import Vue from 'vue'
import App from './App.vue'
import 'reset-css';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './messages'
import VueMq from 'vue-mq';
import { router } from './routes/index';

Vue.use(ElementUI);
Vue.use(VueMq, {
    breakpoints: {
        mobile: 610,
        desktop: Infinity
    }
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    i18n,
    router
}).$mount('#app')