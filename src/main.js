import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeProp() {
      eventBus.$emit('chProp', this.age)
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
