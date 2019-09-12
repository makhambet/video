<template>
    <div class="profile">
        <div class="wrapper">
            <div class="now-page">
                <p>Главная > <span>Профиль</span></p>
            </div>
            <h2 class="h30">Профиль</h2>
            <hr>
            <div class="profile-content">
                <p class="bold">Личные данные</p>
                <label>Имя</label>
                <div class="profile-content-flex">
                    <input v-model="name" type="text" :placeholder="USER_AUTH.name">
                    <button @click="change('name', name)">Изменить</button>
                </div>
                <label>E-mail</label>
                <div class="profile-content-flex">
                    <input v-model="email" type="email" :placeholder="USER_AUTH.email">
                    <button @click="change('email', email)">Изменить</button>
                </div>
                <label>Номер</label>
                <div class="profile-content-flex">
                    <input v-model="phone" type="number" :placeholder="USER_AUTH.phone">
                    <button @click="change('phone', phone)">Изменить</button>
                </div>
                <label>Пароль</label>
                <div class="profile-content-flex">
                    <input v-model="password" type="text" placeholder="***************">
                    <button @click="change('password', password)">Изменить</button>
                </div>
                <p class="bold">Адреса доставки</p>
                <div v-for="(item, index) in USER_AUTH.addresses" :key="index">
                    <label>№ {{index + 1}}</label>
                    <div class="profile-content-flex">
                        <input :value="'ул ' + item.street + ' дом ' + item.home + ' кВ ' + item.apartment" type="text">
                        <span @click="deleteAddress(item.id)" class="delete">x</span>
                    </div>
                </div>
                <button @click="addNewAddress = true" v-if="!addNewAddress" class="add">Добавить новый адрес</button>
                <div v-if="addNewAddress">
                    <p class="bold">Добавить адрес</p>
                    <form>
                        <input v-model="newAddressStreet" type="text" placeholder="Улица">
                        <div class="new-address-flex">
                            <input v-model="newAddressHome" type="text" placeholder="Дом">
                            <input v-model="newAddressApartment" type="text" placeholder="Квартира">
                        </div>
                    </form>
                    <button @click="newAddress()" class="add">{{btnText}}</button>
                </div>
            </div>
        </div>
        <p>{{USER_AUTH}}</p>
        <mini-banner></mini-banner>
    </div>
</template>

<script>
    import MiniBanner from '@/components/banner/MiniBanner'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                addNewAddress: false,
                btnText: 'Добавить адрес',
                address: [],
                newAddressStreet: '',
                newAddressHome: '',
                newAddressApartment: '',
                name: '',
                email: '',
                phone: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters([
                'USER_AUTH'
            ]),
            addresses(){
                let arr = this.USER_AUTH.addresses
                console.log(this.USER_AUTH)
                for (let index = 0; index < arr.length; index++) {
                    this.address = `ул. $arr[index].street дом $arr[index].home кВ $arr[index].apartment`;
                }
            },
        },
        methods: {
            newAddress() {
                this.$store.dispatch('POST', [
                    {
                        street: this.newAddressStreet,
                        home: this.newAddressHome,
                        apartment: this.newAddressApartment
                    },
                    { name: 'add_address' }
                ])
                this.$store.dispatch('POST', [
                    {},
                    { name: 'user_auth' }
                ])
                this.addNewAddress = false
            },
            deleteAddress(id){
                this.$store.dispatch('POST', [
                    {
                        address_id: id
                    },
                    { name: 'delete_address' }
                ])
                this.$store.dispatch('POST', [
                    {},
                    { name: 'user_auth' }
                ])
            },
            change(type, edit){
                console.log(type)
                let arr = {
                    type: type
                }
                console.log(arr)
                switch (type) {
                    case 'name':
                        this.$store.dispatch('POST', [
                            {
                                name: edit
                            },
                            {
                                name: 'user_edit'
                            }
                        ])
                        break;
                    case 'email':
                        this.$store.dispatch('POST', [
                            {
                                email: edit
                            },
                            {
                                name: 'user_edit'
                            }
                        ])
                        break;
                    case 'phone':
                        this.$store.dispatch('POST', [
                            {
                                phone: edit
                            },
                            {
                                name: 'user_edit'
                            }
                        ])
                        break;
                    case 'password':
                        this.$store.dispatch('POST', [
                            {
                                password: edit
                            },
                            {
                                name: 'user_edit'
                            }
                        ])
                        break;
                }
                this.$store.dispatch('POST', [
                    {},
                    { name: 'user_auth' }
                ])
                this.name = ''
                this.email = ''
                this.phone = ''
                this.password = ''
            }
        },
        components: {
            MiniBanner,
        },
        created () {
            this.$store.dispatch('POST', [
                {},
                { name: 'user_auth' }
            ])
        },
    }
</script>

<style scoped>
</style>