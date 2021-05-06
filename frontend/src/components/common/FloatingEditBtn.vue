<template>
<v-app>
    <v-container fluid>
        <v-speed-dial
            v-model="fab"
            absolute
            dark
            fab
            top
            right
            direction="left"
            :open-on-hover = true
            transition="slide-y-reverse-transition"
            >
            <template v-slot:activator>
                <v-btn
                v-model="fab"
                color="indigo darken-4"
                dark
                fab
                >
                <v-icon v-if="fab">
                    mdi-close
                </v-icon>
                <v-icon v-else>
                    mdi-dots-horizontal
                </v-icon>
                </v-btn>
            </template>
            <v-btn
                fab
                dark
                small
                color="teal darken-2"
                @click="PageLink('/edit')"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="pink darken-2"
                @click="PageLink('/delete')"
            >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-container>
</v-app>
</template>

<script>
  export default {
    props:['AddFrom'],
    data () {
      return {
        dialog: false,
        title:'',
        singer:'',
        genre: '',
        vId:'',
        fab: false,
        tabs: null,
      }
    },
    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
    methods:{
        PageLink(link){
            this.$router.push({path:'/setting'+link, props:{AddFrom:this.AddFrom}});
        },
    }
  }
</script>