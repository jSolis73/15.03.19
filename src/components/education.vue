<template>
    <div>
        <p>Образование: {{education}}</p>
        <button @click = "chEdu()">Изменить статус образования</button>
    </div>
</template>

<script>
export default {
    
    props: {
        education: {

        },
        chEdu: {
            type: Function
        }
    }
}
</script>
