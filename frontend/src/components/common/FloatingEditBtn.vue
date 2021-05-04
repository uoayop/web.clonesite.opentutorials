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
        <!-- <v-btn
            absolute
            dark
            fab
            top
            right
            class="mt-10"
            color="indigo darken-2"
            @click="dialog = !dialog" >
            <v-icon>mdi-dots-horizontal</v-icon>
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
              <small class="grey--text">* 장르 : 1(pop), 2(힙합), 3(인디), 4(발라드)</small>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text color="primary" @click="dialog = false, btnClicked()">추가하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->

  </v-container>
</v-app>
</template>

<script>
  export default {
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
            this.$router.push({path:'/setting'+link, props:{act:link}});
        },
    }
  }
</script>