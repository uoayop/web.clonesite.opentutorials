<template>
    <v-app>
        <v-container class="breadcrumb">
            <v-breadcrumbs :items="itema">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <!-- <v-text> 생활음악 </v-text> -->
            <!-- <v-text items="directory" v-if= "directory === 'allnotice'"> 공지사항 > 전체 공지사항 </v-text> -->
       </v-container>
    </v-app>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return{
            itema:this.items,
            directory:((window.location.href).split('/'))[3]
        }
    },
    created(){
        console.log(this.props);
    }

}
</script>


<style>
.v-application--wrap {
    min-height: fit-content;
}

ul.v-breadcrumbs.theme--light {
    padding-top: 0px;
    padding-bottom: 0px;
}

li.v-breadcrumbs__divider {
    padding-right: 0px !important;
}

a.v-breadcrumbs__item{
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


