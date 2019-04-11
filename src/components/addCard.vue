<template>
    <div>
       <h5>Title</h5>
       <p><textarea v-model = "title" id = "title"></textarea></p>
       <h5>Text</h5>
       <p><textarea v-model = "text" id = "text"></textarea></p>
       <button type = "button" @click = "createCard">Add Card</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            text: '',
            arrayCards: []
        }
    },
    methods: {
        createCard() {
            let thisTitle = this.title;
            let thisText = this.text;
            this.arrayCards.push({title: thisTitle, text: thisText});
            setTimeout (function clearProps() {
                document.getElementById('title').value = '';
                document.getElementById('text').value = ''   
            }, 100)
        }
    }
}
</script>
