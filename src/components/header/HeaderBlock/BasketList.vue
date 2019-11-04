<template>
    <div class="header-basket-list">
        <i class="fas fa-caret-up"></i>
        <div class="basket-list-content">
            <div style="overflow-y: scroll; max-height: 200px;" v-if="COUNT !== 0">
                <div v-for="(item, index) in BASKET_LIST" :key="index" class="basket-list-block">
                    <div class="basket-list-flex">
                        <div>
                            <p class="bold">{{item.product.name}}</p>
                            <p class="basket-price">{{item.product.price * item.count}} тенге</p>
                        </div>
                        <div>
                            <div @click="deleteBasket(item.basket_id)" class="exit">x</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="COUNT === 0" class="basket-count-null">
                <p>У вас еще нет покупок!</p>
            </div>
            <div class="basket-list-flex">
                <div>
                    <p>Доставка</p>
                    <p>Итого</p>
                </div>
                <div>
                    <p>Бесплатно</p>
                    <p>{{totalPrice()}} тенге</p>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'BASKET_LIST',
                'COUNT'
            ])
        },
        methods: {
            totalPrice() {
                let total = 0
                if(this.BASKET_LIST){
                    let l = this.BASKET_LIST.length;
                    for (let index = 0; index < l; index++) {
                        total += this.BASKET_LIST[index].product.price;
                    }
                }
                return total;
            },
            deleteBasket(id){
                this.$store.dispatch('POST', [
                    {
                        basket_id: id
                    },
                    { name: 'basket_delete' }
                ])
                setTimeout(() => {
                    this.$store.dispatch('GET_EXCEPTION', 'basket_list')
                }, 200);
            }
        },
        created () {
            this.$store.dispatch('GET_EXCEPTION', 'basket_list');
        },
    }
</script>

<style lang="scss" scoped>

</style>