<template>
    <div class="mini-banner">
        <div class="wrapper">
            <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
                <slide class="banner-slide">
                    <div class="mini-banner-content">
                        <div>
                            <h2>Праздник осени</h2>
                            <p>20% скидки на все продукты</p>
                        </div>
                        <div>
                            <img src="@/assets/images/asdf.png" alt="">
                        </div>
                    </div>
                </slide>
                <slide class="banner-slide">
                    <div class="mini-banner-content">
                        <div>
                            <h2>Праздник осени</h2>
                            <p>20% скидки на все продукты</p>
                        </div>
                        <div>
                            <img src="@/assets/images/asdf.png" alt="">
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

<style scoped>

</style>