<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model = "email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">About me</label>
                <input type="email" v-model = "about" class="form-control" id="about" aria-describedby="emailHelp" placeholder="Your name, age, etc">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model = "checkedFields" class="form-check-input" id="sendNews">
                <label class="form-check-label" for="exampleCheck1">Send news</label>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" v-model = "checkedFields" class="form-check-input" id="acceptRules">
                <label class="form-check-label" for="exampleCheck1">accept rules</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model = "gender" type="radio" name="exampleRadios" id="male" value="option1">
                <label class="form-check-label" for="exampleRadios1">
                    male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" v-model = "gender" type="radio" name="exampleRadios" id="female" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                    female
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            email: '',
            about: '',
            checkedFields: [],
            gender: ''
        }
    }
}
</script>
