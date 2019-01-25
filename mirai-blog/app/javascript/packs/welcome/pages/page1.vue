<template>
<div class="page1">
  <h1>{{ msg }}</h1>
  <div class="message">
  <p class="page1_message_inner">これはページ1です。</p><br>
  ここが他のページに入れ替わります。<br>
  この中はふつーのHTMLで記載できます。<br>
  スタイルシートのスコープなんてきにしなくてへいき。<br>
  </div>
  <!-- bootstrap4 -->
  <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.</p>
    <hr class="my-2">
    <p>It uses utility classes for typography and
      spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#!" role="button">Some action</a>
    </p>
  </div>
  <!-- Vuetify -->
  <v-app>
    <p>{{ msg }}</p>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
  </v-app>
  <router-link to="/page2">次のページへ</router-link>
</div>
</template>

<script>
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
  }
}
</script>

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