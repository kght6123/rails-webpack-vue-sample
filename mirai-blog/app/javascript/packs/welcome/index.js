/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import Vuex from 'vuex'; // ADD
import VueRouter from 'vue-router'; // ADD
import Vuetify from 'vuetify'; // ADD
import store from './store'; // ADD
import router from './router'; // ADD
import main from './main'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

// SPAでは無いため、毎回、ロードする必要がある
//document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    store: new Vuex.Store(store),
    router,
    render: h => h(main)
  })
  console.log(app)
//})

// = require jquery3
// = require popper
// = require bootstrap-sprockets

// require('codemirror/lib/codemirror.css'); // codemirror
// require('tui-editor/dist/tui-editor.css'); // editor ui
// require('tui-editor/dist/tui-editor-contents.css'); // editor content
// require('highlight.js/styles/github.css'); // code block highlight

require('vuetify/dist/vuetify.min.css');

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
