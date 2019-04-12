<template>
    <div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label mt-2" style="padding-left: 230px">Title</label>      
            <div class="col-sm-10">
                <textarea v-model = "title" id = "title" class="form-control mt-3" style="width: 40%"></textarea>    
            </div>
            
            <label class="col-sm-2 col-form-label mt-2" style="padding-left: 230px">Text</label>
            <div class="col-sm-10">
                <textarea v-model = "text" id = "text" class="form-control mt-3" style="width: 40%"></textarea>
            </div> 
            
            <div class="col-sm-10" style="padding-left: 230px">    
                <button type = "button" @click = "createCard" class="btn btn-primary mt-3">Add Card</button>
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
            text: ''
        }
    },
    methods: {
        createCard() {
            let title = this.title;
            let text = this.text;
            if (document.getElementById('title').value != '' && document.getElementById('text').value != '') {  
                this.arrayCards.push({title, text});
                setTimeout (function clearProps() {
                    document.getElementById('title').value = '';
                    document.getElementById('text').value = '';  
                }, 100);
            }  
        }
    }
}
</script>


