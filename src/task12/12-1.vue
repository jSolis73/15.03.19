<template>
    <div>
        <p v-if = "mes2">Здесь мог быть ваш код</p>
        <p v-else>Теперь здесь мой код</p>
        <button @click="mes2 = !mes2">Изменить текст</button>
    </div>
</template>
<script>
let cc ={mes2: true}
export default {
    data(){
        return cc 
    }
        
    
}
</script>
