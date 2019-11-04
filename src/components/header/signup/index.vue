<template>
    <div class="content">
        <div class="content-img">
            <img src="@/assets/images/del.png" alt="">
        </div>
        <h2>Регистрация</h2>
        <p>Регистрируясь на нашем сайте вы автоматически принимаете политику конфидециальности и принимаете правила пользования.</p>
        <form>
            <label>Введите ваше имя:</label>
            <input v-model="name" type="name" placeholder="Имя">
            <label>Введите ваш E-mail:</label>
            <input v-model="email" type="email" placeholder="E-mail">
            <label>Введите ваш телефон:</label>
            <input v-model="phone" type="number" placeholder="Номер телефона">
            <label>Введите пароль:</label>
            <input v-model="password" type="password" placeholder="Пароль">
            <label>Повторите пароль:</label>
            <input v-model="retPassword" type="password" placeholder="Пароль">
            <input @click.prevent="enter()" type="submit" value="Зарегистрироваться">
            <slot></slot>
        </form>
        <modal-box v-if="box" :boxText="boxText" :typeInfo="typeInfo"></modal-box>
    </div>
</template>

<script>
    import axios from 'axios'
    import ModalBox from '@/components/ModalBox'
    export default {
        data() {
            return {
                phone: '',
                password: '',
                retPassword: '',
                name: '',
                email: '',
                box: false,
                boxText: '',
                typeInfo: ''

            }
        },
        methods: {
            enter() {
                axios.post('/api/user/register', {
                    phone: this.phone,
                    password: this.password,
                    name: this.name,
                    email: this.email
                })
                .then(response => {
                    console.log(response)
                    if(response.status === 200){
                        localStorage.login = true
                        localStorage.name = response.data.result.name,
                        localStorage.token = response.data.result.token,
                        this.login = true
                        this.boxText='Вы зарегистрировались!';
                        this.typeInfo='success';
                        this.box = true;
                        setTimeout(() => {
                            this.$emit('open', false)
                            this.box = false;
                        }, 1000);
                    }
                })
                .catch(error => {
                    console.log(error.response)
                    this.boxText=error.response.data.message;
                    this.typeInfo='warn';
                    this.box = true;
                    setTimeout(() => {
                        this.box = false;
                    }, 1000);
                })
            }
        },
        components: {
            ModalBox,
        },
    }
</script>

<style scoped>
    .fixed-back{
        overflow-y: scroll;
    }
    .signup{
        margin-bottom: 100px;
    }
</style>