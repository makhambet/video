<template>
    <div class="carousel-area">
        <div class="home-products-block">
            <router-link 
                class="carousel-img"
                tag="div"
                :to="{name: 'product', params: {id: item.id.toString()}}"
            >
                <img v-if="item.images[0] !== undefined" :src="url + item.images[0]" alt="">
                <img v-if="item.images[0] === undefined" src="@/assets/images/default.jpg" alt="">
            </router-link>
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
                <!-- <div @click="$emit('modalbox')" class="home-products-once">
                    Купить в один клик
                </div>                -->
                <slot></slot>
            </div>
        </div>
        <modal-box v-if="box" :boxText="boxTitle" :typeInfo="typeInfo"></modal-box>
    </div>
</template>

<script>
    import ModalBox from '../ModalBox'
    export default {
        props: {
            item: {
                type: Object,
                required: true
            },
            page: {
                type: String
            }
        },
        data() {
            return {
                box: false,
                boxTitle: 'sasadfsdf',
                typeInfo: 'success',
                url: 'http://194.4.58.57/'
            }
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
                    setTimeout(() => {
                        this.$store.dispatch('GET_EXCEPTION', 'favorite_list')
                    }, 200);
                    setTimeout(() => {
                        this.$store.dispatch('GET', [
                            { },
                            {
                                name: 'cats'
                            }
                        ]);
                    }, 200);
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
                    this.recurse('Вы добавили товар в корзину!', 'success')
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
                setTimeout(() => {
                    this.box = false;
                }, 1100);
            }
        },
        components: {
            ModalBox,
        },
    }
</script>

<style scoped>

</style>