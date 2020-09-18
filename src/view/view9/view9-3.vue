<template>
  <button v-on:click="$emit('welcome')">
    Click me to be welcomed
  </button>
</template>
<script>
  export default {
    name: "welcomeButton1",


  }
</script>
