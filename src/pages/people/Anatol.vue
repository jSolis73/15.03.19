<template>
    <div>
        <h5>Имя: {{name}}</h5>
        <p>Должность: {{position}}</p>
        <p>Опыт работы: {{experience}}</p>
        <img :src="require('../../images/Anat.png')"> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Анатолий',
            position: 'IOS разработчик',
            experience: 'стажёр'
        }
    }
}
</script>
