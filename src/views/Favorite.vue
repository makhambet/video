<template>
    <div class="favorite">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Избранное</span></p>
            </div>
            <h2 class="h30">Избранное</h2>
            <hr>
            <div class="favorite-content">
                <div class="home-products-block" v-for="item in FAVORITE_LIST" :key="item.id">
                    <!-- <router-link 
                        class="carousel-img"
                        :to="{name: 'product', params: {id: item.id}}"
                        tag="div"
                    >
                        <img src="@/assets/images/camera.png" alt="">
                    </router-link>
                    <div class="products-favorite" @click="favoriteClick(item.id)">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="home-products-description">
                        <p>{{item.name}}</p>
                        <small>{{item.description.slice(0, 100)}}</small>
                        <div class="price">
                            <small>Цена</small>
                            <p>{{item.price}} тенге</p>
                        </div>
                        <button @click="addProduct(item.id)">Купить</button>
                    </div> -->
                    <main-product :item="item"></main-product>
                </div>
            </div>
            <h2 class="h30" v-if="FAVORITE_COUNT === 0">У вас нет избранных товаров</h2>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import MainProduct from '@/components/products/mainProduct'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
                modalBox: false
            }
        },
        computed: {
            ...mapGetters([
                'FAVORITE_LIST',
                'FAVORITE_COUNT'
            ])
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
                setTimeout(() => {
                    this.$store.dispatch('GET_EXCEPTION', 'favorite_list')
                }, 100);
            },
            addProduct(id, count){
                this.$store.dispatch('POST', [
                    {
                        product_id: id,
                        count: '1'  
                    },
                    { name: 'basket_add' }
                ])
            }
        },
        created () {
            this.$store.dispatch('GET_EXCEPTION', 'favorite_list');
        },
        components: {
            MiniBanner,
            MainProduct
        },
    }
</script>

<style scoped>

</style>