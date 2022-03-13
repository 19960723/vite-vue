<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<script lang="ts">
import Cat from '@/utils/animal/cat'
const c = new Cat("咪咪", 6)
console.log(c.getName())
c.sayHello()
export default {
  name: "",
  props: [],
  setup() {
    
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>