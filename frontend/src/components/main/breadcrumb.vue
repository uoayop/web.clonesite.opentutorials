<template>
    <v-app>
        <v-container class="breadcrumb">
            <v-text> 생활코딩 </v-text>
            <!-- <v-text items="directory" v-if= "directory === 'allnotice'"> 공지사항 > 전체 공지사항 </v-text> -->
       </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return{
            directory:((window.location.href).split('/'))[3]
        }
    },
    created(){
        console.log(window.location.href);
    }

}
</script>


<style>
.v-application--wrap {
    min-height: fit-content;
}

.breadcrumb v-text{
    float: left;
    color: #999999;
    font-size: 13px;
    padding-left: 15px;
}

div.breadcrumb{
    background-color: #EEEEEE;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.container {
    max-width: 100%;
}

</style>


