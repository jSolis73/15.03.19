import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeProp() {
      this.$emit('chProp')
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
