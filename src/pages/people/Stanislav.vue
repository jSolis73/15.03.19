<template>
    <div>
        <h5>{{name}}</h5>
        <p>{{position}}</p>
        <p>{{experience}}</p>
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
