import axios from 'axios'

export default {
    state: {
        user_auth: [],
        new: [],
        name: ''
    },
    getters: {
        USER_AUTH: (state) => state.user_auth,
        NEW: (state) => state.new,
        NAME: (state) => state.name
    },
    mutations: {
        SET_USER_AUTH(state, payload){
            state.user_auth = payload;
        },
        SET_NEW(state, payload){
            state.new = payload;
        },
        SET_NAME(state, payload){
            state.name = payload;
        }
    },
    actions: {
        POST: async(context, payload) => {
            if(localStorage.token !== null || localStorage.token !== 'null' || localStorage.token){
                let urlName, setName, data;
                let name = payload[1].name;
                let request = payload[0];
                switch (name) {
                    case 'user_auth':
                        urlName =  '/api/user/auth';
                        setName =  'SET_USER_AUTH';
                        break;
                    case 'add_address':
                        urlName = '/api/user/address/add';
                        setName = 'SET_NEW';
                        break;
                    case 'delete_address':
                        urlName = '/api/user/address/delete';
                        setName = 'SET_NEW';
                        break;
                    case 'basket_add':
                        urlName = '/api/basket/add';
                        setName = 'SET_NEW';
                        break;
                    case 'basket_count_delete':
                        urlName = '/api/basket/count_delete';
                        setName = 'SET_NEW';
                        break;
                    case 'basket_delete':
                        urlName = '/api/basket/delete';
                        setName = 'SET_NEW';
                        break;
                    case 'favorite':
                        urlName = '/api/favorite';
                        setName = 'SET_NEW';
                        break;
                    case 'user_edit':
                        urlName = '/api/user/edit';
                        setName = 'SET_NEW';
                        break;
                }
                axios.post(urlName, request, {
                    headers: {
                        'token': localStorage.token
                    }
                })
                .then(response => {
                    console.log(response)
                    data = response.data.result
                    context.commit(setName, response.data.result)
                    
                    console.log(response.data.result)
                    if(response.status === 200){
                        if(name === 'basket_add' || name === 'basket_delete'){
                            console.log('сейчас')
                        }
                        if(name === 'user_auth'){
                            context.commit('SET_NAME', response.data.result.name)
                        }
                    }
                })
                .catch(error => {
                    console.log(error.response)
                })
            }
            
        }
    }
};