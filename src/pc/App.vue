<template>
  <div>
    <!-- <div class="flex space-around router">
      <router-link to="/home">Home</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

interface ResData {
  user: {
    name: String
    child: {
      name: string
    }[]
  }[]
}
export default defineComponent({
  setup() {
    const store = useStore()
    const data = reactive({
      show: true,
    })
    setInterval(() => {
      store.dispatch('countUp')
    }, 1000)

    return { ...toRefs(data) }
  },
})
</script>

<style scoped>
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: rotate(0deg);
}
.router a {
  padding-right: 20px;
}
</style>
