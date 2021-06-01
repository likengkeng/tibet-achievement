<template>
  <div class="header" v-sticky>
    <ul class="text-center">
      <li
        v-for="(menu, index) in menuList"
        :key="index"
        :class="{active: isActive(menu)}"
        @click="selectMenu(menu)">
        <a>{{ menu.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject, PropType } from 'vue';
import { MenuItem } from 'CommonTypes';

export default defineComponent({
  name: 'MenuHeader',
  props: {
    menuList: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
    current: {
      type: Object as MenuItem,
      default: () => ({}),
    }
  },
  methods: {
    isActive(menu) {
      return this.current.value === menu.value;
    },
    selectMenu(menu) {
      this.updateCurrentMenu(menu);
    }
  },
  setup() {
    const updateCurrentMenu = inject('updateCurrentMenu');

    return {
      updateCurrentMenu,
    };
  },
})
</script>
<style scoped lang="scss">
.header {
  height: 68px;
  background: #940708;
  ul {
    height: 100%;
    li.active {
      background: #7A0001;
    }
    li {
      display: inline-block;
      height: 100%;
      line-height: 68px;
      width: 168px;
      cursor: pointer;
      a {
        color: #FFE5E5;
        font-size: 16px;
        text-decoration-line: none;
      }
    }
  }
}
</style>
