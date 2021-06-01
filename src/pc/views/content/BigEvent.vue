<template>
  <div class="big-event">
    大事件
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MenuItem } from 'CommonTypes';

export default defineComponent({
  name: 'BigEvent',
  props: {

  },
  setup() {}
})
</script>
<style scoped lang="scss">
.big-event {
  background: #bdbcb7;
  height: 657px;
}
</style>
