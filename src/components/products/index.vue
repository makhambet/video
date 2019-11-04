<template>
    <div class="home-products">
        <div class="home-products-title">
            <h2>{{productsName}}</h2>
            <div class="prevNextBtn">
                <button>|</button>
            </div>
        </div>
        <div class="prod-hr"></div>
        <carousel :perPage="1" :perPageCustom="[[0,1], [480, 2], [768, 3], [1200,4]]" :navigationPrevLabel="'&lt;'" :navigationNextLabel="'&gt;'" :touchDrag="false" :paginationSize="0" :mouse-drag="true" :loop="true" :navigationEnabled="true">
            <slide  v-for="(item, index) in similarProducts" :key="index">
                <main-product :item="item">
                    <div @click="modalBox=true" class="home-products-once">
                        Купить в один клик
                    </div>
                </main-product>    
            </slide>
        </carousel>
        <once-click-buy v-if="modalBox" @closedModal="modalBox=false"></once-click-buy>
    </div>
</template>

<script>
    import MainProduct from './mainProduct'
    import { Carousel, Slide } from 'vue-carousel'
    import {mapGetters} from 'vuex'
    import OnceClickBuy from './OnceClickBuy'
    export default {
        props: {
            productsName: {
                type: String,
                required: true,
                default: 'Самые продаваемые',
            },
            onceClick:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
                modalBox: false,
                // textColor: '#A91414'
            }
        },
        computed: {
            similarProducts(){
                let products = this.$store.getters.PRODUCTS
                return products
            }
        },
        
        components: {
            Carousel,
            Slide,
            OnceClickBuy,
            MainProduct
        },
    }
</script>

<style scoped>

</style>