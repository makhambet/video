<template>
    <div class="enter-content">
        <img src="@/assets/images/del.png" alt="">
        <div v-if="!enter">
            <h2>Добро пожаловать в Delivery</h2>
            <p>Новый магазин легок и прост в использовании, присоединяйся к нам и узнай о новых предложениях</p>
            <button @click="signinModalBox = true">Войти</button>
            <app-signin v-if="signinModalBox" @open="sign()" @closedModal="signinModalBox=false"></app-signin>
        </div>
        <div v-if="enter">
            <h2>Настройки</h2>
            <p>Поменять язык интерфейса</p>
            <select>
                <option value="0">Русский</option>
                <option value="1">Қазақша</option>
                <option value=""></option>
            </select><br>
            <button @click="exit()">Сменить аккаунт</button>
        </div>
    </div>
</template>

<script>
    import AppSignin from './header/signin/index'
    export default {
        props: {
            enter: {
                type: Boolean,
            },
        },
        data() {
            return {
                auth: false,
                signinModalBox: false,
                name: localStorage.name,
                box: false
            }
        },
        components: {
            AppSignin,
        },
        created () {
            this.auth = localStorage.login
            if(this.auth === 'false') this.auth = false
            if(this.auth === 'true') {
                this.auth = true
                this.signinModalBox = false
            }
        },
        methods: {
            sign(){
                this.signinModalBox = false;
                this.auth = true
            },
            exit(){
                let ask = confirm('Вы точно хотите выйти?');
                if(ask){
                    localStorage.clear();
                    this.box = true;
                    // setInterval(() => {
                    //     this.box = false;
                    //     this.$emit('exiting')
                    // }, 3000);
                }
            }
        },
    }
</script>

<style scoped>

</style>