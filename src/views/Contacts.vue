<template>
    <div class="contacts">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Контакты</span></p>
            </div>
            <h2 class="h30">Контакты</h2>
            <hr>
            <div class="contact-content">
                <p class="bold">Адрес нашего офиса</p>
                <address>проспект Абая 125</address>
                <p>г. Алматы</p>
                <small>Пн-Чт: 10:00-00:00</small><br>
                <small>Пт-Сб: 10:00-00:00</small><br>
                <small>Вс: 10:00-00:00</small>
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
        
    </div>
</template>

<script>
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