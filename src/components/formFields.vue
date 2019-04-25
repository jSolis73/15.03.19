<template>
    <div class="m-4">
        <form v-show="show" style="width: 25%">
            <div class="form-group" >
                <label for="email">Email address</label>
                <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="about">About me</label>
                <input type="text" v-model="about" class="form-control" name="about" placeholder="Your name, age, etc">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model="checkedFields" class="form-check-input" id="sendNews" value="Send news">
                <label class="form-check-label" for="sendNews">Send news</label>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model="checkedFields" class="form-check-input" id="acceptRules" value="Accept rules">
                <label class="form-check-label" for="acceptRules">Accept rules</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model="gender" type="radio" id="radio1" value="male">
                <label class="form-check-label" for="radio1">
                    male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model="gender" type="radio" id="radio2" value="female">
                <label class="form-check-label" for="radio2">
                    female
                </label>
            </div>
            <check-inform></check-inform>
            <p><button type="submit" class="btn btn-primary mt-3" @click.prevent="show=!show"> Submit </button></p>
        </form>
        <div v-show="!show" class="h4 bg-secondary p-1" style="width: 35%">
            <p class="bg-info text-white ">Email adress: {{email}}</p>
            <p class="bg-info text-white">About me: {{about}}</p>
            <p class="bg-info text-white">Options:</p>
            <ul class="bg-info text-white">
                <li v-for="option in checkedFields" :key="option"> {{option}} </li>
            </ul>
            <p class="bg-info text-white">Gender: {{gender}}</p>  
        </div>   
    </div>    
</template>

<script>
import checkInformation from './checkInformation.vue'
export default {
    data() {
        return {
            show: true,
            email: '',
            about: '',
            checkedFields: [],
            gender: ''
        }
    },
    components: {'checkInform': checkInformation}
}    
</script>
