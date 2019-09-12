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
            <div class="about">
                <h2>Информация о нас</h2>
                <p>
                    Важно! Если у вас поменялась сумма при оплате:
                </p>
                <p>
                    Если у вас поменялась сумма при оплате — возможно это из-за наличия весовых товаров в заказе. Поскольку не всегда есть возможность набрать точную массу до грамма, стоимость заказа может по итогу незначительно поменяться.
                </p>
                <p>
                    Если сумма оказалась меньше, а вы уже оплатили онлайн, то остаток денег мы вернем вам на карточку в течение 3-х рабочих дней.
                <p>
                    Если же сумма больше, то нужно будет доплатить разницу наличными курьеру при доставке.Обо всех изменениях, оператор вас обязательно предупредит.
                <p>
                    Если у вас возникли проблемы с оплатой, позвоните нам по телефонам +7 (727) 346 85 83, +7 (778) 021 13 17 или напишите на help@info.kz. 
                </p>
            </div>
        </div>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import AppQuality from '@/components/trust/quality'
    export default {
        components: {
            AppQuality,
            MiniBanner
        },
    }
</script>

<style scoped>

</style>