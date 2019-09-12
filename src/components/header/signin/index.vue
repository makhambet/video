<template>
    <div class="fixed-back">
        <div v-if="signin" class="signin">
            <div class="content">
                <div class="content-img">
                    <img src="@/assets/images/del.png" alt="">
                </div>
                <h2>Добро пожаловать в Delivery</h2>
                <p>Новый магазин легок и прост в использовании, присоединяйся к нам и узнай о новых прделожениях первым!</p>
                <form>
                    <label>Email:</label>
                    <input v-model="email" type="email" placeholder="Введите email">
                    <label>Пароль:</label>
                    <input v-model="password" type="password" placeholder="Введите пароль">
                    <div class="content-flex">
                        <label class="forget">Забыли пароль?</label>
                        <label class="memorize">Запомнить меня<input type="checkbox"></label>
                    </div>
                    <input @click.prevent="enter()" type="submit" value="Войти">
                    <button @click.prevent="closed('signin', 'signup')">Регистрация</button>
                </form>
            </div>
        </div>
        <app-signup @open="openning()"  v-if="signup" class="signup">
            <label 
                @click.prevent="closed('signup', 'policy')" 
                class="policy"
            >
                Политика конфидециальности и правила пользования
            </label>
        </app-signup>
        <app-policy v-if="policy" class="policy">
            <input @click.prevent="closed('policy', 'signup')" type="submit" value="Назад">
        </app-policy>
        <div @click.prevent="$emit('closedModal')" class="closed"></div>
    </div>
</template>

<script>
    import AppSignup from '../signup/index'
    import AppPolicy from '../signup/policy'
    import axios from 'axios'
    export default {
        data() {
            return {
                signin: true,
                signup: false,
                policy: false,
                email: '',
                password: ''
            }
        },
        methods: {
            closed(close, open) {
                switch (close) {
                    case 'signin':
                        this.signin = false;
                        this.signup = true;
                        break;
                    case 'signup':
                        this.signup = false;
                        this.policy = true;
                        break;
                    case 'policy':
                        this.policy = false;
                        this.signup = true;
                        break;
                }
            },
            enter() {
                axios.post('/api/user/login', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log(response)
                    if(response.status === 200){
                        localStorage.login = true
                        localStorage.name = response.data.result.name,
                        localStorage.token = response.data.result.token,
                        this.login = true
                        this.$store.dispatch('POST', [
                            {

                            },
                            {
                                name: 'user_auth'
                            }
                        ]);
                        this.$emit('open')
                    }
                })
                .catch(error => {
                    console.log(error.response)
                })
            },
            openning(data){
                console.log(data)
                this.$emit('open')
            }
        },
        components: {
            AppSignup,
            AppPolicy
        },
    }
</script>

<style scoped>
</style>