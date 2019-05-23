<template>
    <div>
        <h5>Имя: {{name}}</h5>
        <p>Должность: {{position}}</p>
        <p>Опыт работы: {{experience}}</p>
        <img :src="require('../../images/Sem.png')">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Семён',
            position: 'Бэкэнд разработчик',
            experience: '4 года'
        }
    }
}
</script>
