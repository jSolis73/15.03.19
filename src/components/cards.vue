<template>
    <div>
        <slot><h1>Млечный путь</h1></slot>
        <hr>
        <slot><h2>Солнечная система</h2></slot> 
        <hr>
        <slot name = "description"></slot>   
    </div>
</template>

<script>
export default {
    
}
</script>

