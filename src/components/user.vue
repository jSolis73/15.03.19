<template>
    <div>
        <p>Текущая страна: {{country}}</p>
        <inform-app :age = "age"
                    :country = "country"
                    :gender = "gender"
                    :changeFunc = "changeCountry" 
                    :education = "education"
        >
        </inform-app>
        <user-edu :education = "education"
                  :chEdu="changeEdu" 
        >
        </user-edu>
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
            education: 'высшее'
        }
    },
    components: {
        informApp: Inform,
        userEdu: education
    },
    methods: {
        changeCountry(){
            this.country = 'Ирландия'
        },
        changeEdu(){
                this.education = 'среднее специальное'          
        }
    }
}
</script>


