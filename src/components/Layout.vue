<template>
  <div id="box">
    <div>sssssssss</div>
<!--    <test-menu></test-menu>-->
    <simple-menu/>
    <div class="container">

      <router-view/>
    </div>
  </div>
</template>
<script>
  import SimpleMenu from "./Menu"
  import TestMenu from "./Test";

  export default {
    // name:{LayoutNav},
    components: {SimpleMenu, TestMenu}
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
