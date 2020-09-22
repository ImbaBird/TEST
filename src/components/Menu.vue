<template>
  <div class="menu">
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
  import { routes } from '../router'
  import SubMenu from './SubMenu'
  import MenuItem from './MenuItem'

  export default {
    name: 'simple-menu',
    components: { MenuItem, SubMenu },
    props: {},
    data() {
      return{

      }
    },
    methods: {
    },
    computed: {
      getroutes() {
        return routes
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
