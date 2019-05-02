import Vue from 'vue'
import App from './App.vue'
import Color from './directives/color'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.directive ('color', Color)
new Vue({
  el: '#app',
  render: h => h(App)
})
