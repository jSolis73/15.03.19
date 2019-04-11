<template>
    <div>
        <h3>{{al}}</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :style = "{'width': valueProgress + '%'}">{{lengtArray}} из 10</div>
        </div>
        <h5>Title</h5>
        <p><textarea v-model = "title" id = "title"></textarea></p>
        <h5>Text</h5>
        <p><textarea v-model = "text" id = "text"></textarea></p>
        <button type = "button" @click = "createCard">Add Card</button>
    </div>
</template>

<script>
export default {
    props: ['arrayCards'],
    data() {
        return {
            title: '',
            text: '',
            al: 'Вы можете добавлять карточки'
        }
    },
    computed: {
        lengtArray() {
            return this.arrayCards.length
        },
        valueProgress() {
            return this.arrayCards.length * 10
        } 
    },
    methods: {
        createCard() {
            let thisTitle = this.title;
            let thisText = this.text;
            if (document.getElementById('title').value != ''|| document.getElementById('text').value != '') {  
                this.arrayCards.push({title: thisTitle, text: thisText});
                setTimeout (function clearProps() {
                    document.getElementById('title').value = '';
                    document.getElementById('text').value = ''   
                }, 100);
            }
            else if (this.arrayCards.length > 10) {
                    return {
                        al:'Внимание!!! Превышено максимальное значение карточек.' 
                    }    
            }  
        }
    }
}
</script>
