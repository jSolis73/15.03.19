import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  el: '#app',
  methods: {
    changeProp() {
      eventBus.$emit('chProp', this.age)
    }
  }
})
export let cP = eventBus.changeProp
new Vue({
  el: '#app',
  render: h => h(App)
})
