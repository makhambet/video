<template>
    <div class="cart">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Корзина</span></p>
            </div>
            <h2 class="h30">Корзина</h2>
            <hr>
            <div v-if="COUNT !== 0" class="cart-content">
                <div class="cart-content-head">
                    <div><p>Товар</p></div>
                    <div><p>Цена</p></div>
                    <div><p>Количество</p></div>
                    <div><p>Итого</p></div>
                </div>
                <div v-for="(item, index) in BASKET_LIST" :key="index" class="cart-content-body">
                    <div>
                        <div @click="deleteBasket(item.basket_id)" class="exit">x</div>
                        <div class="cart-body-img"><img src="@/assets/images/c.png" alt=""></div>
                        <div>
                            <p class="cart-title">{{item.product.name}}</p>
                            <form>
                                <label><input type="checkbox"> Заказать с установкой</label>
                            </form>
                        </div>
                    </div>
                    <div><p>{{item.product.price}} тенге</p></div>
                   <div class="cart-content-count">
                        <button @click="deleteCountBasket(item.product.id, '1')" :disabled="item.count<=1">-</button>
                        {{item.count}}
                        <button @click="addBasket(item.product.id, '1')" :disabled="item.count>=10">+</button>
                    </div>
                    <div><p>{{item.product.price * item.count}} тенге</p></div>
                </div>
                <div class="cart-price">
                    <p>ИТОГО: {{totalPrice()}} тенге</p>
                    <button>Оформить заказ</button>
                </div>
            </div>
            <div v-if="COUNT === 0">
                <h2 class="h30">У вас нет покупок</h2>
            </div>
            
                <p>{{COUNT}}</p>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'BASKET_LIST',
                'COUNT'
            ])
        },
        methods: {
            delay(){
                setTimeout(() => {
                    this.$store.dispatch('GET_EXCEPTION', 'basket_list')
                }, 200);
            },
            addBasket(id, count){
                this.$store.dispatch('POST', [
                    {
                        product_id: id,
                        count: count    
                    },
                    { name: 'basket_add' }
                ])
                this.delay();
            },
            deleteCountBasket(id, count){
                this.$store.dispatch('POST', [
                    {
                        product_id: id,
                        count: count    
                    },
                    { name: 'basket_count_delete' }
                ])
                this.delay();
            },
            deleteBasket(id){
                this.$store.dispatch('POST', [
                    {
                        basket_id: id, 
                    },
                    { name: 'basket_delete' }
                ])
                this.delay();
            },
            totalPrice(){
                let price = 0;
                for (let index = 0; index < this.BASKET_LIST.length; index++) {
                    price += this.BASKET_LIST[index].product.price * this.BASKET_LIST[index].count;
                }
                return price
            }
        },
        components: {
            MiniBanner,
        },
        mounted () {
            this.$store.dispatch('GET_EXCEPTION', 'basket_list')
        },
    }
</script>

<style lang="scss" scoped>

</style>