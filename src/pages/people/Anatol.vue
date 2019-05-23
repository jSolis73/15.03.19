<template>
    <div>
        <h5>{{name}}</h5>
        <p>{{position}}</p>
        <p>{{experience}}</p>
        <img :src="require('../images/Anat.png')">
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
