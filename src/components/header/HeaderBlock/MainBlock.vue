<template>
    <div class="head-2">
        <router-link class="header-logo" to="/" tag="div" style="cursor: pointer;">
            <img src="@/assets/images/del.png" alt="">
        </router-link>
        <form>
            <i class="fas fa-search"></i>
            <input ref="input" v-model="searchModel" type="text" placeholder="Найдите все для повседневной жизни">
            <div v-if="remove" @click="removeSrc()" class="searchExit">x</div>
            <input type="submit" @click.prevent="searchBtn()" class="btn" value="Найти" >
        </form>
        <div class="block1">
            <small>Ежедневно с 06:00 до 20:00</small><br>
            <strong>+7(777) 777 77-77</strong>
        </div>
        <div class="block2">
            <small>Бесплатные звонки по РК</small><br>
            <strong>+7(777) 777 77-77</strong>
        </div>
        <div @click="$emit('close')" class="toggle">
            <div :class="{'one': media}" class="span"></div>
            <div :class="{'two': media}" class="span"></div>
            <div :class="{'three': media}" class="span"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: {
            media: {
                type: Boolean,
            },
        },
        data() {
            return {
                searchModel: '',
                remove: false,
                open: false,
                count: 0
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH'
            ])
        },
        methods: {
            searchBtn() {
                this.$store.dispatch('GET_SEARCH', {
                    page: 1,
                    text: this.searchModel
                })
                this.$router.push({path: 'all-products'})
            },
            removeSrc(){
                this.searchModel = ''
                this.$store.dispatch('GET_SEARCH', {
                    text: this.searchModel
                })
            }
        },
        watch: {
            searchModel() {
                if(this.searchModel !== ''){
                    this.remove = true;
                }
                else if(this.searchModel === ''){
                    this.remove = false
                }
            }
        },
    }
</script>

<style scoped>
    form{
        position: relative;
    }
    .searchExit{
        position: absolute;
        top: 10px;
        right: 23%;
        background: rgb(255, 233, 235);
        height: 20px;
        width: 20px;
        color: #FF4252;
        text-align: center;
        border-radius: 50% 50%;
        cursor: pointer;
    }
    @media (max-width: 1300px){
        .searchExit{
            right: 32%;
            top: 8px;
        }
    }
    @media (max-width: 947px){
        .searchExit{
            right: 3%;
            top: 8px;
        }
    }
    @media (max-width: 579px){
        .searchExit{
            right: 3%;
            top: 5px;
        }
    }
</style>