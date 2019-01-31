import VueRouter from 'vue-router';
import Page1 from './pages/page1.vue'
import Page2 from './pages/page2.vue'
// import Page3 from './pages/page3.vue'
// import Page4 from './pages/page4.vue'
import Page5 from './pages/page5.vue'

const routes = [
  {path: '/', component: Page1},
  {path: '/page2', component: Page2},
  // {path: '/page3', component: Page3},
  // {path: '/page4', component: Page4},
  {path: '/page5', component: Page5},
];

export default new VueRouter({ routes });