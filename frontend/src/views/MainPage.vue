<template>
  <div class="app">
    <Header></Header>
    <MAIN></MAIN>
  </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import MAIN from '../components/HelloWorld.vue';
    export default {
    components: { 
        Header,
        MAIN,
        },
    };
</script>

<style>
    html,body{padding:0; margin:0;}
    .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:0; padding:0;
    }
</style>