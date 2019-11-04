<template>
    <header>
        <mini-block></mini-block>
        <div :class="{'header-scroll' : scrollActive}" class="fixed">
            <div class="wrapper">
                <main-block :media="media" @close="media = !media"></main-block>
                <nav-bar></nav-bar>
            </div>
        </div>
        <media-menu @close="media = !media" :class="{'mediActive': media}"></media-menu>
        <div @click="media = false" v-if="media" class="header-close">

        </div>
    </header>
</template>

<script>
    import MiniBlock from './HeaderBlock/MiniBlock'
    import MainBlock from './HeaderBlock/MainBlock'
    import NavBar from './HeaderBlock/NavBar'
    import MediaMenu from './HeaderBlock/MediaMenu'
    export default {
        data() {
            return {
                scrollActive: false,
                media: false
            }
        },
        methods: {
            headerScroll() {
                if(window.scrollY > 40){
                    this.scrollActive = true
                }
                else{
                    this.scrollActive = false
                }
            },
        },
        mounted () {
            window.addEventListener('scroll', this.headerScroll)
        },
        components: {
            MiniBlock,
            MainBlock,
            NavBar,
            MediaMenu
        },
    }
</script>

<style lang="scss" scoped>

</style>