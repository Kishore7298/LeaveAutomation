const state = {
    Token: null
};
const getters = {
    getToken : state=> !!state.Token
};
const actions = {
    login : ({commit})=>{
        commit('setToken',"abc");
    },
    logout : ({commit})=>{
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