<template>
    <div class="home-products">
        <div class="home-products-title">
            <h2>Похожие товары</h2>
            <div class="prevNextBtn">
                <button>|</button>
            </div>
        </div>
        <div class="prod-hr"></div>
        <carousel :perPage="1" :perPageCustom="[[0,1], [360, 2], [480, 3], [768, 4], [1200,5]]" :navigationPrevLabel="'&lt;'" :navigationNextLabel="'&gt;'" :touchDrag="false" :paginationSize="0" :mouse-drag="true" :loop="true" :navigationEnabled="true">
            <slide  v-for="(item, index) in BUYS_WITH" :key="index">
                <div class="carousel-area">
                    <div class="home-products-block">
                        <div
                            class="carousel-img"
                        >
                            <img v-if="item.images[0] !== undefined" @click="openProduct(item.id)" :src="url + item.images[0]" alt="">
                            <img v-if="item.images[0] === undefined"  @click="openProduct(item.id)" src="@/assets/images/default.jpg" alt="">
                        </div>
                        <div class="products-favorite" @click="favoriteClick(item.id, item.in_favorite)">
                            <i class="fa-heart" :class="item.in_favorite===true ? 'fas' : 'far'"></i>
                        </div>
                        <div :style="{backgroundColor: textColor(item.product_status)}" class="products-status">
                            {{item.product_status}}
                        </div>
                        <div class="home-products-description">
                            <p>{{item.name}}</p>
                            <small v-html="item.description.slice(0, 100)"></small>
                            <div class="price">
                                <small>Цена</small>
                                <p>{{item.price}} тенге</p>
                            </div>
                            <button @click="addProduct(item.id)">Купить</button>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
        <modal-box v-if="box" :boxText="boxTitle" :typeInfo="typeInfo"></modal-box>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'
    import {mapGetters} from 'vuex'
    import ModalBox from './ModalBox'
    export default {
        props: {
            id: {
                type: String,
                default: 1
            },
        },
        data() {
            return {
                box: false,
                boxTitle: '',
                typeInfo: '',
                url: 'http://194.4.58.57/'
            }
        },
        computed: {
            ...mapGetters([
                'BUYS_WITH'
            ])
        },
        methods: {
            favoriteClick(id, bool){
                if(localStorage.login === true || localStorage.login === 'true'){
                    this.$store.dispatch('POST', [
                        {
                            product_id: id
                        },
                        {
                            name: 'favorite'
                        }
                    ])
                    this.$store.dispatch('GET_EXCEPTION', 'favorite_list')
                    if(bool) this.recurse('Вы убрали товар из ИЗБРАННЫХ!', 'warn');
                    else if(!bool) this.recurse('Вы добавили товар в ИЗБРАННЫХ!', 'success');
                }
                else{
                    this.recurse('Вы не авторизованы', 'warn');
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
                    this.recurse('Вы добавили товар в корзину!', 'success');
                    setTimeout(() => {
                        this.$store.dispatch('GET_EXCEPTION', 'basket_list')
                    }, 200);
                }
                else{
                    this.recurse('Вы не авторизованы', 'warn');
                }
            },
            textColor(status){
                if(status === 'В наличии') return '#32A914'
                else if(status === 'Мало') return '#FF4858'
                else if(status === 'Средне') return '#FFAB48'
                return '#A91414'
            },
            recurse(title, type){
                this.boxTitle = title;
                this.typeInfo = type;
                this.box = true;
                this.$store.dispatch('POST_EX1', [
                    {
                        id: this.id
                    },
                    {
                        name: 'buys_with'
                    }
                ])
                setTimeout(() => {
                    this.box = false;
                }, 1100);
            },
            openProduct(id){
                this.$store.dispatch('GET', [
                    {
                        id: id
                    },
                    {
                        name: 'product_show'
                    }
                ])
                setTimeout(() => {
                    this.$store.dispatch('POST_EX1', [
                        {
                            id: id
                        },
                        {
                            name: 'buys_with'
                        }
                    ])
                }, 200);
                setTimeout(() => {
                    this.$router.push({name: 'product', params: {id: id.toString()}})
                }, 100);
                this.$emit('counter');
            }
        },
        components: {
            Carousel,
            Slide,
            ModalBox
        },
    }
</script>

<style scoped>

</style>