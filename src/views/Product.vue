<template>
    <div class="product">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Камера наблюдения - HIKVISON </span> <a>Купить в один клик</a></p>
            </div>
            <div class="product-content">
                <div class="product-content-block1">
                    <div><img src="@/assets/images/a.png" alt=""></div>
                    <div><img src="@/assets/images/b.png" alt=""></div>
                    <div><img src="@/assets/images/c.png" alt=""></div>
                    <div><img src="@/assets/images/d.png" alt=""></div>
                </div>
                <div class="product-content-block2">
                    <div class="products-status">
                        Отсутствует
                    </div>
                    <img src="@/assets/images/e.png" alt="">
                </div>
                <div class="product-content-block3">
                    <h2>Камера наблюдения - HIKVISON</h2>
                    <hr>
                    <div class="product-content-block3-flex">
                        <div class="product-block3-count">
                            <button>-</button>
                            2
                            <button>+</button>
                        </div>
                        <div class="product-block3-price">
                            <small>Цена</small>
                            <p>20 000 тенге</p>
                        </div>
                        <div class="product-favorite"  @click="favoriteClick()">
                            <i :class="favorite"></i>
                        </div>
                        <button>Купить</button>
                    </div>
                    <hr>
                    <div class="product-about">
                        <p class="about">Описание</p>
                        <p>Характеристика</p>
                    </div>
                    <hr>
                    <div class="product-about">
                        <div>
                            <p>
                                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. <br>
                                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <app-similar :productsName="'Похожие товары'"></app-similar>
        </div>
    </div>
</template>

<script>
    import AppSimilar from '@/components/products/index'
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
            AppSimilar,
        },
    }
</script>

<style scoped>

</style>