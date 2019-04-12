<template>
    <div>
        <h3 v-if = "lengtArray < 11">{{message}}</h3>
        <h3 v-else>{{alert}}</h3>
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
            message: 'Вы можете добавлять карточки',
            alert: 'Внимание. Превышено максимальное количество карточек'
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
