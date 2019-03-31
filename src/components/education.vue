<template>
    <div>
        <p>Образование: {{education}}</p>
        <button @click = "changeProp()">Изменить возраст</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    props: ['chEdu', 'chProp'],
    data()  {
        return {
            education: 'высшее',
        }
    },
    created() {
        eventBus.$on('chEdu', () => {
            this.education = 'среднее специальное'
        })
    },
    updated(){
        eventBus.$on('chProp', () => {
            this.age = 20})
    }
}
</script>
