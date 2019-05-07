import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'

Vue.use (moment)
new Vue({
  el: '#app',
  render: h => h(App)
})
