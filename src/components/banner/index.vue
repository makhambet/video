<template>
    <div class="banner">
        <div class="wrapper">
            <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
                <slide class="banner-slide">
                    <!-- <button><img src="@/assets/images/left.png" alt=""></button> -->
                    <div class="banner-content">
                        <div>
                            <h2>Праздник осени</h2>
                            <p>20% скидки на все продукты</p>
                            <router-link to="all-products" tag="button">К покупкам</router-link>
                        </div>
                        <div>
                            <img src="@/assets/images/qw.png" alt="">
                        </div>
                    </div>
                    <!-- <button><img src="@/assets/images/right.png" alt=""></button> -->
                </slide>
                <slide class="banner-slide">
                    <div class="banner-content">
                        <div>
                            <h2>Праздник осени</h2>
                            <p>20% скидки на все продукты</p>
                            <router-link to="all-products" tag="button">К покупкам</router-link>
                        </div>
                        <div>
                            <img src="@/assets/images/qw.png" alt="">
                        </div>
                    </div>
                </slide>
            </carousel>
            
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'
    
    export default {
        components: {
            Carousel,
            Slide,
        },
    }
</script>

<style lang="scss" scoped>

</style>