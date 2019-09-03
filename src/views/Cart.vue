<template>
    <div class="cart">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Корзина</span></p>
            </div>
            <h2 class="h30">Корзина</h2>
            <hr>
            <div class="cart-content">
                <div class="cart-content-head">
                    <div><p>Товар</p></div>
                    <div><p>Цена</p></div>
                    <div><p>Количество</p></div>
                    <div><p>Итого</p></div>
                </div>
                <div class="cart-content-body">
                    <div>
                        <div class="exit">x</div>
                        <div class="cart-body-img"><img src="@/assets/images/c.png" alt=""></div>
                        <div>
                            <p class="cart-title">Камера наблюдения - HILVISION</p>
                            <form>
                                <label><input type="checkbox"> Заказать с установкой</label>
                            </form>
                        </div>
                    </div>
                    <div><p>20 000 тенге</p></div>
                   <div class="cart-content-count">
                        <button>-</button>
                        2
                        <button>+</button>
                    </div>
                    <div><p>40 000 тенге</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>