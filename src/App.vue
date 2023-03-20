<template>
  <Header :btnIcon="headerContent" :btnLink="headerContent"/>
  <router-view/>
</template>
<script>

import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      headerContent: [
        {icon: "", link: "/liked"},
        {icon: "", link: "/notifications"},
        {icon: "", link: "/settings"},
        {icon: "", link: "/profile"},
      ]
    }
  }
}
</script>
<style lang="scss">
body{
  background: #F6F7F9;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
