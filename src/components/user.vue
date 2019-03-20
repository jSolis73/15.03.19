<template>
    <inform-app :age="age"
                :country="country"
                :gender="gender"
    >
    </inform-app>
</template>

<script>
import Inform from './inform.vue'
export default {
    data(){
        return{
            age: 24,
            country: 'Германия',
            gender: 'мужской'
        }
    },
    components: {
        informApp: Inform
    }
}
</script>


