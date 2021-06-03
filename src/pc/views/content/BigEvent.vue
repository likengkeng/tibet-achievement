<template>
  <div class="big-event">
    大事件
    <time-line :list="bigEventList"></time-line>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import TimeLine from '@/common/components/TimeLine.vue';
import $http from '@/pc/api/event';
import { eventList } from '../mock';

export default defineComponent({
  name: 'BigEvent',
  components: {
    TimeLine,
  },
  props: {

  },
  setup() {
    // TO_DO(发送请求获取数据)
    let bigEventList = [];
    $http.getBigEventList()
      .then((res) => {
        // bigEventList = res;
      })
      .catch(() => {

      });
    bigEventList = eventList;
    const state: {
      bigEventList: Array<{[key: string]: any}>,
    } = reactive({
      bigEventList,
    });

    return {
      ...toRefs(state),
    }
  }
})
</script>
<style scoped lang="scss">
.big-event {
  background: #FFFFFF;
  height: 657px;
}
</style>
