<template>
  <div class="container" >
    <cards-app>
      <h2 class="row align-items-start">{{title}}</h2>
      <p class="row align-items-center">{{description}}</p>
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

<style scoped>
 
</style>
