<template>
    <div class="product" v-if="product">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Камера наблюдения - HIKVISON </span> <a>Купить в один клик</a></p>
            </div>
            <div class="product-content">
                <div class="product-content-block1">
                    <div v-for="(item, index) in product.images" :key="index">
                        <img @click="openImg(index)" :src="item" alt="">
                    </div>
                </div>
                <div class="product-content-block2">
                    <div :style="{backgroundColor: textColor(product.product_status)}" class="products-status">
                        {{product.product_status}}
                    </div>
                    <img :src="image || product.images[0]" alt="">
                </div>
                <div class="product-content-block3">
                    <h2>{{product.name}}</h2>
                    <hr>
                    <div class="product-content-block3-flex">
                        <div class="product-block3-count">
                            <button @click="count--" :disabled="count<=1">-</button>
                            {{count}}
                            <button @click="count++" :disabled="count>=10">+</button>
                        </div>
                        <div class="product-block3-price">
                            <small>Цена</small>
                            <p>{{product.price * count}} тенге</p>
                        </div>
                        <div class="product-favorite"  @click="favoriteClick(product.id)">
                            <i class="fa-heart" :class="product.in_favorite===true ? 'fas' : 'far'"></i>
                        </div>
                        <button @click="addProduct(product.id, count)">Купить</button>
                    </div>
                    <hr>
                    <div class="product-about">
                        <p @click="desc = false" :class="{about: !desc}">Описание</p>
                        <p @click="desc = true" :class="{about: desc}">Характеристика</p>
                    </div>
                    <hr>
                    <div class="product-about">
                        <div v-if="!desc">
                            <p v-html="product.description"></p>
                        </div>
                        <div v-if="desc">
                            <p v-html="product.characteristic"></p>
                        </div>
                    </div>
                </div>
            </div>
            <app-similar :productsName="'Похожие товары'" :cat_id="product.cat_id"></app-similar>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import AppSimilar from '@/components/products/index'
    import MiniBanner from '@/components/banner/MiniBanner'
    import {mapGetters} from 'vuex'
    export default {
        props: {
            'id': {
                type: Number,
                required: true,
                default: 1
            },
        },
        data() {
            return {
                favoriteActive: false,
                favorite: '',
                count: 1,
                image: '',
                desc: false
            }
        },
        computed: {
            product() {
                return this.$store.getters.PRODUCTS.find(b=>b.id ==this.id)
            },
            ...mapGetters([
                'FAVORITE_LIST'
            ])
        },
        methods: {
            favoriteClick(id){
                if(localStorage.token !== null){
                    this.$store.dispatch('POST', [
                        {
                            product_id: id
                        },
                        {
                            name: 'favorite'
                        }
                    ])
                    setTimeout(() => {
                        this.$store.dispatch('GET', 'products')
                    }, 100);
                }
            },
            addProduct(id, count){
                this.$store.dispatch('POST', [
                    {
                        product_id: id,
                        count: count    
                    },
                    { name: 'basket_add' }
                ])
            },
            openImg(id){
                this.image = this.product.images[id]
            },
            textColor(status){
                if(status === 'В наличии') return '#32A914'
                else if(status === 'Мало') return '#FF4858'
                else if(status === 'Средне') return '#FFAB48'
                return '#A91414'
            },
        },
        components: {
            AppSimilar,
            MiniBanner
        },
    }
</script>

<style scoped>

</style>