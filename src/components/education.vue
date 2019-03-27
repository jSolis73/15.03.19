<template>
    <div>
        <p>Образование: {{education}}</p>
        <button @click = "changeEdu">Изменить статус образования</button>
    </div>
</template>

<script>
export default {
    
    props: ['education'],
    methods: {
        changeEdu(){
                this.education = 'среднее специальное'          
        }
    }
}
</script>
