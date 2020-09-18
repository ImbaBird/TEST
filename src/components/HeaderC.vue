<template>
  <div class="layout-header">
      <div class="test">
xxxxxxxxxxxxxxx
      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb-item href="#">首页</Breadcrumb-item>
          <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
          <Breadcrumb-item>某应用</Breadcrumb-item>
        </Breadcrumb>
      </div>

  </div>

</template>
<script>
  export default {}
</script>
<style>
  .test{
    width: 100%;
    height: 50px;
  }
  .layout-breadcrumb{
    width: 100%;
    height: 30px;
    Z-index:11;
  }
  .layout-header{
    height: 100px;
    background: white;

  }

</style>
