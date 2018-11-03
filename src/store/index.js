import vue from 'vue';
import vuex from 'vuex';
import auth from './modules/Auth'

vue.use(vuex);

export default new vuex.Store({
    modules:{
        auth
    }
})