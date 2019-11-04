<template>
    <div class="home-products">
        <!-- <div v-for="(product, i) in similarProducts" :key="i"> -->
            <div class="home-products-title">
                <h2>{{similarProducts.name}}</h2>
                <div class="prevNextBtn">
                    <button>|</button>
                </div>
            </div>
            <div class="prod-hr"></div>
            <carousel :perPage="1" :perPageCustom="[[0,1], [480, 2], [768, 3], [1200,4]]" :navigationPrevLabel="'&lt;'" :navigationNextLabel="'&gt;'" :touchDrag="false" :paginationSize="0" :mouse-drag="true" :loop="true" :navigationEnabled="true">
                <slide  v-for="(item, index) in similarProducts.products" :key="index">
                    <main-product :page="'0'" :item="item">
                        <div @click="modalBox=true, product_id = item.id" class="home-products-once">
                            Купить в один клик
                        </div>
                    </main-product>    
                </slide>
            </carousel>
            <once-click-buy :id="product_id" v-if="modalBox" @closedModal="modalBox=false"></once-click-buy>
        <!-- </div> -->
    </div>
</template>

<script>
    import MainProduct from './mainProduct'
    import { Carousel, Slide } from 'vue-carousel'
    import {mapGetters} from 'vuex'
    import OnceClickBuy from './OnceClickBuy'
    export default {
        props: {
            cat_id: {
                type: Number,
                default: 0
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
                product_id: null
                // textColor: '#A91414'
            }
        },
        computed: {
            similarProducts(){
                let products = this.$store.getters.CATS[this.cat_id];
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