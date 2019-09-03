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
                    <input type="text" placeholder="Введите">
                    <button>Изменить</button>
                </div>
                <label>E-mail</label>
                <div class="profile-content-flex">
                    <input type="email" placeholder="E-mail">
                    <button>Изменить</button>
                </div>
                <label>Номер</label>
                <div class="profile-content-flex">
                    <input type="number" placeholder="+7 (705) 725 27-45">
                    <button>Изменить</button>
                </div>
                <label>Пароль</label>
                <div class="profile-content-flex">
                    <input type="password" placeholder="************************">
                    <button>Изменить</button>
                </div>
                <p class="bold">Адреса доставки</p>
                <label>№ 1</label>
                <div class="profile-content-flex">
                    <input type="text"><span class="delete">x</span>
                </div>
                <label>№ 2</label>
                <div class="profile-content-flex">
                    <input type="text"><span class="delete">x</span>
                </div>
                <div v-if="addNewAddress">
                    <p class="bold">Добавить адрес</p>
                    <form>
                        <input type="text" placeholder="Улица">
                        <div class="new-address-flex">
                            <input type="text" placeholder="Дом">
                            <input type="text" placeholder="Квартира">
                        </div>
                    </form>
                </div>
                <button @click="addNewAddress = !addNewAddress" class="add">{{btnText}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                addNewAddress: false,
                btnText: 'Добавить новый адрес'
            }
        },
    }
</script>

<style scoped>
</style>