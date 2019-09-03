<template>
    <div class="favorite">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Избранное</span></p>
            </div>
            <h2 class="h30">Избранное</h2>
            <hr>
            <div class="favorite-content">
                <div class="home-products-block" v-for="item in 8" :key="item">
                    <div class="carousel-img">
                        <img src="@/assets/images/camera.png" alt="">
                    </div>
                    <div class="products-favorite" @click="favoriteClick()">
                        <i :class="favorite"></i>
                    </div>
                    <div class="home-products-description">
                        <p>Камера наблюдения - HIKVISION</p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem tenetur odit vel reiciendis ipsam blanditiis libero obcaecati ab?</small>
                        <div class="price">
                            <small>Цена</small>
                            <p>20 000 тенге</p>
                        </div>
                        <button>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
                modalBox: false
            }
        },
        methods: {
            favoriteClick(){
                this.favoriteActive = !this.favoriteActive
                if(this.favoriteActive)
                    this.favorite = 'fas fa-heart'
                else this.favorite = 'far fa-heart'
            },
        },
    }
</script>

<style scoped>

</style>