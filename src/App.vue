<template>
  <div class = "table table-dark">
    <cards-app>
      <h2 slot= "title">{{title}}</h2>
      <p slot = "description">{{description}}</p>
    </cards-app>
  </div>
  
</template>

<script>
import Cards from './components/cards.vue'
export default {
  data(){
    return {
      title: 'Солнечная система',
      description: ' планетная система, включающая в себя центральную звезду — Солнце — и все естественные космические объекты, вращающиеся вокруг Солнца.'
    }
  },
  components: {'cardsApp': Cards }
}
</script>

<style>
</style>
