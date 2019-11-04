<template>
    <div class="footer-fixed">
        <nav>
            <ul>
                <router-link to="/" tag="li" style="color: #FF6969;">
                    <i class="fas fa-home"></i><br>
                    <span>Главная</span>
                </router-link>
                <router-link to="/all-products" tag="li">
                    <i class="fas fa-boxes"></i><br>
                    <span>Товары</span>
                </router-link>
                <!-- <router-link to="/cart" tag="li">
                    <i class="fas fa-trash"></i><br>
                    <span>Корзина</span>
                </router-link> -->
                <router-link to="/favorite" tag="li">
                    <i class="fas fa-heart"></i><br>
                    <span>Избранное</span>
                </router-link>
                <router-link to="/profile" tag="li">
                    <i class="fas fa-user-alt"></i><br>
                    <span>Профиль</span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>