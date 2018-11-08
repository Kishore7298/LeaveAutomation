import vue from 'vue';
import vuex from 'vuex';
import auth from './modules/Auth';
import adminAuth from './modules/adminAuth'

vue.use(vuex);

export default new vuex.Store({
    modules:{
        auth,
        adminAuth
    }
})