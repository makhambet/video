<template>
    <div class="head-3">
        <div class="head-3-block1">
            <nav>
                <ul>
                    <li style="cursor: pointer" :class="{blueActive: !hoverActive}" @click="open()" class="blue">
                        <div><img src="@/assets/images/section.png" alt=""></div>
                        <p>Все&nbsp;разделы </p>
                        <i class="fas fa-angle-down"></i>
                        <menu-list @close="activated()"></menu-list>
                    </li>
                    <router-link tag="li" to="/delivery">Установка&nbsp;безопасности</router-link>
                    <router-link tag="li" to="/delivery">Доставка&nbsp;и&nbsp;оплата</router-link>
                    <router-link tag="li" to="/all-products">Товары</router-link>
                    <router-link tag="li" to="/about">О&nbsp;нас</router-link>
                    <router-link tag="li" to="/contacts">Контакты</router-link>
                </ul>
            </nav>
        </div>
        <div class="head-3-b">
            <nav>
                <ul>
                    <li @click="$router.push({path: '/favorite'})">Избранное</li>
                    <li style="position: relative;" @click="basketActive = !basketActive, condition = true">Корзина <span v-if="COUNT!==0" class="dot"></span></li>
                </ul>
            </nav>
        </div>
        <basket-list v-if="basketActive">
            <button :disabled="COUNT===0" @click="closing()">Корзина</button>
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
                condition: false,
                hoverActive: false
            }
        },
        methods: {
            conditions() {
                this.basketActive = false
                this.menuActive = false
                this.condition = false
                this.hoverActive = true;
                
            },
            closing(){
                this.conditions();
                this.$router.push({path: '/cart'})
            },
            open(){
                this.menuActive = !this.menuActive; 
                // this.condition = true
            },
            activated() {
                this.hoverActive = !this.hoverActive;
                setTimeout(() => {
                    this.hoverActive = !this.hoverActive;
                }, 100);
            },
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
        height: calc(100vh + 10%);
        top: 0;
        left: 0;
        width: 140%;
        margin: -10% -20% 0;
    }
    .dot{
        position: absolute;
        background: #FF6969;
        width: 7px;
        height: 7px;
        border-radius: 50% 50%;
    }
</style>