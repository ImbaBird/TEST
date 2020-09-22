<template>
  <div class="menu">
    <h3>aaaaaaaaaa</h3>
<!--    <template v-for="item in test">-->
<!--      {{item}}<br>-->
<!--    </template>-->

    <template v-for="item in getroutes">
      <sub-menu
        v-if="item.children && item.children.length > 1"
        :item="item"
        :base-path="item.path"
        :key="item.path"
      />
      <menu-item
        v-else
        :path="item.path"
        :title="item.meta.title"
        :key="item.path"
      />
    </template>

  </div>
</template>

<script>
  import {routes} from "../router";
  import SubMenu from './SubMenu'
  import MenuItem from './MenuItem'

  export default {
    name: 'test-menu',
    components: {MenuItem, SubMenu},
    props: {},
    data() {
      return {
        persons: [
          {id: 1, name: 'Tom', age: 13},
          {id: 2, name: 'Jack', age: 12},
          {id: 3, name: 'Bob', age: 17},
          {id: 4, name: 'Cat', age: 14},
        ]
      }

    },
    methods: {},
    computed: {
      getroutes() {
        return routes
      },
      test() {
        let obj = this.persons
        return obj
      }

    }
  }
</script>

<style scoped>
  .menu {
    user-select: none;
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 5px 5px 5px rgba(204, 204, 204, 0.23);
    background: white;
    overflow-x: hidden;
  }
</style>
