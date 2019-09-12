<template>
    <div class="carousel-area">
        <div class="home-products-block">
            <router-link 
                class="carousel-img"
                tag="div"
                :to="{name: 'product', params: {id: item.id}}"
            >
                <img :src="item.images[0]" alt="">
            </router-link>
            <div class="products-favorite" @click="favoriteClick(item.id)">
                <i class="fa-heart" :class="item.in_favorite===true ? 'fas' : 'far'"></i>
            </div>
            <div :style="{backgroundColor: textColor(item.product_status)}" class="products-status">
                {{item.product_status}}
            </div>
            <div class="home-products-description">
                <p>{{item.name}}</p>
                <small>{{item.description.slice(0, 100)}}</small>
                <div class="price">
                    <small>Цена</small>
                    <p>{{item.price}} тенге</p>
                </div>
                <button>Купить</button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            },
        },
        methods: {
            favoriteClick(id){
                if(localStorage.token !== null){
                    this.$store.dispatch('POST', [
                        {
                            product_id: id
                        },
                        {
                            name: 'favorite'
                        }
                    ])
                    this.$store.dispatch('GET', 'products')
                    setTimeout(() => {
                        this.$store.dispatch('GET_EXCEPTION', 'favorite_list')
                    }, 100);
                }
            },
            textColor(status){
                if(status === 'В наличии') return '#32A914'
                else if(status === 'Мало') return '#FF4858'
                else if(status === 'Средне') return '#FFAB48'
                return '#A91414'
            }
        },
    }
</script>

<style scoped>

</style>