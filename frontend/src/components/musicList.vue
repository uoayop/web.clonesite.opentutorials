<template>
<v-container class="mainwrapper">
    <v-layout column class="contentwrapper">
    <v-layout column class="content"> 
        <v-row class="text-center">
        <v-col>
            <v-card>
                <v-card-title>
                    PlayList 🎵
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
               
                <v-data-table
                :items-per-page=-1
                :headers="headers"
                :items="musics"
                :search="search"
                :footer-props="{ itemsPerPageOptions:[-1,10,20,30]}" >
                <template v-slot:item="{item}">
                 <tr  @click="fnView(item)" >
                    <td :class="headers[0].class">{{ item.TITLE }}</td>
                    <td :class="headers[1].class"> {{ item.SINGER }}</td>
                    <td :class="headers[2].class">{{ item.GENRE }}</td>
                    <td :class="headers[3].class">{{ item.Korea }}</td>
                </tr>
                </template>
                </v-data-table>
            </v-card>
        </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card  v-if="this.action==='edit'">
            <v-card-title>노래 수정하기</v-card-title>
            <v-card-text>
                <v-text-field v-model="title" label="제목"></v-text-field>
                <v-text-field v-model="singer" label="가수"></v-text-field>
              <small class="grey--text">* 위에 입력된 내용으로 노래가 수정됩니다.</small>
            </v-card-text>
            <v-card-text>
                <v-text-field v-model="genre" label="장르" ></v-text-field>
              <small class="grey--text">* 장르 : 1(pop), 2(힙합), 3(인디), 4(발라드)</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog = false, btnClicked()">수정</v-btn>
            </v-card-actions>
          </v-card>

          <v-card v-else>
            <v-card-title>이 노래를 삭제하시겠어요?</v-card-title>
            <v-card-text>🎵 {{this.title}} - {{this.singer}} 🎵</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog = false, btnClicked()">삭제</v-btn>
              <v-btn text color="default" @click="dialog = false"> 취소</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    props:['link'],
    data () {
      return {
        action:this.link,
        dialog: false,
        search: '',
        title:'',
        singer:'',
        vId:0,
        genre:0,
        headers: [
        {
            text: '노래 제목',
            align: 'start',
            sortable: false,
            value: 'TITLE',
        },
        { text: '가수', value: 'SINGER' },
        { text: '장르', value: 'GENRE' },
        { text: '국내', value: 'Korea' },
        ],
        musics: [],
      }
    },
    created(){
        axios.get('http://localhost:8080/api/musics/Korea')
          .then((response) => {
            this.musics = response.data;
            console.log(response.data);
          })
    },
    methods:{
        fnView: function(item){
            this.vId=item.ID;
            this.title=item.TITLE;
            this.singer=item.SINGER;
            this.genre=item.GENRE;
            this.dialog = !this.dialog;
        },
        btnClicked: function(){
            if (this.action === 'edit'){
              try{
              // console.log("[result] title: ",title, "vid:",this.vId);
                axios.put('http://localhost:8080/api/musics/EditMusic/'+this.vId,
                {
                  "TITLE": this.title,  
                  "GENRE": this.genre,
                  "SINGER": this.singer,
                });
              }catch(err){
                console.log(err);
              }
            }
            else{
                try{
              // console.log("[result] title: ",title, "vid:",this.vId);
                axios.delete('http://localhost:8080/api/musics/DeleteMusic/'+this.vId);
              }catch(err){
                console.log(err);
              }
            }

            location.reload();
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
        padding-top: 80px;
        padding-bottom: 140px;
        border-left: solid 1px #DDDDDD;
        border-right: solid 1px #DDDDDD;
        height: 100%;
        align-content: center;
        justify-content: center;
        padding: 20px 20px;
    }
</style>