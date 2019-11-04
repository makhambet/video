<template>
    <footer>
        <div class="wrapper">
            <first-block></first-block>
            <second-block></second-block>
        </div>
        <div class="hr"></div>
        <div class="wrapper">
            <third-block></third-block>            
        </div>
        <footer-fixed></footer-fixed>
    </footer>
</template>

<script>
    import FirstBlock from './block/FirstBlock'
    import SecondBlock from './block/SecondBlock'
    import ThirdBlock from './block/ThirdBlock'
    import FooterFixed from './block/FooterFixed'
    export default {
        components: {
            FirstBlock,
            SecondBlock,
            ThirdBlock,
            FooterFixed
        },
    }
</script>

<style scoped>

</style>