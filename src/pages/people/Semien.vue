<template>
    <div>
        <h5>{{name}}</h5>
        <p>{{position}}</p>
        <p>{{experience}}</p>
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
