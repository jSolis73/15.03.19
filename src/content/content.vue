<template>
    <div id = "content">
        <ul>
            <li v-for = "n in 20">{{n}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    #content {
        width: 100%;
        box-sizing: border-box;
        background-color: rgb(169, 169, 172);
    }
</style>