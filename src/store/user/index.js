const state = {
    name:localStorage.getItem('name')||'',
    isAdmin:localStorage.getItem('isAdmin')||false,
    userImg:''
}

const actions = {

}


const mutations = {
    USER_NAME(state,payload){
        state.name = payload.name;
        state.isAdmin = payload.isAdmin;
        state.userImg = payload.userImg;
    }
}



export default{
    namespaced:true,
    state,
    actions,
    mutations
}