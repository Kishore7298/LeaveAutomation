import vue from "vue";
import App from "./App";
import VueRouter from 'vue-router';
import store from './store';
import Form from './components/Form';
import PendingList from "./components/PendingList";
import ApprovedList from "./components/ApprovedList";
import AdminLogin from "./components/AdminLogin";

vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/', component:Form
        },
        {
            path:'/pending', component:PendingList
        },
        {
            path:'/approved', component:ApprovedList
        },
        {
            path:'/admin', component:AdminLogin
        },
    ]
});
new vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app');