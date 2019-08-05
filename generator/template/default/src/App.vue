<template>
  <div id="app">
  <%_ if (options.vueRouter){ _%>
    <router-view />
  <%_ } _%>
  </div>
</template>
<%_ if (!options.vueRouter){ _%>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<%_ } _%>
<style lang="scss">
#app {
  font-family: Helvetica, Tahoma, "PingFang SC", Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
