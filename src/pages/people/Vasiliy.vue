<template>
    <div>
        <h5>{{name}}</h5>
        <p>{{position}}</p>
        <p>{{experience}}</p>
        <img :src="require('../images/Stan.jpg')">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Василий',
            position: 'Фронтэнд разработчик',
            experience: '3 года'
        }
    }
}
</script>

