import axios from 'axios'

export default {
    state: {
        products: [],
        cats: [],
        sub_cats: [],
        basket_list: [],
        favorite_list: [],
        count: 0,
        favorite_count: 0,
        search: '',
        pricemin: '',
        pricemax: '',
        product_count: 0,
        product_show: [],
        news: [],
        info: [],
        contact: []
    },
    getters: {
        PRODUCTS: (state) => state.products,
        CATS: (state) => state.cats,
        SUB_CATS: (state) => state.sub_cats,
        BASKET_LIST: (state) => state.basket_list,
        FAVORITE_LIST: (state) => state.favorite_list,
        COUNT: (state) => state.count,
        SEARCH: (state) => state.search,
        PRICEMIN: (state) => state.pricemin,
        PRICEMAX: (state) => state.pricemax,
        FAVORITE_COUNT: (state) => state.favorite_count,
        PRODUCT_COUNT: (state) => state.product_count,
        PRODUCT_SHOW: (state) => state.product_show,
        NEWS: (state) => state.news,
        INFO: (state) => state.info,
        CONTACT: (state) => state.contact,
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
        },
        SET_PRODUCT_COUNT(state, payload){
            state.product_count = payload;
        },
        SET_SUB_CATS(state, payload){
            state.sub_cats = payload;
        },
        SET_PRODUCT_SHOW(state, payload){
            state.product_show = payload;
        },
        SET_NEWS(state, payload){
            state.news = payload;
        },
        SET_INFO(state, payload){
            state.info = payload;
        },
        SET_CONTACT(state, payload){
            state.contact = payload;
        }
    },
    actions: {
        GET: async(context, payload) => {
            let urlName, setName, 
                name = payload[1].name,
                request = payload[0];
            switch (name) {
                case 'cats':
                    urlName =  '/api/cats';
                    setName =  'SET_CATS';
                    break;
                case 'products':
                    urlName =  '/api/products';
                    setName =  'SET_PRODUCTS';
                    break;
                case 'product_show':
                    urlName = '/api/product';
                    setName = 'SET_PRODUCT_SHOW';
                    break;
                case 'news':
                    urlName = '/api/news';
                    setName = 'SET_NEWS';
                    break;
                case 'info':
                    urlName = '/api/info/payment';
                    setName = 'SET_INFO';
                    break;
                case 'contact':
                    urlName = '/api/info/offices';
                    setName = 'SET_CONTACT';
                    break;
            }
            await axios.get(urlName, {
                params: request,
                headers: {
                    'token': !localStorage.token || localStorage.token === null || localStorage.token === 'null' ? 'my_token' : localStorage.token
                }
            })
            .then(response => {
                // console.log(name, response)
                if(name === 'products'){
                    context.commit('SET_PRODUCT_COUNT', response.data.result.count_date)
                    context.commit(setName, response.data.result.data)
                }
                if(name === 'cats' || name === 'product_show' || name === 'news')
                    context.commit(setName, response.data.result)
                if(name === 'info' || name === 'contact')
                    context.commit(setName, response.data)
            })
            .catch(error => {
                if(name === 'products' && error.response.status === 404){
                    context.commit(setName, 404)
                }
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
                    // console.log(response)
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
        GET_SEARCH: async(context, payload) =>{
            let data;
            await axios.get('/api/search', {
                params: payload,
                headers: {
                    'token': localStorage.token
                }
            })
            .then(response => {
                // console.log(response),
                context.commit('SET_SEARCH', response.data.result.data)
                context.commit('SET_PRODUCT_COUNT', response.data.result.count_date)
            })
            .catch(error => {
                console.log(error.response)
                if(error.response.status === 400){
                    data = 400;
                }
                else if(error.response.status === 404){
                    data = 404;
                }
                context.commit('SET_SEARCH', data)
            })
        },
        GET_PRICE: async(context, payload) => {
            let setName;
            await axios.get('/api/prices', {
                headers: {
                    'token': 'my_token'
                }
            })
            .then(response => {
                context.commit('SET_PRICEMAX', response.data.result.max)
                context.commit('SET_PRICEMIN', response.data.result.min)
                
            })
            .catch(error => {
                console.log(error.response)
            })
            // context.commit(setName, price)
        },
        GET_SHOW: async(context, payload) => {
            let data, setName, urlName,
                name = payload[1].name,
                id = payload[0].id;
            switch (name) {
                case 'cats':
                    urlName = '/api/subCats/' + id;
                    setName = 'SET_SUB_CATS';
                    break;            
                default:
                    break;
            }
            await axios.get(urlName, {
                headers: {
                    token: !localStorage.token || localStorage.token === null || localStorage.token === 'null' ? 'my_token' : localStorage.token
                }
            })
            .then(response => (
                // console.log(response),
                data = response.data.result
            ))
            .catch(e => 
                console.log(e.response)  
            )
            context.commit(setName, data)
        }
    }
};