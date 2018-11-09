import vue from "vue";
import App from "./App";
import VueRouter from 'vue-router';
import store from './store';
import Form from './components/Form';
import PendingList from "./components/PendingList";
import ApprovedList from "./components/ApprovedList";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from './components/StudentLogin';
import adminFeed from './components/adminFeed';
import adminThrough from './components/adminThrough';
import status from './components/status';
import adminApproved from './components/adminApproved'

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
        {
            path:'/login', component:StudentLogin
        },
        {
            path:'/request', component:adminFeed
        },
        {
            path:'/through', component:adminThrough
        },
        {
            path:'/status', component:status
        },
        {
            path:'/adminapproved', component:adminApproved
        }
    ]
});
new vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app');