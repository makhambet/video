import axios from 'axios'
import { async } from 'q';

export default {
    state: {
        products: [],
        cats: [],
        basket_list: [],
        favorite_list: [],
        count: 0,
        favorite_count: 0,
        search: '',
        pricemin: 0,
        pricemax: 200000
    },
    getters: {
        PRODUCTS: (state) => state.products,
        CATS: (state) => state.cats,
        BASKET_LIST: (state) => state.basket_list,
        FAVORITE_LIST: (state) => state.favorite_list,
        COUNT: (state) => state.count,
        SEARCH: (state) => state.search,
        PRICEMIN: (state) => state.pricemin,
        PRICEMAX: (state) => state.pricemax,
        FAVORITE_COUNT: (state) => state.favorite_count
    },
    mutations: {
        SET_PRODUCTS(state, payload){
            state.products = payload;
        },
        SET_CATS(state, payload){
            state.cats = payload;
        },
        SET_BASKET_LIST(state, payload){
            state.basket_list = payload;
        },
        SET_FAVORITE_LIST(state, payload){
            state.favorite_list = payload;
        },
        SET_COUNT(state, payload){
            state.count = payload;
        },
        SET_SEARCH(state, payload){
            state.search = payload;
        },
        SET_PRICEMIN(state, payload){
            state.pricemin = payload;
        },
        SET_PRICEMAX(state, payload){
            state.pricemax = payload;
        },
        SET_FAVORITE_COUNT(state, payload){
            state.favorite_count = payload;
        }
    },
    actions: {
        GET: async(context, payload) => {
            let urlName, setName;
            switch (payload) {
                case 'cats':
                    urlName = '/api/cats';
                    setName = 'SET_CATS';
                    break;
                case 'products':
                    urlName =  '/api/products';
                    setName =  'SET_PRODUCTS';
                    break;
            }
            await axios.get(urlName, {
                headers: {
                    'token': localStorage.token || 'my_token'
                }
            })
            .then(response => {
                if(payload === 'products'){
                    console.log(response.data.result.data)
                    context.commit(setName, response.data.result.data)
                }
                if(payload === 'cats')
                    context.commit(setName, response.data.result)
            })
            .catch(error => {
                console.log(error.response)
            })
        },
        GET_EXCEPTION: async(context, payload) => {
            if(localStorage.token || localStorage.token !== 'null' || localStorage.token !== ''){
                let urlName, setName, data, counter, fav_counter;
                switch (payload) {
                    case 'basket_list':
                        urlName = '/api/basket/list';
                        setName = 'SET_BASKET_LIST';
                        break;
                    case 'favorite_list':
                        urlName = '/api/favorite/list';
                        setName = 'SET_FAVORITE_LIST';
                        break;
                }
                await axios.get(urlName, {
                    headers: {
                        'token': localStorage.token
                    }
                })
                .then(response => {
                    console.log(response)
                    data = response.data.result
                    if(payload === 'basket_list'){
                        counter = data.length;
                    }
                    if(payload === 'favorite_list'){
                        fav_counter = data.length;
                    }
                })
                .catch(error => {
                    console.log(error.response)
                    if(payload === 'basket_list'){
                        counter = 0
                    }
                    if(payload === 'favorite_list'){
                        fav_counter = 0
                    }
                })
                context.commit(setName, data)
                if(payload === 'basket_list'){
                    context.commit('SET_COUNT', counter)
                }
                if(payload === 'favorite_list'){
                    context.commit('SET_FAVORITE_COUNT', fav_counter)
                }
                
            }
        },
        GET_SEARCH(context, payload){
            if(!payload) payload = ''
            context.commit('SET_SEARCH', payload)
        },
        GET_PRICE(context, payload){
            let price = payload[0].price;
            let name = payload[1].name;
            let setName;
            switch (name) {
                case 'pricemin':
                    setName = 'SET_PRICEMIN'
                    break;
                case 'pricemax':
                    setName = 'SET_PRICEMAX'
                    break;
            }
            context.commit(setName, price)
        }
    }
};