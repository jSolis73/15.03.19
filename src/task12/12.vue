<template>
    <div>
        <p>{{mes}}</p>
        <button @click="chMes">Изменить текст</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
        mes: 'Здесь мог быть ваш код'
        }
    },
    methods: {
        chMes(){
            this.mes = 'А теперь здесь мой код'        
        }
    } 
}
</script>
