<template>
  <div id="emit-example-simple">
    <welcome-button1 ref="welcome-button" v-on:welcome="sayHi"></welcome-button1>
  </div>
</template>
<script>
  import welcomeButton1 from './view9-3'
  export default {
    components:{welcomeButton1},
    methods: {
      sayHi(value) {
        // alert(value)
        alert("xxx")
        console.log("xxxxxx")
      }
    }
  }
</script>
