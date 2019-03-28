<template>
    <div>
        <p>Текущая страна: {{country}}</p>
        <inform-app :age = "age"
                    :country = "country"
                    :gender = "gender"
                    :changeFunc = "changeCountry"            
        >
        </inform-app>
        <user-edu></user-edu>
    </div>
</template>

<script>
import Inform from './inform.vue'
import education from './education.vue'
export default {
    data(){
        return{
            age: 17,
            country: 'Германия',
            gender: 'мужской',
            
        }
    },
    components: {
        informApp: Inform,
        userEdu: education
    },
    methods: {
        changeCountry(){
            this.country = 'Ирландия'
        }
        
    }
}
</script>


