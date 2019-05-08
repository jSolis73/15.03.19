<template>
  <div>
    <ul>
      <li v-for="someDate in dates" :key="someDate.index">{{someDate | dateDifference}}</li>
    </ul>
   <!-- <h4>{{firstDate | dateDifference}}</h4> 
   <h4>{{firstDate}}</h4>  -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  filters: {
    dateDifference (value) {
      let result = Date.now() / 1000 - value.getTime() / 1000
      if (result <= 60)
        return "Только что";
      else if (result <= 3600)
        return moment(value).startOf('result').fromNow();  
        // return Math.round(result / 60) + " минут назад";
      else if (result >= 3600 && result < 3600 * 24)
        return value.getHours() + " часов " + value.getMinutes() + " минут";
      else if (result >= 3600 * 24) {
        let day = moment(value).format("MMMM Do YYYY")
        return day
        // return value.getDate() + "." + (+value.getMonth()+1);
      }
    }
  },
  data() {
    return {
      dates: [
        new Date (2019, 4, 8, 22, 7),
        new Date (2019, 4, 8, 21, 40),
        new Date (2019, 4, 8, 13, 40),
        new Date (2019, 4, 3, 13, 40)
      ]
    }
  }
}
</script>

<style>
  
</style>


