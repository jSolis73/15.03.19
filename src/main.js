import Vue from 'vue'
import App from './App.vue'
import Comp1 from './task13/13.vue'
import SomeNumb from './task13/13-1.vue'

Vue.component('first-comp', Comp1)

new Vue({
  el: '#app',
  render: h => h(App),
  components: {'second-Comp': SomeNumb}
})

