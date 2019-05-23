<template>
    <div>
        <h5>Имя: {{name}}</h5>
        <p>Должность: {{position}}</p>
        <p>Опыт работы: {{experience}}</p>
        <img :src="require('../../images/Stan.jpg')">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Станислав',
            position: 'Тестировщик',
            experience: '5 лет'
        }
    }
}
</script>
