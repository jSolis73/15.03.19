import Vue from 'vue'
import App from './App.vue'
import ChangeStr from './task12/12'
import ChangeSt from './task12/12-1'

Vue.component('firstComp', ChangeStr)
Vue.component('secondComp', ChangeSt)
new Vue({
  el: '#app',
  render: h => h(App)
})
