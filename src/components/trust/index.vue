<template>
    <div class="trust category">
        <div class="border">
            <div class="grid">
                <!-- <div><img src="@/assets/images/hik.png" alt=""></div>
                <div><img src="@/assets/images/jhua.png" alt=""></div>
                <div><img src="@/assets/images/slinex.png" alt=""></div>
                <div><img src="@/assets/images/private.png" alt=""></div>
                <div><img src="@/assets/images/ezviz.png" alt=""></div>
                <div><img src="@/assets/images/ajax.png" alt=""></div>
                <div><img src="@/assets/images/neo.png" alt=""></div>
                <div><img src="@/assets/images/liqpay.png" alt=""></div> -->
                <div style="cursor: pointer;" v-show="item.parent_id !== -1" v-for="(item, index) in CATS" :key="index">
                    <img @click="open(item.id)" :src="url + item.image" alt="">
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                url: 'http://194.4.58.57/'
            }
        },
        computed: {
            ...mapGetters([
                'CATS'
            ])
        },
        methods: {
            open(id) {
                this.$store.dispatch('GET', [
                    { page: 1, 'cats[0]': id },
                    { name: 'products' }
                ])
                setTimeout(() => {
                    this.$router.push({path: 'all-products'})
                }, 500);
            }
        },
    }
</script>

<style scoped>
    img{
        /* width: 155px;
        height: 81px; */
        /* width: 100%;
        height: 100%; */
        max-width: 285px;
        max-height: 150px;
        margin: 10px;
    }
</style>