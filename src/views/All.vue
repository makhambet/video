<template>
    <div class="all">
        <div class="wrapper">
            <div class="all-content">
                <div :class="{'all-block1-active': filter}" class="all-block1">
                    <div class="now-page">
                        <p>Главная > <span>Поиск</span></p>
                    </div>
                    <all-menu @close="filter = false"></all-menu>
                </div>
                <div class="all-block2">
                    <button @click="filter = true" class="filteredProduct">Подобрать по параметрам</button>
                    <h2 class="h30">Товары</h2>
                    <hr>
                    <div v-if="found" class="all-block2-grid">
                        <div class="home-products-block" v-for="item in filterProducts" :key="item.id">
                            <div
                                class="carousel-img"
                            >
                                <img v-if="item.images[0] !== undefined" @click="open(item.id)" :src="item.images[0]" alt="">
                                <img v-if="item.images[0] === undefined" @click="open(item.id)" src="@/assets/images/default.jpg" alt="">
                            </div>
                            <div class="products-favorite" @click="favoriteClick(item.id, item.in_favorite)">
                                <i class="fa-heart" :class="item.in_favorite===true ? 'fas' : 'far'"></i>
                            </div>
                            <div class="home-products-description">
                                <p>{{item.name}}</p>
                                <small v-html="item.description.slice(0, 100)"></small>
                                <div class="price">
                                    <small>Цена</small>
                                    <p>{{item.price}} тенге</p>
                                </div>
                                <button @click="addProduct(item.id)">Купить</button>
                            </div>
                        </div>
                        
                    </div>
                    <div v-if="found" class="all-pagination">
                        <div class="left">
                            <button :disabled="pageNumber === 0" @click.prevent="prevPage()">&lt;</button>
                        </div>
                        <div class="middle">
                            <button v-if="pageNumber!==0" @click="pageNumber=0">1</button>
                            <span v-if="pageNumber>=2">...</span>
                            <button class="current">{{pageNumber+1}}</button>
                            <span v-if="pageNumber<currentPage-2">...</span>
                            <button v-if="pageNumber<currentPage-1" @click="pageNumber=currentPage-1">{{currentPage}}</button>
                        </div>
                        <div class="right">
                            <button @click.prevent="nextPage()" :disabled="pageNumber >= pageCount -1" >&gt;</button>
                        </div>
                    </div>
                    <p v-if="found" style="float:right;">Всего {{length}} товаров</p>
                    <div v-if="!found"><h2>Ничего не найдено</h2></div>
                </div>
            </div>
        </div>
        <modal-box v-if="box" :boxText="boxTitle" :typeInfo="typeInfo"></modal-box>
        <mini-banner></mini-banner>
        {{catchProducts()}}
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import AllMenu from '@/components/all-menu/index'
    import ModalBox from '@/components/ModalBox'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
                box: false,
                boxTitle: '',
                typeInfo: '',
                found: true,
                pageNumber: 0,
                pageCount: 0,
                currentPage: 0,
                size: 10,
                length: 0,
                filter: false
            }
        },
        methods: {
            favoriteClick(id, favorite){
                if(localStorage.login === true || localStorage.login === 'true'){
                    this.$store.dispatch('POST', [
                        {
                            product_id: id
                        },
                        {
                            name: 'favorite'
                        }
                    ])
                    let isFavText, isFavStatus;
                    if(favorite){
                        isFavText = 'Вы убрали товар из ИЗБРАННЫХ!';
                        isFavStatus = 'warn';
                    }
                    if(!favorite){
                        isFavText = 'Вы добавили товар из ИЗБРАННЫХ!';
                        isFavStatus = 'success';
                    }
                    // setInterval(() => {
                        
                        this.again();
                    // }, 100);
                    this.request(isFavText, isFavStatus, true)
                }
                else{
                    this.request('Вы не авторизованы', 'warn', false);
                }
            },
            addProduct(id, count){
                if(localStorage.login === true || localStorage.login === 'true'){
                    this.$store.dispatch('POST', [
                        {
                            product_id: id,
                            count: '1'  
                        },
                        { name: 'basket_add' }
                    ])
                    this.request('Вы добавили товар в корзину!', 'success', true)
                    setTimeout(() => {
                        this.$store.dispatch('GET_EXCEPTION', 'basket_list')
                    }, 200);
                }
                else{
                    this.request('Вы не авторизованы', 'warn', false);
                }
            },
            request(title, type, login){
                this.boxTitle = title;
                this.typeInfo = type;
                this.box = true;
                setTimeout(() => {
                    this.box = false;
                }, 1100);
            },
            prevPage(){
                this.pageNumber --;
            },
            nextPage(){
                this.pageNumber ++;
            },
            again(){
                this.$store.dispatch('GET', [
                    {
                        page: this.pageNumber + 1 
                    },
                    {
                        name: 'products'
                    }
                ])
            },
            open(id){
                this.$router.push({name: 'product', params: {id: id.toString()}})
            },
            catchProducts(){
                if(this.found === false)
                    this.filterProducts
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'SEARCH',
                'PRICEMIN',
                'PRICEMAX',
                'PRODUCT_COUNT'
            ]),
            filterProducts(){
                let products = this.PRODUCTS;
                let pricemin = this.PRICEMIN
                let pricemax = this.PRICEMAX
                let src = this.SEARCH
                console.log(products)
                if(products === 404){
                    this.found = false
                }
                else if(products !== 404){
                    this.found = true
                }
                if(src === 400){
                    products = this.PRODUCTS
                    this.found = true
                    this.again();
                }
                else if(src === 404){
                    this.found = false
                }
                else if(src){
                    products = this.SEARCH
                    this.found = true
                }
                this.length = this.PRODUCT_COUNT
                this.pageCount = Math.ceil(this.length/this.size)
                this.currentPage = Math.ceil(this.length/this.size)
                return products
            }
        },
        components: {
            AllMenu,
            MiniBanner,
            ModalBox
        },
        beforeMount () {
            this.pageNumber = parseInt(this.$route.query.page) || 0;
            this.$store.dispatch('GET', [
                { 
                    page: this.pageNumber
                 },
                {
                    name: 'cats'
                }
            ]);
        },
        mounted () {
            this.filterProducts;
        },
        watch: {
            pageNumber(newValue) {
                this.$router.push({path: 'all-products', query: {page: this.pageNumber || 0}})
                this.again()
            }
        },
    }
</script>

<style scoped>
    .all-pagination{
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }
    .all-pagination button, .all-pagination .current{
        padding: 0 20px;
        max-width: 160px;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #BFBFBF;
        text-decoration: none;
        margin: 0 6px;
        transition: all .2s ease-in-out;
    }
    .all-pagination button, .all-pagination span {
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 300;
        line-height: 42px;
        height: 44px;
        color: #BFBFBF;
        font-size: 18px;
    }
    .all-pagination button:hover {
        border-color: #78669E;
        color: #78669E;
    }
    .all-pagination .current {
        border-color: #78669E;
        color: #78669E;
    }
    .all-pagination .left button, .all-pagination .right button{
        border: none;
    }
</style>