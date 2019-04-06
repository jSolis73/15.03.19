<template>
  <div class="border border-dark align-top">
    <button type = "button" class="btn btn-primary " @click = "component = 'cardsApp'">Млечный путь</button>
    <button type = "button" class="btn btn-success" @click = "component = 'cards2App'">Галактика Андромеды</button>
    <button type = "button" class="btn btn-info" @click = "component = 'authApp'">Автор работ</button>
    <component :is = "component"></component>
  </div>
  
</template>

<script>
import Cards from './components/cards.vue'
import Cards2 from './components/cards2.vue'
import Author from './components/author.vue'
export default {
  data(){
    return {
      component: 'cardsApp'
    }
  },
  components: {
    'cardsApp': Cards,
    'cards2App': Cards2,
    'authApp': Author
  }
}
</script>

<style>
</style>
