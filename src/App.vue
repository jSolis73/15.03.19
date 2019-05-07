<template>
  <div>
   <h4>{{firstDate | dateDiffertence}}</h4> 
  </div>
</template>

<script>

export default {
  filters: {
    dateDifference (value) {
      value = Date.now() / 1000 - firstDate.getTime() / 1000
      if (value <= 60)
        return "Только что";
      else if (value <= 3600)
        return value / 60 + "минут назад";
      else if (value >= 3600 && value < 3600 * 24)
        return firstDate.getHours() + firstDate.getMinutes();
      else if (value >= 3600 * 24)
        return firstDate.getDate() + firstDate.getMonth();
    }
  },
  data() {
    return {
      firstDate: new Date (2019, 4, 7),

    }
  }
}
</script>

<style>
  
</style>


