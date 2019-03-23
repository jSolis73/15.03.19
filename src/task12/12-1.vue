<template>
    <div>
        <p>{{mes2}}</p>
        <button @click="chMes2">Изменить текст</button>
    </div>
</template>
<script>
    let mes21 = {mes2: 'Здесь мог быть ваш код'}; 
export default {
    data: function() {
        return mes21
    },
    methods: {
        chMes2: function() {
            this.mes2 = "а теперь здесь мой код"         
        }
    }   
}
</script>
