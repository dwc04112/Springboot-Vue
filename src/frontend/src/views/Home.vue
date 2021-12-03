<template>
  <!--
  <v-container fluid >
    <v-card style="width: 30%">
      <v-text-field v-model="b1" label="1 or 2"></v-text-field>
      <v-btn outlined @click="button">Click</v-btn>
      <p>{{a}}</p>
      <p></p>
    </v-card>
        <v-layout>
      <v-flex sm2>
        <v-card color="#3333">
          <p v-for="user in users" :key="user.id">{{user.id}}</p>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card>
          <p v-for="user in users" :key="user.id">{{user.subject}}</p>
        </v-card>
      </v-flex>
      <v-flex sm2>
        <v-card>
          <p v-for="user in users" :key="user.id">{{user.author}}</p>
        </v-card>
      </v-flex>
      <v-flex sm2>
        <v-card>
          <p v-for="user in users" :key="user.id">{{user.writeDate}}</p>
        </v-card>
      </v-flex>
      <v-flex sm2>
        <v-card>
          <p v-for="user in users" :key="user.id">{{user.readCount}}</p>
        </v-card>
      </v-flex>
    </v-layout>
   </v-container>
    -->

<v-container grid-list-md>
  <div>
    <router-link to="/board">board</router-link>
  </div>
  <v-text-field v-model="search" label="검색창" single-line></v-text-field>
  <v-layout row wrap>
    <v-flex xs12>
      <v-data-table
          :headers="headers"
          :items="users"
          :loading="loading"
          :items-per-page="5"
          :search="search"
          >
        <!--
        @click:row="inView()"
        <template slot="items" slot-scope="props">
          <td :class="headers[0].class">{{props.item.id}}</td>
          <td :class="headers[1].class">{{ props.item.subject }}</td>
          <td :class="headers[2].class">{{ props.item.author }}</td>
          <td :class="headers[3].class">{{ props.item.writeDate }}</td>
          <td :class="headers[4].class">{{ props.item.readCount }}</td>
        </template>
        -->
        <template v-slot:item="{ item }">
          <tr @click="inView(item.id)">
            <td :class="headers[0].class">{{item.id}}</td>
            <td :class="headers[1].class">{{ item.subject }}</td>
            <td :class="headers[2].class">{{item.author }}</td>
            <td :class="headers[3].class">{{item.writeDate }}</td>
            <td :class="headers[4].class">{{item.readCount }}</td>
          </tr>
        </template>

      </v-data-table>
    </v-flex>
  </v-layout>

</v-container>

</template>

<script>
import board from "@/views/board";
export default {
  name: 'App',
  data: () => ({
    b1: '',
    users:[],
    a: '',
    subject: 'hi',
    loading: false,
    search: '',
    headers: [
      { text: '번호', value: 'id', sortable: true},
      { text: '제목', value: 'subject', sortable: true },
      { text: '글쓴이', value: 'author', sortable: false },
      { text: '등록일', value: 'writeDate', sortable: true ,filterable:false},
      { text: '조회', value: 'readCount', sortable: true ,filterable:false}
    ],
  }),
  components:{
    // eslint-disable-next-line vue/no-unused-components
    board
  },

  methods: {
    button () {
      this.$axios.get('board/example', { params: { tEst: this.b1 } }).then(result => {
        console.log(result.data)
        this.a = result.data
      });
    },
    retrieveUsers(){
      this.$axios.get("board/list")
          .then(response=>{
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e=>{
            console.log(e);
          })
    },
    inView(id){

      this.$router.push({path:'./board',query: {id}});
    },
  },
  mounted(){
    this.retrieveUsers();
  }
}
</script>

<style>
.tbList th{border-top:1px solid #888;}
.tbList th, .tbList td{border-bottom:1px solid #eee; padding:5px 0;}
.tbList td.txt_left{text-align:left;}
</style>