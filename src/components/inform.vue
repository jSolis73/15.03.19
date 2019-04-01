<template>
    <div>
        <h3>Пользователь</h3>
        <p id = "ages">Возраст: {{age}}.  <button @click = "ageTest">Проверить на ограничение по возрасту</button></p>
        <p>Страна: {{country}}. Прописные буквы: {{largeSymb}}</p>
        <p>Пол: {{gender}}. Сокращение: {{cut}}</p>
        <button @click = "changeFunc()">Изменить страну</button>
        <button @click = "changeEdu">Изменить статус образования</button>
        <button @click = "changeAge">Изменить возраст</button>
       
    </div>
</template>

<script>
import {eventBus, cP} from '../main.js'
export default {
    props: {
        country: {

        },
        gender: {

        },
        changeFunc: {
            
        },
        chProp: {
            
        },
       
    },
    data(){
        return {
           age: 17
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
        },
        changeEdu(){
                eventBus.$emit('chEdu')          
        },
        changeAge(){
            eventBus.$on('chProp', this.age = 20)
        }
        
    }
    
}
</script>