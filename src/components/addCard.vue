<template>
    <div>
        <h3>{{al}}</h3>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" style="padding-left: 230px">Title</label>      
            <div class="col-sm-10">
                <textarea v-model = "title" id = "title" class="form-control" style="width: 40%"></textarea>    
            </div>
            
            <label class="col-sm-2 col-form-label" style="padding-left: 230px">Text</label>
            <div class="col-sm-10">
                <textarea v-model = "text" id = "text" class="form-control" style="width: 40%"></textarea>
            </div> 
            
            <div class="col-sm-10" style="padding-left: 230px">    
                <button type = "button" @click = "createCard" class="btn btn-primary">Add Card</button>
            </div>             
        </div>    
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

