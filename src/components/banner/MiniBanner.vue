<template>
    <div class="mini-banner">
            <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
                <slide
                    v-for="item in mini" 
                    :key="item.id" 
                    :style="{ backgroundImage: 'url(' + url + item.image + ')' }"
                    style="background-size: 100% 100%; repeat: none; height: 100%;"
                    class="banner-slide"
                >
                    <a :href="item.link"></a>
                </slide>
            </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'
    import { mapGetters } from 'vuex'
    
    export default {
        data() {
            return {
                url: 'http://194.4.58.57/'
            }
        },
        computed: {
            ...mapGetters([
                'NEWS'
            ]),
            mini(){
                let news  = this.NEWS;
                news = news.filter( b => (
                    b.type === 1
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
    a{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>