<template>
    <div>
        <p>Текущая страна: {{country}}</p>
        <inform-app :age = "age"
                    :country = "country"
                    :gender = "gender"
                    :changeFunc = "changeCountry" 
        >
        </inform-app>
    </div>
</template>

<script>
import Inform from './inform.vue'
export default {
    data(){
        return{
            age: 17,
            country: 'Германия',
            gender: 'мужской'
        }
    },
    components: {
        informApp: Inform
    },
    methods: {
        changeCountry(){
            this.country = 'Ирландия'
        }
    }
}
</script>


