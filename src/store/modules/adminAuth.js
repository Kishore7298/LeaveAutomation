import { router } from "../../main";
const state = {
    adminName:window.localStorage.getItem('admin_access_token')
};
const getters = {
    isLoggedIn : state=>!!state.adminName,
    getAdminName : state=>state.adminName
};
const actions = {
    adminLogin({commit},name){
        commit('setAdminName',name)
        window.localStorage.setItem('admin_access_token',name);
    },
    adminLogout({commit}){
        commit('setAdminName',null);
        router.push('/');
        window.localStorage.removeItem('admin_access_token');
    }
};
const mutations = {
    setAdminName(state,name){
        state.adminName = name
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}