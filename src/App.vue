<template>
  <div >
    <progress-bar :arrayCards = "arrayCards"></progress-bar>
    <add-card :arrayCards = "arrayCards"></add-card>
    <displayCards :arrayCards = "arrayCards"></displayCards> 
  </div>
  
</template>

<script>
import AddCard from './components/addCard.vue'
import DisplayCards from './components/displayCards.vue'
import ProgressBar from './components/progressBar.vue'
export default {
  data() {
    return {
      arrayCards: []
    }
  },
  
  components: {
    'addCard': AddCard,
    'displayCards': DisplayCards,
    'progressBar': ProgressBar
  }
}
</script>


