<template>
<div class="page1">
  <h1>{{ msg }}</h1>
  <div class="message">
    <p class="page1_message_inner">これはページ1(vuetify)です。</p><br>
    ここが他のページに入れ替わります。<br>
    この中はふつーのHTMLで記載できます。<br>
    スタイルシートのスコープなんてきにしなくてへいき。<br>
  </div>
  <!-- Vuetify -->
  <v-app dark>
    <p>{{ msg }}</p>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
    <v-container fluid px-0>
      <v-checkbox
        :label="`Checkbox 1: ${checkbox.toString()}`"
        v-model="checkbox"
      ></v-checkbox>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
      <v-switch
        :label="`Switch 1: ${switch1.toString()}`"
        v-model="switch1"
      ></v-switch>
    </v-container>
  </v-app>
  <router-link to="/page2">次のページへ</router-link>
</div>
</template>

<script>
//require('vuetify/dist/vuetify.min.css');

export default {
  name: 'global_footer',
  props: {
    msg: "ページ1"
  },
  methods: {
    testAJAX(id){
      axios.get(`api/books/${id}.json`)
        .then(res => {
          this.bookInfo = res.data;
          this.bookInfoBool = true;
        });
    }
  },
  data () {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true
    }
  }
}
</script>

<!--style scoped src="vuetify/dist/vuetify.min.css"></style-->
<style scoped lang="scss">
.page1{
  .message{
    margin: 1em;
    padding: 1em;
    background: #EFEFEF;
    border: solid darkblue;
  }
}

$color-red1: #730E15;
.page1{
  &_message{
    &_inner{
      color: $color-red1;
    }
  }
}
</style>