import vue from "vue";
import App from "./App";
import VueRouter from 'vue-router';
import store from './store';
import Form from './components/Form'

vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/', component:Form
        }
    ]
});
new vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app');