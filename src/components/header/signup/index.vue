<template>
    <div class="content">
        <div class="content-img">
            <img src="@/assets/images/del.png" alt="">
        </div>
        <h2>Регистрация</h2>
        <p>Регистрируясь на нашем сайте вы автоматически принимаете политику конфидециальности и принимаете правила пользования.</p>
        <form>
            <label>Введите ваше имя::</label>
            <input v-model="name" type="name" placeholder="Имя">
            <label>Введите свой E-mail:</label>
            <input v-model="email" type="email" placeholder="E-mail">
            <label>Введите ваше имя::</label>
            <input v-model="phone" type="number" placeholder="Номер телефона">
            <label>Введите свой E-mail:</label>
            <input v-model="password" type="password" placeholder="Пароль">
            <label>Введите свой E-mail:</label>
            <input v-model="retPassword" type="password" placeholder="Пароль">
            <input @click.prevent="enter()" type="submit" value="Зарегистрироваться">
            <slot></slot>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                phone: '',
                password: '',
                retPassword: '',
                name: '',
                email: ''

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
                        this.$emit('open', false)
                    }
                })
                .catch(error => {
                    console.log(error.response)
                })
            }
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