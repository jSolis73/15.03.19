<template>
  <div>
   <h4>{{firstDate | dateDifference}}</h4> 
  </div>
</template>

<script>

export default {
  filters: {
    dateDifference (value) {
      let result = Date.now() / 1000 - value.getTime() / 1000
      if (result <= 60)
        return "Только что";
      else if (result <= 3600)
        return result / 60 + "минут назад";
      else if (result >= 3600 && result < 3600 * 24)
        return value.getHours() + value.getMinutes();
      else if (result >= 3600 * 24)
        return value.getDate() + value.getMonth();
    }
  },
  data() {
    return {
      firstDate: new Date (2019, 4, 6),

    }
  }
}
</script>

<style>
  
</style>


