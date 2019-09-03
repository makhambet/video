<template>
  <div id="app">
    <app-header></app-header>
    <transition>
      <div class="main-body">
        <router-view/>
      </div>
    </transition>
    <app-footer></app-footer>
  </div>
</template>



<script>
  import AppHeader from '@/components/header/index.vue'
  import AppFooter from '@/components/footer/index.vue'
  export default {
    components: {
      AppHeader,
      AppFooter
    },
  }
</script>
<style>

</style>
