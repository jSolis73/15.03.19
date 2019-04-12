<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style = "{'width': valueProgress + '%'}">{{lengtArray}} из 10</div>
    </div>
</template>

<script>
export default {
    props: ['arrayCards'],
    computed: {
        lengtArray() {
            return this.arrayCards.length
        },
        valueProgress() {
            return this.arrayCards.length * 10
        } 
    },
}
</script>

