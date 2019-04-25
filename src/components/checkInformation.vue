<template>
    <div class="btn-group btn-group-toggle">
        <p class="h6 m-2">Show additional input fields?</p>
        <button class="mr-1"
                :class="{'btn btn-danger': value}"
                @click.prevent="changeValue(true)">No
        </button>  
        <button class="ml-1"
                :class="{'btn btn-success': !value}"
                @click.prevent="changeValue(false)">Yes
        </button>
    </div>    
</template>

<script>
export default {
    props: ['value'],
    methods: {
        changeValue(newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>

