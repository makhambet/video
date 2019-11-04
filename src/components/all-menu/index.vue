<template>
    <div class="all-menu">
        <div class="nav-2">
            <nav class="all-menu-nav">
                <h2>Разделы</h2>
                <ul>
                    <li v-show="item.parent_id !== -1" v-for="(item, index) in CATS" :key="index">
                        <p @click="openCats(index, item.id)">
                            <i class="fas" :class="{'fa-angle-up': index === id, 'fa-angle-down' : index !== id}"></i>
                            {{item.name}}
                        </p>
                        <ul v-if="index===id">
                            <li v-for="(child, i) in SUB_CATS" :key="i" class="all-submenu">
                                <div>
                                    <label><input v-model="childCats" type="checkbox" :value="child.id">{{child.name}}</label>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="all-menu-nav">
                <h2>Разделы</h2>
                <p><strong>Диапазон:</strong> от {{PRICEMIN}} - {{PRICEMAX}} тенге</p>
                <div class="range-input">
                    <div class="s1-price-from">
                        <label><input v-model.number="minPrice" type="number"  :min="PRICEMIN" :max="PRICEMAX"/></label>
                    </div>
                    <span>&mdash;</span>
                    <div class="s1-price-to">
                        <input  v-model.number="maxPrice" type="number"  :min="PRICEMIN" :max="PRICEMAX"/>
                    </div>
                </div>
                <div class="range-slider">
                    <input @change="slider" v-model.number="minPrice" :min="PRICEMIN" :max="PRICEMAX" step="100" type="range" />
                    <input @change="slider" v-model.number="maxPrice" :min="PRICEMIN" :max="PRICEMAX" step="100" type="range" />
                    <svg width="100%" height="24"></svg>
                </div>
                <div class="all-menu-btn">
                    <button @click="searchFilter()">Найти</button><br>
                    <button v-if="reserted" @click="reset()">Сбросить</button>
                </div>
            </div>
        </div>
        <div @click="$emit('close')" class="close"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                minPrice: 100,
                maxPrice: 200000,
                parentCats: [],
                childCats: [],
                reserted: false,
                id: null,
                cat_id: []
            }
        },
        methods: {
            slider: function() {
                // if (this.minPrice > this.maxPrice) {
                //     var tmp = this.maxPrice;
                //     this.maxPrice = this.minPrice;
                //     this.minPrice = tmp;
                // }
            },
            searchFilter(){
                let formData = new FormData();
                formData.append('price_min', this.minPrice)
                formData.append('price_max', this.maxPrice);
                console.log(this.childCats)
                let arr = {
                    'price_min': this.minPrice,
                    'price_max': this.maxPrice,
                    'page': 1
                };
                for (let i = 0; i < this.childCats.length; i++) {
                    arr['cats[' + i + ']'] = this.childCats[i];
                }
                console.log(arr)
                // arr.push({'price_min': this.minPrice})
                this.$store.dispatch('GET', [
                    arr,
                    {
                        name: 'products'
                    }
                ])
                this.reserted = true
            },
            reset(){
                this.$store.dispatch('GET', [
                    {
                        page: 1
                    },
                    {
                        name: 'products'
                    }
                ])
                this.minPrice = this.PRICEMIN;
                this.maxPrice = this.PRICEMAX;
                this.reserted = false;
            },
            openCats(index, id){
                if(index !== this.id) this.id = index;
                else this.id = null;
                this.$store.dispatch('GET_SHOW', [
                    {
                        id: id
                    },
                    {
                        name: 'cats'
                    }
                ])
            }
        },
        computed: {
            ...mapGetters([
                'CATS',
                'SUB_CATS',
                'PRICEMIN',
                'PRICEMAX'
            ]),
        },
        mounted () {
            console.log(this.minPrice)
            console.log(this.maxPrice)
            setTimeout(() => {
                this.minPrice = this.PRICEMIN;
                this.maxPrice = this.PRICEMAX;
            }, 400);
            console.log(this.minPrice)
            console.log(this.maxPrice)
        },
    }
</script>

<style scoped>
    .range-slider {
        height: 30px;
        width: 90%;
        margin: 0 auto; 
        text-align: center;
        position: relative;
    }

    .range-slider svg,
    .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=number] {
        border: none;
        text-align: center;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type=number]:invalid,
    input[type=number]:out-of-range {
        color: #ff6347;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        text-align: left;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #0057FF;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: #2497e3;
    }

    input[type=range]:focus::-ms-fill-upper {
        background: #fff;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animation-delay: 0.2s;
        background: #0057FF;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 2px solid #0057FF;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #0057FF;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }
</style>