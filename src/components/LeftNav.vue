<template>

  <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
    <div class="layout-logo-left">
      <Icon type="logo-apple"/>
      Admin
    </div>
    <Submenu key="1">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        导航一
      </template>
      <router-link to="/view1">
        <Menu-item key="1-1">轮播</Menu-item>
      </router-link>
      <router-link to="/view2">
        <Menu-item key="1-2">Form</Menu-item>
      </router-link>
      <router-link to="/view3">
        <Menu-item key="1-3">Icon</Menu-item>
      </router-link>
    </Submenu>
    <Submenu key="2">
      <template slot="title">
        <Icon type="ios-keypad"></Icon>
        导航二
      </template>
      <router-link to="/view4">
        <Menu-item key="2-1">Table</Menu-item>
      </router-link>
      <router-link to="/view5">
        <Menu-item key="2-2">List</Menu-item>
      </router-link>
      <router-link to="/view6">
        <Menu-item key="2-3">DDD</Menu-item>
      </router-link>

    </Submenu>
    <Submenu key="3">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        导航三
      </template>
      <router-link to="/view7">
        <Menu-item key="3-1">多级菜单</Menu-item>
      </router-link>

      <router-link to="/view8">
        <Menu-item key="3-2">Down</Menu-item>
      </router-link>
      <MenuItem to="/view9">xx</MenuItem>

    </Submenu>
  </Menu>

</template>
<script>
  export default {}
</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    color: white;
    font-size: 22px;
  }
</style>
