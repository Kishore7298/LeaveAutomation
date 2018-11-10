import { router } from "../../main";
const state = {
    Token: window.localStorage.getItem('access_token'),
    name:null,
};
const getters = {
    getToken : state=> !!state.Token,
    getEmail : state=>state.Token,
    getName : state => state.name
};
const actions = {
    login : ({commit},token)=>{
        commit('setToken',token);
        window.localStorage.setItem('access_token',token);
    },
    logout : ({commit})=>{
        router.push('/');
        commit('setToken',null);
        window.localStorage.removeItem('access_token');
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