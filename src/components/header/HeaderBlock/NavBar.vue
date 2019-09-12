<template>
    <div class="head-3">
        <div class="head-3-block1">
            <nav>
                <ul>
                    <li class="blue">
                        <div><img src="@/assets/images/section.png" alt=""></div>
                        <p @click="menuActive = !menuActive, condition = true">Все&nbsp;разделы </p>
                        <i class="fas fa-angle-down"></i>
                        <menu-list v-if="menuActive"></menu-list>
                    </li>
                    <router-link tag="li" to="delivery">Установка&nbsp;безопасности</router-link>
                    <router-link tag="li" to="delivery">Доставка&nbsp;и&nbsp;оплата</router-link>
                    <router-link tag="li" to="all-products">Товары</router-link>
                    <router-link tag="li" to="about">О&nbsp;нас</router-link>
                    <router-link tag="li" to="contacts">Контакты</router-link>
                </ul>
            </nav>
        </div>
        <div class="head-3-b">
            <nav>
                <ul>
                    <router-link tag="li" to="favorite">Избранное</router-link>
                    <li @click="basketActive = !basketActive, condition = true">Корзина</li>
                </ul>
            </nav>
        </div>
        <basket-list v-if="basketActive">
            <button :disabled="COUNT===0" @click="close()">Корзина</button>
        </basket-list>
        <div v-if="condition" @click="conditions()" class="closed"></div>
    </div>
</template>

<script>
    import BasketList from './BasketList'
    import MenuList from './MenuList'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                basketActive: false,
                menuActive: false,
                condition: false
            }
        },
        methods: {
            conditions() {
                this.basketActive = false
                this.menuActive = false
                this.condition = false
                
            },
            close(){
                this.conditions();
                this.$router.push({path: 'cart'})
            }
        },
        computed: {
            ...mapGetters([
                'COUNT'
            ])
        },
        mounted () {
            this.conditions()
        },
        components: {
            BasketList,
            MenuList
        },
    }
</script>

<style scoped>
    .closed{
        /* background: red; */
        height: 100vh;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>