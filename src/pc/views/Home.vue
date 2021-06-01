<template>
  <div class="tibet-achievement">
    <div class="cover-logo"></div>
    <menu-header :menuList="menuList" :current="currentMenu"></menu-header>
    <div class="flex">
      <div class="content">
        <component
          v-for="(contenItem, index) in contentList"
          :key="index"
          :class="contenItem.value + '_jump_page'"
          :is="contenItem.content">
        </component>
      </div>
      <div class="left-menu" v-sticky="{top: '-80px', width: '362px', right: '0px', height: 1246}">
        <anchor-navigator :menuList="menuList" :current="currentMenu"></anchor-navigator>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  provide,
  readonly,
  onMounted,
  computed,
  markRaw,
} from 'vue';
import MenuHeader from '@/pc/components/MenuHeader.vue';
import AnchorNavigator from '@/pc/components/AnchorNavigator.vue';
import { jumpToContent } from '@/common/util/anchor';
import Preface from './content/Preface.vue';
import LeaderCare from './content/LeaderCare.vue';
import BigEvent from './content/BigEvent.vue';
import OrganizeWork from './content/OrganizeWork.vue';
import RoleModel from './content/RoleModel.vue';
import SevenGroup from './content/SevenGroup.vue';
import { MenuItem } from 'CommonTypes';

export default defineComponent({
  //defineComponent: 启用类型判断，支持typescript
  name: 'Home',
  components: {
    MenuHeader,
    AnchorNavigator,
    Preface,
    LeaderCare,
    BigEvent,
    OrganizeWork,
    RoleModel,
    SevenGroup,
  },
  props: {
  },
  setup() {
    const menuList: MenuItem[] = reactive([
      {
        text: '首页',
        value: 'indexPage',
      },
      {
        text: '序言',
        value: 'preface',
        content: markRaw(Preface),
      },
      {
        text: '领导关怀',
        value: 'leaderCare',
        content: markRaw(LeaderCare),
      },
      {
        text: '大事件',
        value: 'bigEvent',
        content: markRaw(BigEvent),
      },
      {
        text: '组织工作',
        value: 'organizeWork',
        content: markRaw(OrganizeWork),
      },
      {
        text: '榜样力量',
        value: 'roleModel',
        content: markRaw(RoleModel),
      },
      {
        text: '七地组声',
        value: 'sevenGroup',
        content: markRaw(SevenGroup),
      },
    ]);
    const state: {
      currentMenu: MenuItem,
      menuList: MenuItem[],
    } = reactive({
      menuList,
      currentMenu: {},
    });
    const contentList = computed(() => state.menuList.slice(1, state.menuList.length));
    const updateCurrentMenu = (menu) => {
      state.currentMenu = menu;
      jumpToContent(`${state.currentMenu.value}_jump_page`);
    }
    onMounted(() => {
      state.currentMenu = menuList[0];
    })
    provide('updateCurrentMenu', updateCurrentMenu);
    return {
      ...toRefs(state),
      updateCurrentMenu,
      contentList,
    }
  },
})
</script>

<style scoped>
.content {
  min-height: 3500px;
  background: #ffeebb;
  flex: 1;
}
.left-menu {
  flex: 0 0 362px;
  min-height: 3500px;
  background: burlywood;
}
</style>
