<template>
    <div class="container">
        <div class="row">
            <div class = "col-3" v-for = "card in arrayCards">
                {{card.title}} <br> {{card.text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['arrayCards']
}
</script>

<style>

</style>
