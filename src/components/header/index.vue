<template>
    <header>
        <mini-block></mini-block>
        <div :class="{'header-scroll' : scrollActive}" class="fixed">
            <div class="wrapper">
                <main-block></main-block>
                <nav-bar></nav-bar>
            </div>
        </div>
    </header>
</template>

<script>
    import MiniBlock from './HeaderBlock/MiniBlock'
    import MainBlock from './HeaderBlock/MainBlock'
    import NavBar from './HeaderBlock/NavBar'
    export default {
        data() {
            return {
                scrollActive: false,
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
        },
    }
</script>

<style lang="scss" scoped>

</style>