<template>
    <div>
        <h3 v-if = "lengtArray < 11">{{al}}</h3>
        <h3 v-else>{{al2}}</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style = "{'width': valueProgress + '%'}">{{lengtArray}} из 10</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['arrayCards'],
    data() {
        return {
            al: 'Вы можете добавлять карточки',
            al2: 'Внимание. Превышено максимальное количество карточек'
        }
    },
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

