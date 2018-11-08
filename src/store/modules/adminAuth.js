import { router } from "../../main";
const state = {
    adminName:null
};
const getters = {
    isLoggedIn : state=>!!state.adminName,
    getAdminName : state=>state.adminName
};
const actions = {
    adminLogin({commit},name){
        commit('setAdminName',name)
    },
    adminLogout({commit}){
        commit('setAdminName',null);
        router.push('/')
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