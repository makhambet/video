<template>
    <div class="delivery">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Доставка и оплата</span></p>
            </div>
            <h2 class="h30">Доставка и оплата</h2>
            <hr>
        </div>
        <img src="@/assets/images/group_rectangle.png" alt="">
        <app-quality></app-quality>
        <div class="wrapper">
            <div class="about" v-html="INFO"></div>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import AppQuality from '@/components/trust/quality'
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'INFO'
            ])
        },
        components: {
            AppQuality,
            MiniBanner
        },
    }
</script>

<style scoped>

</style>