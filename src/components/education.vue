<template>
    <div>
        <p>Образование: {{education}}</p>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    props: ['chEdu'],
    data()  {
        return {
            education: 'высшее'
        }
    },
    created() {
        eventBus.$on('chEdu', () => {
            this.education = 'среднее специальное'
        })
    }
}
</script>
