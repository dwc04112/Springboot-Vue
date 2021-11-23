<template>
  <v-container fluid >
    <v-card style="width: 30%">
      <v-text-field v-model="b1" label="1 or 2"></v-text-field>
      <v-btn outlined @click="button">Click</v-btn>
      <p>{{a}}</p>
      <p></p>
    </v-card>

    <v-card style="width: 30%">
      <v-text-field label="list content"></v-text-field>
      <h3 v-for="user in users" :key="user.id">{{user.content}}</h3>
    </v-card>


    <v-layout>
      <v-flex sm2>
        <v-card color="#3333">
          <p>제목</p>
          <p>{{subject}}</p>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card>
          <p>내용</p>
          <p>{{subject}}</p>
        </v-card>
      </v-flex>
      <v-flex sm2>
        <v-card>
          <p>작성자</p>
          <p>{{subject}}</p>
        </v-card>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    b1: '',
    users:[],
    a: [],
    subject: 'hi',
  }),


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
    }
  },
  mounted(){
    this.retrieveUsers();
  }


}
</script>