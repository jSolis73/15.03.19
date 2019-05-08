<template>
  <div>
   <h4>{{firstDate | dateDifference}}</h4> 
   <h4>{{firstDate}}</h4> 
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
        return Math.round(result / 60) + " минут назад";
      else if (result >= 3600 && result < 3600 * 24)
        return value.getHours() + " часов " + value.getMinutes() + " минут";
      else if (result >= 3600 * 24) {
        let day = moment(value).format("DD, MM")
        return day
        // return value.getDate() + "." + (+value.getMonth()+1);
      }
    }
  },
  data() {
    return {
      firstDate: new Date (2019, 4, 7, 19, 52),

    }
  }
}
</script>

<style>
  
</style>


