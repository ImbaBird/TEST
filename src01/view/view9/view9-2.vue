<template>
<!--  <button v-on:click="$emit('welcome')">-->
  <button v-on:click="fun">
    Click me to be welcomed
  </button>
</template>
<script>
  export default {
    name: "welcomeButton",
    methods: {
      fun(){
        this.$emit('welcome','xx')
      }
    }
  }
</script>
