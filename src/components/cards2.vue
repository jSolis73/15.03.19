<template>
    <div class="text-success">
        <slot><h1>Галактика Андромеды</h1></slot>
        <hr>
        <slot><h2>спиральная галактика типа Sb, крупнейшая галактика Местной группы. Ближайшая к Млечному Пути большая галактика. </h2></slot>
        <p>{{counter}}</p>  
        <button type = "button" class="btn btn-outline-danger" @click = "count">Увеличить значение счетчика</button>
    </div>
</template>

<script>
export default {
    activated() {
        console.log('Компонент "cards2" был активирован')
    },
    deactivated() {
        console.log('Компонент "cards2" был уничтожен')
    },
    data(){
        return {
            counter: '0'
        }
    },
    methods: {
        count() {
            return this.counter++
        }
    }
}
</script>