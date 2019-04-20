import Vue from 'vue'
import App from './App.vue'
import formFields from './components/formFields.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.component ('form-field', formFields)
new Vue({
  el: '#app',
  render: h => h(App)
})
