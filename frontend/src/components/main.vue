<template>
  <v-app>
  <v-container class="mainwrapper">
    <v-layout column class="contentwrapper">
    <v-layout column class="content"> 
      <v-row class="text-center">
      <v-col>
        <v-img
          :src="require('../assets/helloworld.png')"
          class="my-3"
          contain
          height="150"
        />
        <div id="article">
          <p v-html="getarticle"></p>
        </div>
        <v-img
          :src="require('../assets/MusicIsMyLife.jpeg')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>
      </v-row>
      </v-layout>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
  import unified from "unified";
  import markdown from "remark-parse";
  import remark2rehype from "remark-rehype";
  import html from "rehype-stringify";
  
  const mdText = `

Hello, **Stranger!**

Please like my taste in music :)

&nbsp;

# 🎵
ጿ ኈ ቼ 데 ዽ ጿ ኈ 굴 ቼ ዽ ጿ 데 ኈ ቼ ዽ 굴 ጿ ኈ ቼ 
`
  console.log(mdText)
  const html_text = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(mdText);
    
  export default {
    data() {
      return{ 
      getarticle: html_text
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