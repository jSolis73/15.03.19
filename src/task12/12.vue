<template>
    <div>
        <p v-if = "mes">Здесь мог быть ваш код</p>
        <p v-else>Теперь здесь мой код</p>
        <button @click="mes = !mes">Изменить текст</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        mes: true
        }
    } 
}
</script>
