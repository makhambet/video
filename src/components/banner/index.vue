<template>
    <div class="banner">
            <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
                <slide 
                    v-for="item in main" 
                    :key="item.id" 
                    :style="{ backgroundImage: 'url(' + item.image + ')' }"
                    style="background-size: 100% 100%; repeat: none;"
                    class="banner-slide"
                >
                    <a :href="item.link"></a>
                    <!-- <button><img src="@/assets/images/left.png" alt=""></button> -->
                    <!-- <div class="banner-content">
                        <div>
                            <h2>Праздник осени</h2>
                            <p>20% скидки на все продукты</p>
                            <router-link to="all-products" tag="button">К покупкам</router-link>
                        </div>
                        <div>
                            <img src="@/assets/images/qw.png" alt="">
                        </div>
                    </div> -->
                    <!-- <button><img src="@/assets/images/right.png" alt=""></button> -->
                </slide>
            </carousel>
            
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
            ...mapGetters([
                'NEWS'
            ]),
            main(){
                let news  = this.NEWS;
                news = news.filter( b => (
                    b.type === 0
                ))
                return news;
            }
        },
        components: {
            Carousel,
            Slide,
        },
    }
</script>

<style scoped>
    .VueCarousel-navigation-next{
        right: 60px !important;
    }
    .VueCarousel-navigation-prev{
        left: 60px !important;
    }
    #app .banner .VueCarousel-navigation-prev, #app .banner .VueCarousel-navigation-next{
        left: 0;
    }
    a{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>