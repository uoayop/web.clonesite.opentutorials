<template>
  <div class="table-content">
    <Header></Header>
    <Bread :items='items'></Bread>
    <div class="fill-item"><CONTENT></CONTENT></div>
  </div>
</template>

<script>
    import Header from '../components/common/Header.vue';
    import Bread from '../components/common/breadcrumb.vue';
    import CONTENT from '../components/music_korea_genre.vue';
    
    export default {
      props:['genre'],
      data() {
        return {
          p: this.genre,
          items: [
            {
            text:'생활음악',
            disabled: true,
            href:'/',
          },
          {
            text:'국내',
            disabled: true,
            href:'/Korea',
          },
          {
            text:this.genre,
            disabled: true,
            href:'/Korea/Genre',
          },
        ],
        }},
        components: { 
            Header,   
            Bread,
            CONTENT,
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