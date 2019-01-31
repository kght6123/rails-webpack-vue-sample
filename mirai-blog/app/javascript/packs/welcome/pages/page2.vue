<template>
<div class="page2 footer">
  <h1>{{ msg }}</h1>
  <div class="message">
    <h3>app/javascript/packs/assetsのロゴ</h3>
    <img class="img" src="../../assets/intellij-idea_logos.png" /><br>
    これはページ2(Bootstrap4)です。<br>
    <h3>app/assets/images/のねこ</h3>
    <div class="cat_image"></div><br>
    この中にスタイルをまとめて書いてね<br>
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
  <router-link to="/">前のページへ</router-link>
</div>
</template>

<script>
export default {
  name: 'global_footer',
  props: {
    msg: "ページ2"
  }
}
</script>

<style scoped lang="scss">
// @import 'bootstrap-honoka/dist/css/bootstrap.min.css';

.footer{
  background: aliceblue;
}
.message{
  margin: 0.2em;
  margin: 1em;
  padding: 1em;
  background: #EFEFEF;
  border: solid darkred;
}

.img {
  /*background-image: image-url('../../assets/intellij-idea_logos.png');*/
  width: 2em;
}
.cat_image {
  background-image: image-url('/kotlin-logo.png');
}
</style>