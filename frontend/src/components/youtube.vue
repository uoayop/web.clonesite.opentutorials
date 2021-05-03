<template>
  <v-app>
  <v-container class="mainwrapper">
    <v-layout column class="contentwrapper">
    <v-layout column class="content"> 
      <v-row class="text-center">
      <v-col>
        youtube test


      </v-col>
      </v-row>
      </v-layout>
    </v-layout>
    
  </v-container>
  </v-app>
</template>

<script>
    // var request=require('request');
    // var optionParams={
    //     q:"에드시런"+"new man",
    //     part:"snippet",
    //     key:"AIzaSyDRFi_b8CyHa0PlL5ViLS3Bcnt1uuWn_Ok",
    //     type:"video",
    //     maxResults:1,
    //     regionCode:"KR",
    //     videoDuration:"short"
    // };

    // //한글을 검색어로 전달하기 위해선 url encoding 필요!
    // optionParams.q=encodeURI(optionParams.q);

    // var url="https://www.googleapis.com/youtube/v3/search?";
    // for(var option in optionParams){
    //     url+=option+"="+optionParams[option]+"&";
    // }

    // //url의마지막에 붙어있는 & 정리
    // url=url.substr(0, url.length-1);

    // request(url, function(err, res, body){
    //     // console.log(body)
        
    //     //json형식을 서버로 부터 받음
    //     var data=JSON.parse(body).items;
    //     for(var content in data){
    //         console.log("data:",data)
    //         //youtube downloader에 videoId 넘기면 됨.
    //         console.log(data[content].snippet.title+" : "+data[content].id.videoId);
            
    //     }
    // });

  export default {
    data() {
      return{ 
     }
    },
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
}
</style>