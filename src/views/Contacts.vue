<template>
    <div class="contacts">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Контакты</span></p>
            </div>
            <h2 class="h30">Контакты</h2>
            <hr>
            <div class="contact-content">
                <div v-html="CONTACT"></div>
            </div>
        </div>
        <div>
            <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab5bc0759202cf6b1669eaf8a2b3ad08b415780a6265a8d7741525ca2083f0fa9&amp;source=constructor" 
                width="100%" 
                height="300" 
                frameborder="0"
            >
            </iframe>
        </div>
        <mini-banner></mini-banner>        
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'CONTACT'
            ])
        },
        components: {
            MiniBanner
        },
        created () {
            this.$store.dispatch('GET', [
                { }, {name: 'contact'}
            ]);
        },
    }
</script>

<style scoped>
    .ymaps-2-1-74-map{
        width: 100%;
    }
    p.bold{
        font-weight: bolder;
        font-size: 18px;
        margin: 18px 0;
    }
</style>