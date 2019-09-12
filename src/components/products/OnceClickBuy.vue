<template>
    <div class="fixed-back">
        <div class="once-click-buy">
            <div class="content">
                <h2>Купить в один клик</h2>
                <p>Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке соответствующий условий активизации. С другой стороны укрепление и развитие структуры требуют определения и уточнения существенных финансовых и административных условий.</p>
                <form>
                    <label>Введите ваше имя:</label>
                    <input type="text" placeholder="Ваше имя">
                    <label>Введите свой номер:</label>
                    <input type="number" placeholder="Номер телефона">
                    <label><input type="checkbox">Заказать с установкой</label>
                    <input type="submit" value="Купить">
                </form>
            </div>
        </div>
        <div @click.prevent="$emit('closedModal')" class="closed">

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
</style>