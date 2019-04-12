<template>
    <div class="container">
        <div class="row">
            <div class = "col-3 border border-success" v-for = "card in arrayCards" @click = "removeCard">
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
      background-color: red 
  }  
</style>
>

</style>
