<template>
    <div>
        <p>Текущая страна: {{country}}</p>
        <inform-app 
                    :country = "country"
                    :gender = "gender"
                    :changeFunc = "changeCountry"  
                    :age="age"        
        >
        </inform-app>
        <user-edu></user-edu>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
import Inform from './inform.vue'
import education from './education.vue'
export default {
    data(){
        return{
            country: 'Германия',
            gender: 'мужской',
            age: 17
            
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


