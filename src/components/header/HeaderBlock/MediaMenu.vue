<template>
    <div class="media-menu">
        <nav>
            <ul>
                <router-link 
                    v-for="(item, index) in menu"
                    :key="index"
                    tag="li"
                    :to="item.route" >
                    <span @click="$emit('close')">
                        {{item.title}}
                    </span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        title: 'Корзина',
                        route: 'cart'
                    },
                    {
                        title: 'Установка безопасности',
                        route: 'delivery'
                    },
                    {
                        title: 'Доставка и оплата',
                        route: 'delivery'
                    },
                    {
                        title: 'О нас',
                        route: 'about'
                    },
                    {
                        title: 'Контакты',
                        route: 'contacts'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>