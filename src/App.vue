<template>
  <div id="app">
    <Header @open="openDialog"/>
    <router-view></router-view>
    <Footer/>
    <AdressForm ref="form"/>
  </div>
</template>

<script>
import Header from './layout/Header';
import Footer from './layout/Footer';
import AdressForm from './components/AdressForm';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    AdressForm
  },
  methods: {
    openDialog() {
      this.$refs.form.dialogFormVisible = true;
    }
  }
}
</script>

<style>
body, html, #app {
  height: 100%;
}
</style>
