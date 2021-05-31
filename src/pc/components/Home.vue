<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  props: {
    msg: {
      type: String,
      default: 'Home',
    },
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const data = reactive({
      val: 0,
      ifShowMask: false,
      suporka: 1,
      testArray: Array.from([]),
    })
    return { ...toRefs(data), count }
  },
})
</script>
