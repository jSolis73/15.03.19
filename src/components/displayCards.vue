<template>
    <div class="container">
        <div class="row">
            <div class = "col-3 border border-success" v-for = "card in arrayCards" :key = "card.id"  @click = "removeCard">
                {{card.title}} <br> {{card.text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['arrayCards'],
    methods: {
        removeCard() {
            return event.target.remove()
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



