<template>
  <div class="anchor-nav">
    <ul class="text-center">
      <li class="navigator">导航</li>
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
  name: 'AnchorNavigator',
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
.anchor-nav {
  ul {
    text-align: center;
    .navigator {
      margin-top: 80px;
    }
    li.active {
      background: #7A0001;
    }
    li {
      margin: 8px auto;
      height: 52px;
      line-height: 52px;
      width: 136px;
      background: #B01516;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
}
</style>
