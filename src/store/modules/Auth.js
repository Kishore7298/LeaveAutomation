import { router } from "../../main";
const state = {
    Token: null,
    name:null,
};
const getters = {
    getToken : state=> !!state.Token,
    getEmail : state=>state.Token
};
const actions = {
    login : ({commit},token)=>{
        commit('setToken',token);
    },
    logout : ({commit})=>{
        router.push('/');
        commit('setToken',null);
    },
    name : ({commit},name)=>{
        commit('setName',name);
    }
};
const mutations = {
    setToken(state,Token){
        state.Token =Token;
    },
    setName(state,name){
        state.name = name;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}