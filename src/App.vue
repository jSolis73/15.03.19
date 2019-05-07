<template>
  <div>
    <h1 v-color.delayColor>{{message}}</h1>
    <h1 v-color:fontSize="'80px'">{{message}}</h1>
    <h1 v-color:fontStyle="'italic'">{{message}}</h1>
    <h1 v-color:background="'yellow'">{{message}}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'there is using my directive'
    }
  }
}
</script>

<style>
  h1 {
    transition-duration: .9s;
  }
</style>


