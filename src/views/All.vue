<template>
    <div class="all">
        <div class="wrapper">
            <div class="all-content">
                <div class="all-block1">
                    <div class="now-page">
                        <p>Главная > <span>Поиск</span></p>
                    </div>
                    <all-menu></all-menu>
                </div>
                <div class="all-block2">
                    <h2 class="h30">Результат поиска: Камер наблюдения - HIKVISION</h2>
                    <hr>
                    <div class="all-block2-grid">
                        <div class="home-products-block" v-for="item in filterProducts" :key="item.id">
                            <router-link
                                tag="div"
                                :to="{name: 'product', params: {id: item.id}}"
                                class="carousel-img"
                            >
                                <img :src="item.images[0]" alt="">
                            </router-link>
                            <div class="products-favorite" @click="favoriteClick(item.id)">
                                <i class="fa-heart" :class="item.in_favorite===true ? 'fas' : 'far'"></i>
                            </div>
                            <div class="home-products-description">
                                <p>{{item.name}}</p>
                                <small>{{item.description.slice(0, 100)}}</small>
                                <div class="price">
                                    <small>Цена</small>
                                    <p>{{item.price}} тенге</p>
                                </div>
                                <button @click="addProduct(item.id)">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import AllMenu from '@/components/all-menu/index'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
            }
        },
        methods: {
            favoriteClick(id){
                this.$store.dispatch('POST', [
                    {
                        product_id: id
                    },
                    {
                        name: 'favorite'
                    }
                ])
                this.$store.dispatch('GET', 'products')
            },
            addProduct(id, count){
                this.$store.dispatch('POST', [
                    {
                        product_id: id,
                        count: '1'  
                    },
                    { name: 'basket_add' }
                ])
            // this.$store.dispatch('GET_EXCEPTION', 'basket_list')
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'SEARCH',
                'PRICEMIN',
                'PRICEMAX'
            ]),
            filterProducts(){
                let products = this.PRODUCTS;
                let pricemin = this.PRICEMIN
                let pricemax = this.PRICEMAX
                let src = this.SEARCH
                if(src){
                    products = products.filter( b=>
                        b.name.toLowerCase().indexOf(src.toLowerCase()) >= 0
                    )
                }
                if(pricemin >= 100){
                    products = products.filter( b=>
                        b.price >= pricemin
                    )
                }
                if(pricemax <= 200000){
                    products = products.filter( b=>
                        b.price <= pricemax
                    )
                }
                return products
            }
        },
        components: {
            AllMenu,
            MiniBanner
        },
    }
</script>

<style lang="scss" scoped>

</style>