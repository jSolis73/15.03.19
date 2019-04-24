<template>
    <div class="container">
        <div class="row">
            <div class = "col-3 border border-success" v-for = "(card, index) in this.arrayCards" :key = "card.id"  @click = "removeCard(index)">
                {{card.title}} <br> {{card.text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['arrayCards'],
    methods: {
        removeCard(index) {
            return this.arrayCards.splice(index, 1)
        }
    }
}
</script>

<style>
  .col-3:hover {
      background-color: rgb(248, 86, 86);
      transition-duration: 1.5s; 
  }  
  .col-3:not(:hover) {
      transition-duration: 1.5s;
  }
</style>



