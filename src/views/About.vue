<template>
    <div class="about">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Информация о нас</span></p>
            </div>
            <h2 class="h30">Информация о нас</h2>
            <hr>
        </div>
        <img src="@/assets/images/about.png" alt="">
        <app-quality></app-quality>
        <div class="wrapper">
            <div class="about" v-html="INFO">
            </div>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import AppQuality from '@/components/trust/quality'
    import { mapGetters } from 'vuex'
    export default {
        components: {
            AppQuality,
            MiniBanner
        },
        computed: {
            ...mapGetters([
                'INFO'
            ])
        },
    }
</script>

<style scoped>

</style>