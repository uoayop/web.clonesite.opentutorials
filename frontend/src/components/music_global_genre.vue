<template>
  <v-app>
  <v-container class="mainwrapper">
    <v-layout column class="contentwrapper">
    <v-layout column class="content"> 
      <v-row class="text-center ml-3 mr-3">
      <v-col
        v-for="music in musics"
        :key="music.vid"
        cols="auto" md="4" sm="6" xs="12">
        <v-card class="rounded-card pt-4 pb-4 ml-0 mr-0">
          <iframe width="330px" height="200px" :src="music.URL" frameborder="0"></iframe>
        </v-card>
      </v-col>
      </v-row>
      </v-layout>
    </v-layout>
    
  </v-container>
  </v-app>
</template>

<script>
    import axios from 'axios';
    
    export default {
      props:['gen'],
      created() {
        console.log("[gen]",this.gen);
        axios.get('http://localhost:8080/api/musics/Global/'+this.gen)
        .then((response) => {
          console.log(response);
          this.musics = response.data;
          console.log("musics:",response.data);
        })
      },
      data() {
          return{ 
              musics: [],
              genre: this.gen,
          }
      },
      watch:{
        $route(){
           axios.get('http://localhost:8080/api/musics/Global/'+this.gen)
          .then((response) => {
            this.musics = response.data;
          })
        }
      }
  }
</script>

<style>

.mainwrapper{
  padding: 0 0;
  height: 100%;
}

.contentwrapper{
  padding-left: 50px;
  padding-right: 50px;
  align-content: center;
  border: solid 1px #DDDDDD;
  height: 100%;
}

.content{
  padding-top: 50px;
  padding-bottom: 140px;
  border-left: solid 1px #DDDDDD;
  border-right: solid 1px #DDDDDD;
  height: 100%;
}

.rounded-card{
  border-radius: 30px;
  overflow:hidden;
}
</style>