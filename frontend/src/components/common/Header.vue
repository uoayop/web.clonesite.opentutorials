<template>
<v-app>
    <v-container fluid class="header">
        <v-layout column>
            
            <router-link to="/">
            <v-layout column class="titlewrap">
                    <span class="maintitle">생활음악</span>
                    <span class="subtitle">Music Everywhere</span>
                
            </v-layout>
            </router-link>
            
            <v-layout class="menuwrap inline">
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><router-link to="/Korea" class="menu">국내</router-link></v-flex>
                    </template>

                    <v-list dense>
                        <v-list-item-group 
                            v-model="selectedItem"
                            color="primary">
                            <v-list-item
                            v-for="(item, index) in items[0]"
                            :key="index"
                            :to="{path:'/Korea/'+item.genre, params: { genre: item.genre }}"
                            >

                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-divider vertical></v-divider>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><router-link to="/Global" class="menu">해외</router-link></v-flex>
                    </template>

                    <v-list dense>
                        <v-list-item-group 
                            v-model="selectedItem"
                            color="primary">
                            <v-list-item 
                            v-for="(item, index) in items[1]" 
                            :key="index"
                            :to="{path:'/Global/'+item.genre, params: { genre: item.genre }}">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
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
      selectedItem: -1,
      items: [
      [
        { title: 'POP', genre: '1' },
        { title: '힙합', genre: '2' },
        { title: '인디', genre: '3' },
        { title: '발라드', genre: '4' },
     ],
     [
        { title: 'POP', genre: '1' },
        { title: '힙합', genre: '2' },
        { title: '락', genre: '3' },
     ]
    ]
    }),
  }
</script>

<style>
.v-application--wrap{
    min-height: fit-content;
}

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
.titlewrap .maintitle{
    color:#FFF;
    font-size: 30px;
    line-height: 30px;
}
.titlewrap .subtitle{
    color:#A2BFDA;
    font-size: 15px;
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

.menuable__content__active{
    margin-top: 30px;
}

.v-list-item__title {
    /* display: contents; */
    /* font-size: 15px; */
    color: #858585;
}

.v-list-item{
    min-height: 30px;
    padding: 0 25px;
}

</style>
