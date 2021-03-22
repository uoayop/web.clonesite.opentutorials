<template>
<v-app>
    <v-container fluid class="header">
        <v-layout column>
            
            <v-layout column class="titlewrap">
                <span class="maintitle">생활코딩</span>
                <span class="subtitle">Coding Everybody</span>
            </v-layout>
                
            <v-layout class="menuwrap inline">
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><a href="javascript:;" class="menu">WEB</a></v-flex>
                    </template>

                    <v-list dense>
                        <v-list-item-group 
                        v-model="selectedItem"
                        color="primary">
                            <v-list-item
                            v-for="(item, index) in items[0]"
                            :key="index"
                            >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-divider vertical></v-divider>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-flex v-bind="attrs" v-on="on"><a href="javascript:;" class="menu">언어</a></v-flex>
                    </template>

                    <v-list dense>
                        <v-list-item-group 
                        v-model="selectedItem"
                        color="primary">
                        
                            <v-list-item v-for="(item, index) in items[1]" :key="index"  >
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
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'Javascript' },
        { title: 'Vue' },
     ],
     [
        { title: 'Python' },
        { title: 'Java' },
        { title: 'Javascript' },
        { title: 'PHP' },
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
