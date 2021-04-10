<template>
  <div class="table-content">
    <Header></Header>
    <Bread :items='items'></Bread>
    
    <div class="fill-item"><MAIN></MAIN></div>
  </div>
</template>

<script>
    import Header from '../components/common/Header.vue';
    import Bread from '../components/common/breadcrumb.vue';
    import MAIN from '../components/main.vue';
    export default {
      data() {
        return {
          items: [
            {
            text:'생활음악',
            disabled: true,
            href:'/',
          },
        ]}},
        components: { 
            Header,   
            Bread,
            MAIN,
            },
    };
</script>

<style>
    html,body{padding:0; margin:0;}
    .table-content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:0; padding:0;
    max-height: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .item {
    flex: 1;
  }
</style>