<template>
<v-app>
    <v-container fluid>
        <v-btn
            absolute
            dark
            fab
            top
            right
            color="indigo lighten-1"
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
                <v-text-field v-model="genre" label="장르" ></v-text-field>
              <small class="grey--text">* 국내 장르 : 1(pop), 2(힙합), 3(인디), 4(발라드)</small><br/>
              <small class="grey--text">* 해외 장르 : 1(pop), 2(힙합), 3(락)</small>
            </v-card-text>
            <v-card-text>
                <v-radio-group v-model="nation" row>
                    <v-radio label="국내" value="0"></v-radio>  
                    <v-radio label="해외" value="1"></v-radio>  
                </v-radio-group>   
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text color="primary" @click="dialog = false, btnClicked()">추가하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar"  :timeout="timeout"  rounded="pill">
           {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" >
                Close
              </v-btn>
            </template>
    </v-snackbar>
  </v-container>
</v-app>
</template>

<script>
  import axios from 'axios';
  // var request = require('request');


  export default {
    props:['AddFrom'],
    data () {
      return {
        dialog: false,
        title:'',
        singer:'',
        genre: '',
        vId:'',
        nation:0,
        snackbar: false,
        text: `노래가 추가 됐어요!`,
        timeout: 3000,
      }
    },
    methods:{
      btnClicked: function(){
        var title = ""+this.title;
        var singer = ""+this.singer;
        var genre = this.genre;
        var nation = this.nation;

        var request=require('request');
        var optionParams={
            q:title+" "+singer,
            part:"snippet",
            key:"AIzaSyDRFi_b8CyHa0PlL5ViLS3Bcnt1uuWn_Ok",
            type:"video",
            maxResults:1,
            regionCode:"KR",
            videoDuration:"short"
        };

        //한글을 검색어로 전달하기 위해선 url encoding 필요!
        optionParams.q=encodeURI(optionParams.q);

        var url="https://www.googleapis.com/youtube/v3/search?";
        for(var option in optionParams){
            url+=option+"="+optionParams[option]+"&";
        }

        //url의마지막에 붙어있는 & 정리
        url=url.substr(0, url.length-1);

        
        request(url, function(err, res, body){
          //json형식을 서버로 부터 받음
          var data=JSON.parse(body).items;
          this.vId = data[0].id.videoId;  
          try{
            // console.log("[result] title: ",title, "vid:",this.vId);
            axios.post('http://localhost:8080/api/musics/AddMusic',
            {
              "TITLE": title,  
              "URL": "https://www.youtube-nocookie.com/embed/" + this.vId,
              "GENRE": genre,
              "SINGER": singer,
              "Korea": nation,
            });
          }catch(err){
            console.log(err);
          }
        })

        setTimeout(()=>{
          this.$router.push({path:this.AddFrom +"/"+ genre}).catch(()=>{
            location.reload();
          });
        },1000);
        this.snackbar = true;
      } 
    },
    created(){
      console.log("AddFrom:",this.AddFrom);
    }
  }
</script>