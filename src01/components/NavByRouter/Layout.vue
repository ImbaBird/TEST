<template>
  <div id="box">
    <simple-menu/>
  </div>
</template>
<script>
  import SimpleMenu from "./Menu"
  export default {
    name:"Lay",
    components: { SimpleMenu }
  }
</script>
<style>
  body {
    margin: 0;
  }
  #box {
    height: 100vh;
  }
  .container {
    margin-left: 200px;
    height: 100%;
    background: #f5f7fa;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
