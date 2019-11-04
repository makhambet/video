<template>
    <div class="fixed-back">
        <div class="once-click-buy">
            <div class="content">
                <h2>Купить в один клик</h2>
                <p>Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке соответствующий условий активизации. С другой стороны укрепление и развитие структуры требуют определения и уточнения существенных финансовых и административных условий.</p>
                <form>
                    {{USER_AUTH}}
                    <label>Введите ваше имя:</label>
                    <input v-if="USER_AUTH.length === 0" v-model="name" type="text" placeholder="Ваше имя">
                    <input disabled v-if="USER_AUTH.length !== 0" v-model="USER_AUTH.name" type="text" placeholder="Ваше имя">
                    <label>Введите свой номер:</label>
                    <input v-if="USER_AUTH.length === 0" v-model="phone" type="number" placeholder="Номер телефона">
                    <input disabled v-if="USER_AUTH.length !== 0" v-model="USER_AUTH.phone" type="number" placeholder="Номер телефона">
                    <label><input v-model="installation" type="checkbox">Заказать с установкой</label>
                    <input @click.prevent="onceClick()" type="submit" value="Купить">
                </form>
            </div>
        </div>
        <div @click.prevent="$emit('closedModal')" class="closed">

        </div>
        <modal-box v-if="box" :boxText="boxTitle" :typeInfo="typeInfo"></modal-box>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ModalBox from '@/components/ModalBox'
    export default {
        props: {
            id: {
                type: Number,
                default: 1
            },
        },
        data() {
            return {
                name: '',
                phone: '',
                installation: '',
                box: false
            }
        },
        computed: {
            ...mapGetters([
                'USER_AUTH'
            ]),
        },
        methods: {
            onceClick(){
                if(this.name === '') this.name = this.USER_AUTH.name;
                if(this.phone === '') this.phone = this.USER_AUTH.phone;
                console.log(this.name, this.phone)
                this.$store.dispatch('POST', [
                    {
                        'installation': this.installation ? 1 : 0,
                        'phone': this.phone,
                        'name': this.name,
                        'product_id': this.id,
                        'count': 1
                    },
                    { name: 'once_click' }
                ])
                this.boxTitle = 'Спасибо за заявку! Скоро с вами свяжемся';
                this.typeInfo = 'success';
                this.box = true;
                setTimeout(() => {
                    this.box = false;
                    this.$emit('closedModal')
                }, 1000);
            }
        },
        created () {
            this.$store.dispatch('POST', [
                {},
                { name: 'user_auth' }
            ])
        },
        components: {
            ModalBox
        },
    }
</script>

<style scoped>
    input:disabled{
        background: inherit;
    }
</style>