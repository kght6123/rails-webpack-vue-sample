<template>
  <div id="app">
    <header-component msg="This is common header rendered by vue's single file components" />
    <router-link to="/">Page1</router-link> |
    <router-link to="/page2">Page2</router-link>
    <router-view />
    <footer-component msg="This is common footer rendered by vue's single file components" />
  </div>
</template>

<script>
import HeaderComponent from './packs/shared/components/header';
import FooterComponent from './packs/shared/components/footer';

export default {
  name: 'MyApp',
  props: {
    msg: String
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>