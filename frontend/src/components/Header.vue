<template>
<v-app>
    <v-container fluid class="header">
        <v-layout column>
            
            <v-layout column class="titlewrap">
                <v-flex><a href="#" class="title">생활코딩</a></v-flex>
                <v-flex><span class="subtitle">Coding Everybody</span></v-flex>
            </v-layout>
                
            <v-layout class="menuwrap inline">
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><a href="javascript:;" class="menu">WEB</a></v-flex>
                    </template>

                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <!-- <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">DATABASE</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">언어</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">클라이언트</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">서버</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">데이터 과학</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">개발도구</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">프로젝트 관리</a></v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex><a href="javascript:;" class="menu">기타</a></v-flex> -->
                </v-menu>
                <v-divider vertical></v-divider>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><a href="javascript:;" class="menu">DATABASE</a></v-flex>
                    </template>

                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-layout>
        </v-layout>
    </v-container>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>

<style>
.container .header{
    padding-top: 0px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
}

.header{
    height:200px; 
    background-color: #4D6C8A;
}
.titlewrap {
    padding-top: 70px;
    padding-bottom: 20px;
}
.titlewrap .title{
    color:#FFF;
    font-size: 29px;
    line-height: 29px;
    font-weight: bold;
}
.titlewrap .subtitle{
    color:#A2BFDA;
    font-size: 13px;
}

.menuwrap {
    display: -webkit-box;
    margin: 0 auto;
}
.menuwrap .menu{
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #dddddd;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
}

a{
    text-decoration:none; color:#333;
    font-family: 'Nanum Gothic', sans-serif;
    color: #FFF;
}

</style>
