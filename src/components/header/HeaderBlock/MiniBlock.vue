<template>
    <div class="head-1">
        <div class="wrapper">
            <div class="head-1-block1">
                <p>Самый быстрый магазин камер видеонаблюдений в Казахстане</p>
            </div>
            <div class="head-1-block2">
                <router-link v-if="auth" to="/profile">Мой профиль {{name}}</router-link>
                <span v-if="!auth" @click="signinModalBox = true">Войти</span>
                <app-signin v-if="signinModalBox" @open="sign()" @closedModal="signinModalBox=false"></app-signin>

                <span class="exit" @click="logout()">
                    Выход
                    <!-- <option value="ru">Выход</option> -->
                    <!-- <option value="kz">Каз</option> -->
                </span>
                <!-- <span>Выход</span> -->
            </div>
        </div>
    </div>
</template>

<script>
    import AppSignin from '../signin/index'
    export default {
        data() {
            return {
                auth: false,
                signinModalBox: false,
                name: localStorage.name
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
                this.name = localStorage.name;
                this.auth = true
            },
            logout(){
                localStorage.clear();
                this.auth = false;
                this.$store.dispatch('POST', [
                    {},
                    { name: 'user_auth' }
                ])
                this.$store.dispatch('GET_EXCEPTION', 'basket_list');
            }
        },
    }
</script>

<style scoped>
    span{
        cursor: pointer;
    }
</style>