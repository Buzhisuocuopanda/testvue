<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div>
    <ul>
      <li v-for="item in randomData" :key="item.id">{{ item.value }}</li>
    </ul>
  </div>
</template>



<script>
import axios from "core-js/internals/queue";

export default {
  data () {
    return {
      randomData: []
    }
  },
  mounted () {
    axios.get('http://api.com/random-data')
        .then(response => {
          this.randomData = response.data
        })
        .catch(error => {
          console.log(error)
        })
  }

}
</script>
