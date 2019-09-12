<template>
    <div class="foot-3">
        <div>
            <h4>Информация</h4>
            <router-link tag="div" to="delivery">Доставка и оплата</router-link>
            <router-link tag="div" to="about">О нас</router-link>
            <router-link tag="div" to="contacts">Контакты</router-link>
        </div>
        <div>
            <h4>Услуги</h4>
            <router-link tag="div" to="delivery">Установка безопасности</router-link>
            <router-link tag="div" to="all-products">Товары</router-link>
        </div>
        <div>
            <h4>Мой профиль</h4>
            <router-link tag="div" to="basket">Корзина</router-link>
            <router-link tag="div" to="favorite">Избранное</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>