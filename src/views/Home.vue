<template>
  <div class="home">
    <app-banner></app-banner>
    <div class="wrapper">
        <p class="trust-text">Нам доверяют:</p>
    </div>
    <app-trust></app-trust>
    <div class="wrapper">
      <app-products :cat_id="1" :onceClick="true" :productsName="'Самые продаваемые'"></app-products>
    </div>
    <app-quality></app-quality>
    <div class="wrapper">
      <app-products :productsName="'Камера'"></app-products>
      <app-products :cat_id="6" :productsName="'Умный дом'"></app-products>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
  import AppBanner from '@/components/banner/index'
  import AppTrust from '@/components/trust/index'
  import AppQuality from '@/components/trust/quality'
  import AppProducts from '@/components/products/index'
  export default {
    name: 'home',
    components: {
      AppBanner,
      AppTrust,
      AppProducts,
      AppQuality
    },
  }
</script>
