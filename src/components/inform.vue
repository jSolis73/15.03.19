<template>
    <div>
        <h3>Пользователь</h3>
        <p id = "ages">Возраст: {{age}}.  <button @click = "ageTest">Проверить на ограничение по возрасту</button></p>
        <p>Страна: {{country}}. Прописные буквы: {{largeSymb}}</p>
        <p>Пол: {{gender}}. Сокращение: {{cut}}</p>
        <button @click = "changeFunc()">Изменить страну</button>
    </div>
</template>

<script>
export default {
    //props: ['age', 'country', 'gender'],
    props: {
        age: {
            type: Number,
            required: true
        },
        country: {

        },
        gender: {

        },
        changeFunc: {
            type: Function
        }
    },
    data(){
        return {
        
        }
    },
    computed: {
        largeSymb(){
            return this.country.toUpperCase()
        },
        cut(){
            return this.gender.substring(0,3)
        }
    },
    methods: {
        ageTest() { 
            let dd = this.age;
            if (dd < 18) {
                let years = document.getElementById('ages');
                years.outerText ='Извините, вы нам не подходите'; 
            }                    
        }
    }
}
</script>