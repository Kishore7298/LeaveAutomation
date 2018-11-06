import { router } from "../../main";
const state = {
    Token: null
};
const getters = {
    getToken : state=> !!state.Token
};
const actions = {
    login : ({commit},token)=>{
        commit('setToken',token);
    },
    logout : ({commit})=>{
        router.push('/');
        commit('setToken',null);
    }
};
const mutations = {
    setToken(state,Token){
        state.Token =Token;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}