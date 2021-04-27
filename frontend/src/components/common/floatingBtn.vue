<template>
<v-app>
    <v-container fluid>
        <v-btn
            absolute
            dark
            fab
            top
            right
            color="purple"
            @click="dialog = !dialog" >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>노래 추가하기🎵</v-card-title>
            <v-card-text>
                <v-text-field v-model="title" label="제목"></v-text-field>
                <v-text-field v-model="singer" label="가수"></v-text-field>
              <small class="grey--text">* 위의 조건으로 검색 후, 가장 상위에 있는 영상이 추가됩니다.</small>
            </v-card-text>
            <v-card-text>
                <v-text-field v-model="url" label="URL 주소" ></v-text-field>
                <v-text-field v-model="genre" label="장르" ></v-text-field>
              <small class="grey--text">* 장르 : 1(pop), 2(힙합), 3(인디), 4(발라드)</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text color="primary" @click="dialog = false, btnClicked()">추가하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </v-container>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        title:'',
        singer:'',
        url: '',
        genre: '',
      }
    },
    methods:{
      btnClicked: function(){
        this.$http.post('/api/musics/AddMusic',
        {
          "title": this.title,  
          "url": this.url,
          "genre": this.genre,
          "singer": this.singer
        })
        .then((response) => {
          this.musics = response.data;
          console.log(response.data);
        })
        this.$router.push({path:'/Korea'}).catch(()=>{});
      } 
    }
  }
</script>