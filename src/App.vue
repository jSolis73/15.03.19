<template>
  <div >
    <add-card></add-card>
  </div>
  
</template>

<script>
import AddCard from './components/addCard.vue'
import DisplayCards from './components/displayCards.vue'
export default {
  components: {
    'addCard': AddCard,
    'displayCards': DisplayCards
  }
}
</script>

<style>
</style>
