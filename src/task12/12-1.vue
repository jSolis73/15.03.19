<template>
    <div>
        <p>{{mes2}}</p>
        <button @click="chMes2">Изменить текст</button>
    </div>
</template>
<script>
    let mes21 = 'Здесь мог быть ваш код'; 
export default {
    data() {
        return {
            mes2: mes21 
        }
    },
    methods: {
        chMes2(){
            this.mes2 = "а теперь здесь мой код"         
        }
    }   
}
</script>
