<template>
  <v-app>
  <v-container class="mainwrapper">
    <v-layout column class="contentwrapper">
    <v-layout column class="content"> 
      <v-row class="text-center ml-3 mr-3">
      <v-col
        v-for="item in items"
        :key="item.vid"
        cols="12"
        md="4"
        sm="6"
        xs="12">
        <v-card
          class="rounded-card pt-4 pb-4 ml-0 mr-0"
        >
        <iframe width="330px" height="200px" :src="item.link" frameborder="0"></iframe>
          
        </v-card>
      </v-col>
      </v-row>
      </v-layout>
    </v-layout>
    
  </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return{ 
        items:[
          {
            vid: 1,
            link:"https://www.youtube.com/embed/YAR7-5gldDw"
          },
          {
            vid: 2,
            link:"https://www.youtube.com/embed/v7bnOxV4jAc"
          },
          {
            vid: 3,
            link:"https://www.youtube.com/embed/qrjk4lfdh7Q"
          },
          {
            vid: 4,
            link:"https://www.youtube.com/embed/nrDF8PcEx6E"
          },
          {
            vid: 5,
            link:"https://www.youtube.com/embed/QU2iwtLsd68"
          },
          {
            vid: 6,
            link:"https://www.youtube.com/embed/mScwe2jDWow"
          },
        ]
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