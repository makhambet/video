<template>
    <div class="all-menu">
        <nav class="all-menu-nav">
            <h2>Разделы</h2>
            <ul>
                <li v-for="(item, index) in CATS" :key="index">
                    <p><i class="fas fa-angle-down"></i> {{item.name}}</p>
                    <ul>
                        <li class="all-submenu">
                            <div>
                                <label><input type="checkbox"> HIKVISION</label>
                            </div>
                            <div>
                                <label><input type="checkbox"> SAMSUNG</label>
                            </div>
                            <div>
                                <label><input type="checkbox"> Red</label>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <p><i class="fas fa-angle-down"></i> Камера видеонаблюдения</p>
                </li>
                <li>
                    <p><i class="fas fa-angle-down"></i> Камера видеонаблюдения</p>
                </li>
                <li>
                    <p><i class="fas fa-angle-down"></i> Камера видеонаблюдения</p>
                </li>
            </ul>
        </nav>
        <div class="all-menu-nav">
            <h2>Разделы</h2>
            <p><strong>Диапазон:</strong> от 100 - 200 000 тенге</p>
            <div class="range-input">
                <div class="s1-price-from">
                    <label><input v-model.number="minPrice" type="number"  min="100" :max="maxPrice"/></label>
                </div>
                <span>&mdash;</span>
                <div class="s1-price-to">
                    <input  v-model.number="maxPrice" type="number"  :min="minPrice" max="200000"/>
                </div>
            </div>
            <div class="range-slider">
                <input @change="slider" v-model.number="minPrice" min="100" :max="maxPrice" step="100" type="range" />
                <input @change="slider" v-model.number="maxPrice" :min="minPrice" max="200000" step="100" type="range" />
                <svg width="100%" height="24"></svg>
            </div>
            <div class="all-menu-btn">
                <button @click="searchFilter()">Найти</button><br>
                <button v-if="reserted" @click="reset()">Сбросить</button>
            </div>
        </div>
        <p>{{parentCats}}</p>
        <p>{{childCats}}</p>
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
                reserted: false
            }
        },
        methods: {
            slider: function() {
                if (this.minPrice > this.maxPrice) {
                    var tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
            },
            searchFilter(){
                if(this.minPrice >= 100){
                    this.$store.dispatch('GET_PRICE', [
                        {
                            price: this.minPrice
                        },
                        {
                            name: 'pricemin'
                        }
                    ])
                }
                if(this.maxPrice <= 200000){
                    this.$store.dispatch('GET_PRICE', [
                        {
                            price: this.maxPrice
                        },
                        {
                            name: 'pricemax'
                        }
                    ])
                }
                this.reserted = true
            },
            reset(){
                this.minPrice = 100;
                this.maxPrice = 200000;
                this.reserted = false
                this.$store.dispatch('GET_PRICE', [
                    {
                        price: 0
                    },
                    {
                        name: 'pricemin'
                    }
                ]);
                this.$store.dispatch('GET_PRICE', [
                    {
                        price: 200000
                    },
                    {
                        name: 'pricemax'
                    }
                ]);
            }
        },
        computed: {
            ...mapGetters([
                'CATS'
            ]),
            menuItems(){
                let cats = this.CATS
                for (let index = 0; index < cats.length; index++) {
                    if(cats[index].parent_id === 0)
                        this.parentCats.push(cats[index]);
                    if(cats[index].parent_id === 1)
                        this.childCats.push(cats[index]);
                }
            },
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