import axios from 'axios'

export default {
    state: {
        buys_with: [],
        user_auth: [],
        basket_buy: []
    },
    getters: {
        BUYS_WITH: (state) => state.buys_with,
        USER_AUTH: (state) => state.user_auth,
        BASKET_BUY: (state) => state.basket_buy
    },
    mutations: {
        SET_BUYS_WITH(state, payload){
            state.buys_with = payload;
        },
        SET_USER_AUTH(state, payload){
            state.user_auth = payload;
        },
        SET_BASKET_BUY(state, payload){
            state.basket_buy = payload;
        }
    },
    actions: {
        POST: async(context, payload) => {
            if(localStorage.token !== null || localStorage.token !== 'null' || localStorage.token){
                let urlName;
                let name = payload[1].name;
                let request = payload[0];
                switch (name) {
                    case 'user_auth':
                        urlName =  '/api/user/auth';
                        break;
                    case 'add_address':
                        urlName = '/api/user/address/add';
                        break;
                    case 'delete_address':
                        urlName = '/api/user/address/delete';
                        break;
                    case 'basket_add':
                        urlName = '/api/basket/add';
                        break;
                    case 'basket_count_delete':
                        urlName = '/api/basket/count_delete';
                        break;
                    case 'basket_delete':
                        urlName = '/api/basket/delete';
                        break;
                    case 'favorite':
                        urlName = '/api/favorite';
                        break;
                    case 'user_edit':
                        urlName = '/api/user/edit';
                        break;
                    case 'basket_buy':
                        urlName = '/api/basket/buy';
                        break;
                    case 'once_click':
                        urlName = '/api/basket/onebuy';
                        break;
                }
                axios.post(urlName, request, {
                    headers: {
                        'token': localStorage.token,
                        // 'Content-Type': 'text/plain',
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    console.log(name, response.data.result)
                    if(name === 'user_auth'){
                        context.commit('SET_USER_AUTH', response.data.result)
                    }
                    if(name === 'basket_buy') context.commit('SET_BASKET_BUY', 200)
                })
                .catch(error => {
                    console.log(error.response.data.message)
                    if(name === 'basket_buy') { console.log('sdfnsdf'); context.commit('SET_BASKET_BUY', error.response.data.message)}
                })
            }
            
        },
        POST_EX1: async(context, payload) => {
            let urlName;
            let name = payload[1].name;
            let request = payload[0].id;
            switch (name) {
                case 'buys_with':
                    urlName =  '/api/buysWith/' + request;
                    break;
            }
            axios.post(urlName, request,{
                headers: {
                    'token': localStorage.token
                }
            })
            .then(response => {
                console.log(response)
                context.commit('SET_BUYS_WITH', response.data.result)
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
};