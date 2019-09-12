<template>
    <div class="menu-list">
        <nav>
            <ul>
                <li class="submenu-list" v-for="(item, index) in menuList" :key="index">
                    <p>{{item.name}}</p>
                    <ul>
                        <li class="grandmenu-list" v-for="(child, i) in item.children" :key="i">
                            {{child.name}}
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        computed: {
            menuList() {
                return [
                    {
                        name: 'Все разделы',
                        children: [
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                            {
                                name: 'Bags, Shells & Sleeves'
                            },
                            {
                                name: 'Business & Security'
                            },
                            {
                                name: 'Cables & Docks'
                            },
                            {
                                name: 'Cameras & Video'
                            },
                            {
                                name: 'Car & Travel'
                            },
                            {
                                name: 'Cases & Films'
                            },
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                            {
                                name: 'Bags, Shells & Sleeves'
                            },
                            {
                                name: 'Business & Security'
                            },
                            {
                                name: 'Cables & Docks'
                            },
                            {
                                name: 'Cameras & Video'
                            },
                            {
                                name: 'Car & Travel'
                            },
                            {
                                name: 'Cases & Films'
                            },
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                            {
                                name: 'Bags, Shells & Sleeves'
                            },
                        ]
                    },
                    {
                        name: 'Все разделы',
                        children: [
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                            {
                                name: 'Bags, Shells & Sleeves'
                            },
                            {
                                name: 'Business & Security'
                            },
                            {
                                name: 'Cables & Docks'
                            },
                            {
                                name: 'Cameras & Video'
                            },
                            {
                                name: 'Car & Travel'
                            },
                            {
                                name: 'Cases & Films'
                            },
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                        ]
                    },
                    {
                        name: 'Все разделы',
                        children: [
                                                        {
                                name: 'Bags, Shells & Sleeves'
                            },
                            {
                                name: 'Business & Security'
                            },
                            {
                                name: 'Cables & Docks'
                            },
                            {
                                name: 'Cameras & Video'
                            },
                            {
                                name: 'Car & Travel'
                            },
                            {
                                name: 'Cases & Films'
                            },
                            {
                                name: 'AirPort & Wireless'
                            },
                            {
                                name: 'AppleCare'
                            },
                            {
                                name: 'Bags, Shells & Sleeves'
                            },
                        ]
                    },
                    {
                        name: 'Все разделы',
                    },
                    {
                        name: 'Все разделы',
                    },
                    {
                        name: 'Все разделы',
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>