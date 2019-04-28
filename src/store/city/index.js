const state = {
    nm : localStorage.getItem('nm') || '北京',
    id : localStorage.getItem('id') ||1
}

const actions = {

}


const mutations = {
    CITY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
}



export default{
    namespaced:true,
    state,
    actions,
    mutations
}