<template>
    <div class="all">
        <div class="wrapper">
            <div class="all-content">
                <div class="all-block1">
                    <div class="now-page">
                        <p>Главная > <span>Поиск</span></p>
                    </div>
                    <all-menu></all-menu>
                </div>
                <div class="all-block2">
                    <h2 class="h30">Результат поиска: Камер наблюдения - HIKVISION</h2>
                    <hr>
                    <div class="all-block2-grid">
                        <div class="home-products-block" v-for="item in 6" :key="item">
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
        </div>
    </div>
</template>

<script>
    import AllMenu from '@/components/all-menu/index'
    export default {
        data() {
            return {
                favoriteActive: false,
                favorite: 'far fa-heart',
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
        components: {
            AllMenu,
        },
    }
</script>

<style lang="scss" scoped>

</style>