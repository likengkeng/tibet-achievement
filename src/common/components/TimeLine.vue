<template>
  <div style="position: relative;">
    <span class="prev-event"></span>
    <ul class="timeline">
      <li class='timeItem' v-for="(item, index) in currentList" :key="index">
        <div class="relative">
          <span class='date'>
            <label>{{ item.date }}</label>
          </span>
          <input class='radio' name='time-radio' type='radio'>
          <label></label>
          <span class="line"></span>
          <div class='content'>
            <img src="/static/imgs/news1.jpg" class="event-img">
            <div>
              <p><h4>{{ item.content.title }}</h4></p>
              <span>{{ item.content.desc }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  PropType,
  computed,
  ref,
} from 'vue';
interface TimeItem {
  id: string;
  date: string;
  content: {
    img: string;
    title: string;
    desc: string;
  },
}

export default defineComponent({
  name: 'TimeLine',
  props: {
    list: {
      type: Array as PropType<TimeItem[]>,
      default: () => [],
    },
  },
  setup(props) {
    const size = 5;
    const index = ref(0);
    const currentList = computed(() => {
      return props.list.slice(index, index.value + size);
    });
    return {
      currentList,
      index,
    }
  }
})
</script>
<style scoped lang="scss">
$line_width: 260px;
.timeline {
  list-style: none;
  margin: 80px 0 0;
  padding: 0;
  display: inline-block;
  border-spacing: $line_width 0;
  li {
    display: table-cell;
    .relative {
      position: relative;;
    }
    .date {
      text-align: center;
      top: -70px;
      left: -35px;
      right: 0;
      font-size: 0.95em;
      line-height: 20px;
      position: absolute;
      width: 100px;
    }
    .radio {
      margin: 0 auto;
      top: -17px;
      left: 0;
      right: 0;
      width: 30px;
      height: 30px;
      border: 5px solid #D8D8D8;
      border-radius: 50%;
      display: block;
      position: absolute;
      z-index: 101;
      opacity: 0;
    }
    .line {
      content: '';
      width: $line_width;
      height: 8px;
      background: #D8D8D8;
      position: absolute;
      top: -8px;
      left: -100px;
    }
    .radio + label::before{
      border: 5px solid #D8D8D8;
      border-radius: 50%;
      background: #FFFFFF;
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -17px;
      z-index: 100;
    }
    .radio:checked + label::before{
      background: #681313;
    }
    .content {
      position: absolute;
      width: 200px;
      height: 300px;
      border: 1px solid #eee;
      left: -86px;
      top: 30px;
      .event-img {
        width: 100%;
        height: 140px;
      }
    }
  }
}

.prev-event {
  background-image: url('/static/imgs/prevArrow1x.png');
  display: inline-block;
  width: 40px;
  height: 40px;
  background-repeat:no-repeat;
  position: absolute;
  top: 58px;
  left: 120px;
}
</style>
