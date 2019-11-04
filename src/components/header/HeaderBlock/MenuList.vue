<template>
    <div class="menu-list">
        <nav>
            <ul>
                <li v-show="item.parent_id !== -1" class="submenu-list" v-for="(item, index) in CATS" :key="index">
                    <p @mouseover="open(item.id)">{{item.name}}</p>
                    <ul>
                        <li @click="goToProduct(child.id)" class="grandmenu-list" v-for="(child, i) in SUB_CATS" :key="i">
                            {{child.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'CATS',
                'SUB_CATS'
            ]),
        },
        methods: {
            open(id) {
                this.$store.dispatch('GET_SHOW', [
                    {
                        id: id
                    },
                    {
                        name: 'cats'
                    }
                ])
            },
            goToProduct(id){
                this.$store.dispatch('GET', [
                    {
                        'cats[0]': id
                    },
                    {
                        name: 'products'
                    }
                ]);
                this.$emit('close');
                this.$router.push({path: '/all-products'})
            }
        },
    }
</script>

<style scoped>

</style>