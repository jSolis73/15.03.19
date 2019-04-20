<template>
    <div>
        <form v-show = "show">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model = "email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">About me</label>
                <input type="email" v-model = "about" class="form-control" id="about" placeholder="Your name, age, etc">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model = "checkedFields" class="form-check-input" id="sendNews" value = "Send news">
                <label class="form-check-label" for="exampleCheck1">Send news</label>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model = "checkedFields" class="form-check-input" id="acceptRules" value = "accept rules">
                <label class="form-check-label" for="exampleCheck1">accept rules</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model = "gender" type="radio" name="radio1" id="male" value="male">
                <label class="form-check-label" for="exampleRadios1">
                    male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model = "gender" type="radio" name="radio2" id="female" value="female">
                <label class="form-check-label" for="exampleRadios2">
                    female
                </label>
            </div>
            <button type="submit" class="btn btn-primary" @click = "show = !show">Submit</button>
        </form>
        <div v-show = "!show">
            <p>Email adress: {{email}}</p>
            <p>About me: {{about}}</p>
            <p>Options</p>
            <ul>
                <li v-for = "option in checkedFields" :key = "option"> {{option}} </li>
            </ul>
            <p>Gender: {{gender}}</p>
        </div> 
    </div>    
</template>

<script>
export default {
    data() {
        return {
            show: true,
            email: '',
            about: '',
            checkedFields: [],
            gender: ''
        }
    }
}
</script>
