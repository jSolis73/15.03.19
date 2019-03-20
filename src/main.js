import Vue from 'vue'
import App from './App.vue'
import Header from './header/header.vue'
import Content from './content/content.vue'
import Footer from './footer/footer.vue'

Vue.component('main-header', Header);
Vue.component('main-content', Content);
Vue.component('main-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
